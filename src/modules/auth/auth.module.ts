import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ConfigModule } from '@nestjs/config';
import * as useCases from './application';
import { Auth0Service } from './service';

const applications = Object.values(useCases);
const endpoints = applications.filter((x) => x.name.endsWith('Endpoint'));
const handlers = applications.filter((x) => x.name.endsWith('Handler'));

@Module({
  imports: [CqrsModule, ConfigModule],
  controllers: [...endpoints],
  providers: [...handlers, Auth0Service],
  exports: [Auth0Service],
})
export class AuthModule {}
