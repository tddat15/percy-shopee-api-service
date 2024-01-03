import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';

@Module({
  providers: [MongodbService],
  exports: [MongodbService], // Export service để có thể sử dụng ở mọi nơi trong ứng dụng
})
export class MongodbModule {}
