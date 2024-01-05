import { Module } from '@nestjs/common';
import { HealthCheck } from './helpers/check.connect';
import { MongodbModule } from './databases/mongodb';
import { ConfigModule } from './config';
import { AuthModule } from './modules/auth';
import { UserModule } from './user/user.module';

@Module({
  imports: [HealthCheck, MongodbModule, ConfigModule, AuthModule, UserModule],
})
export class AppModule {}
