import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';
import { ApiConfig, AppConfig } from './config';
import { useContainer } from 'class-validator';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { prefix, version } = app.get(ApiConfig);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  //init middleware
  app.use(helmet());
  app.use(compression());

  //set prefix for all url and api
  app.setGlobalPrefix(prefix);

  //setup swagger
  const config = new DocumentBuilder()
    .setTitle('Percy shoppee example')
    .setDescription('The percy shoppee API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${prefix}/swagger`, app, document);

  const appConfig = app.get(AppConfig);
  const server = await app.listen(appConfig.port);

  server.keepAliveTimeout = 65 * 1000; // Ensure all inactive connections are terminated by the ALB, by setting this a few seconds higher than the ALB idle timeout
  server.headersTimeout = 66 * 1000; // Ensure the headersTimeout is set higher than the keepAliveTimeout due to this nodejs regression bug: https://github.com/nodejs/node/issues/27363

  // Log Swagger URL
  const url = await app.getUrl();
  Logger.log(`Swagger UI is available at ${url}/${prefix}/swagger`);

  return appConfig;
}

bootstrap()
  .then((appConfig: AppConfig) => {
    new Logger('Bootstrap').log(
      { appConfig },
      `Server is listening on port ${appConfig.port}, environment=${appConfig.env}`,
    );
  })
  .catch((err) => {
    new Logger('Bootstrap').error(`Error starting server, ${err}`);
    throw err;
  });
