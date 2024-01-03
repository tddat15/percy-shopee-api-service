import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const healthCheck = new HealthCheck();

  //init middleware
  app.use(helmet());
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('Percy shoppee example')
    .setDescription('The percy shoppee API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
  // healthCheck.checkOverLoad();
}
bootstrap();
