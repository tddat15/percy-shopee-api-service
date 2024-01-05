import { Inject, Injectable } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export type Environment =
  | 'local'
  | 'development'
  | 'test'
  | 'staging'
  | 'production';

export type Stage = 'dev' | 'demo' | 'test' | 'qa' | 'stag' | 'uat' | 'prod';

export const appConfig = registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'Percy shoppee',
  port: process.env.APP_PORT || 3000,
  stage: process.env.STAGE || 'dev',
}));

@Injectable()
export class AppConfig {
  public readonly name: string;
  public readonly port: number;
  public readonly env: Environment;
  public readonly stage: Stage;

  constructor(
    @Inject(appConfig.KEY)
    config: ConfigType<typeof appConfig>,
  ) {
    this.name = config.name;
    this.port = Number(config.port);
    this.env = config.env as Environment;
    this.stage = config.stage as Stage;
  }

  public get isLocal(): boolean {
    return this.env === 'local';
  }

  public get isProduction(): boolean {
    return this.env === 'production';
  }
}
