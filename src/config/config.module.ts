import { Global, Module } from '@nestjs/common';

import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { AppConfig, appConfig } from './app.config';
import { apiConfig, ApiConfig } from './api.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig, apiConfig],
      validationOptions: { abortEarly: true },
    }),
  ],
  providers: [AppConfig, ApiConfig],
  exports: [AppConfig, ApiConfig],
})
export class ConfigModule {}
