import * as Joi from 'joi';
import { ConfigType, registerAs } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

export const apiSchema = {
  API_PREFIX: Joi.string().default('percy-shopee-svc'),
  API_VERSION: Joi.string().default('v1'),
};

export const apiConfig = registerAs('api', () => ({
  prefix: process.env.API_PREFIX,
  version: process.env.API_VERSION,
}));

@Injectable()
export class ApiConfig {
  public readonly prefix: string;
  public readonly version: string;

  constructor(
    @Inject(apiConfig.KEY)
    config: ConfigType<typeof apiConfig>,
  ) {
    this.prefix = config.prefix;
    this.version = config.version;
  }
}
