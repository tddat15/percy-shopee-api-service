import { CommandBus } from '@nestjs/cqrs';
import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpCommand } from './signUp.command';
import { SignUpRequestBody } from './signUp.request-body';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignUpResponse } from './signUp.response';
import { ResponseInterceptor } from '@common/response.interceptor';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
@UseInterceptors(ResponseInterceptor)
export class SignUpEndpoint {
  constructor(private readonly commandBus: CommandBus) {}
  @ApiOperation({ description: 'Sign up new account' })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('/signup')
  signUp(@Body() body: SignUpRequestBody): Promise<SignUpResponse> {
    return this.commandBus.execute<SignUpCommand, SignUpResponse>(
      new SignUpCommand(body),
    );
  }
}
