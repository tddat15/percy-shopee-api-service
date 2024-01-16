import { Module } from '@nestjs/common';
import { HealthCheck } from './helpers/check.connect';
import { MongodbModule } from './databases/mongodb';
import { ConfigModule } from './config';
import { AuthModule } from './modules/auth';

@Module({
  imports: [HealthCheck, MongodbModule, ConfigModule, AuthModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
