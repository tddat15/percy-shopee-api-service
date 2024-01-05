import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { ConfigModule, DatabaseConfig } from '../../config';

@Module({
  imports: [ConfigModule],
  providers: [MongodbService, DatabaseConfig],
  exports: [MongodbService], // Export service để có thể sử dụng ở mọi nơi trong ứng dụng
})
export class MongodbModule {}
