import { ConfigType, registerAs } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

export const databaseConfig = registerAs('database', () => ({
  mongodbUri: process.env.MONGODB_URI,
  mongodbName: process.env.MONGODB_NAME,
}));

@Injectable()
export class DatabaseConfig {
  public readonly mongodbUri: string;
  public readonly mongodbName: string;

  constructor(
    @Inject(databaseConfig.KEY)
    config: ConfigType<typeof databaseConfig>,
  ) {
    this.mongodbName = config.mongodbName;
    this.mongodbUri = config.mongodbUri;
  }
}
