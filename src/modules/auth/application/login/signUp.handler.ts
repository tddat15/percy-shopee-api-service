import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignUpCommand } from './signUp.command';
import { Auth0Service } from '../../service';
import { SignUpResponse } from './signUp.response';

@CommandHandler(SignUpCommand)
export class SignUpHandler
  implements ICommandHandler<SignUpCommand, SignUpResponse>
{
  constructor(private readonly auth0Service: Auth0Service) {}

  async execute(command: SignUpCommand): Promise<SignUpResponse> {
    const result = await this.auth0Service.createUser(command.body);
    return {
      email: result.data.email,
      userType: result.data.user_metadata.user_type,
    };
  }
}
