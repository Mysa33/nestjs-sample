import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";
import express = require('express');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Employees API')
  .setDescription('The SG Employees API')
  .setVersion('1.0')
  .setBasePath('api')
  .addTag('employees')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  //app.setGlobalPrefix('api/v1');
  await SwaggerModule.setup('api', app, document);
  app.use('/static', express.static(__dirname + '/public'));
  await app.listen(3000);
}
bootstrap();
