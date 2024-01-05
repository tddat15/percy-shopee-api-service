import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from './login.command';
import { LoginResponse } from './login.response';
import { UserType } from '@prisma/client';

@CommandHandler(LoginCommand)
export class LoginHandler
  implements ICommandHandler<LoginCommand, LoginResponse>
{
  constructor() {}

  async execute(command: LoginCommand): Promise<LoginResponse> {
    return {
      email: 'email',
      userType: UserType.ADMIN,
    };
  }
}
