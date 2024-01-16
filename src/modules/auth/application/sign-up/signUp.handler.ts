import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignUpCommand } from './signUp.command';
import { Auth0Service } from '../../service';
import { SignUpResponse } from './signUp.response';
import { SignUpRequestBody } from './signUp.request-body';
import { BadRequestException } from '@nestjs/common';
import { MongodbService } from '../../../../databases/mongodb/services';

@CommandHandler(SignUpCommand)
export class SignUpHandler
  implements ICommandHandler<SignUpCommand, SignUpResponse>
{
  constructor(
    private readonly auth0Service: Auth0Service,
    private readonly mongodbService: MongodbService,
  ) {}

  async execute(command: SignUpCommand): Promise<SignUpResponse> {
    return await this.signUp(command.body);
  }

  private async signUp(options: SignUpRequestBody): Promise<SignUpResponse> {
    console.log('aaaaaaaaaaaa', options);
    const { email, userType } = options.user;

    const user = await this.mongodbService.user.findFirst({
      where: {
        email,
      },
    });
    console.log('User ', user);

    if (user) {
      throw new BadRequestException('This email already existed!');
    }

    await this.auth0Service.createUser(options);
    await this.mongodbService.user.create({
      data: {
        email: email,
        username: options.user.username,
        name: options.user.name,
        userType,
      },
    });

    return {
      email,
      userType,
    };
  }
}
