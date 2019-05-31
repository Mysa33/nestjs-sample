import * as cors from 'cors';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";
import express = require('express');
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .new DocumentBuilder()
    .setTitle('SG NestJS API demo')
    .setDescription('SG NestJS API demo')
    .setVersion('1.0')
    .setContactEmail('example@sgcib.com')
    .setTermsOfService('Internal usage')
    .setHost('localhost:9999/api/v1')
    .addOAuth2('implicit', oauth2Endpoint)
    .build();
  // All api endpoints will be prefixed with "/api/"
  app.setGlobalPrefix('api/v1');
  // Allow CORS requests
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Cache-Control',
      'Content-Type',
      'If-Modified-Since',
      'Origin',
      'Pragma',
      'X-Data-Count',
      'X-Requested-With'
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));
  app.use(noCache);
  const document = SwaggerModule.createDocument(app, options);
  await SwaggerModule.setup('api', app, document);
  app.use('/static', express.static(__dirname + '/public'));
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
