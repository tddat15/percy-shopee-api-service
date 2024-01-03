import { Module } from '@nestjs/common';
import { HealthCheck } from './helpers/check.connect';
import { MongodbModule } from './databases/mongodb';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [HealthCheck, MongodbModule, ConfigModule],
})
export class AppModule {}
