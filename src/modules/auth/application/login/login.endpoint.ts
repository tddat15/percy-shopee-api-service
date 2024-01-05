import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Get } from '@nestjs/common';
import { LoginCommand } from './login.command';
import { LoginRequestBody } from './login.request-body';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginResponse } from './login.response';

@ApiTags('Auth')
@Controller('auth')
export class LoginEndpoint {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ description: 'Sign up new account' })
  @Get('/login')
  @ApiOkResponse({ type: LoginResponse })
  async signUp(@Body() body: LoginRequestBody): Promise<LoginResponse> {
    return await this.commandBus.execute(new LoginCommand(body));
  }
}
