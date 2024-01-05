import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Post } from '@nestjs/common';
import { SignUpCommand } from './signUp.command';
import { SignUpRequestBody } from './signUp.request-body';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpResponse } from './signUp.response';

@ApiTags('Auth')
@Controller('auth')
export class SignUpEndpoint {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ description: 'Sign up new account' })
  @Post('/signup')
  @ApiOkResponse({ type: SignUpResponse })
  async signUp(@Body() body: SignUpRequestBody): Promise<SignUpResponse> {
    return await this.commandBus.execute(new SignUpCommand(body));
  }
}
