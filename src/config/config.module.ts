import { Global, Module } from '@nestjs/common';
import { databaseConfig } from './database.config';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      // validationSchema: Joi.object({
      //   ...databaseConfig,
      // }),
      validationOptions: { abortEarly: true },
    }),
  ],
})
export class ConfigModule {}
