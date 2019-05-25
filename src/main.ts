import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Employees API')
  .setDescription('The SG Employees API')
  .setVersion('1.0')
  .addTag('employees')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  //app.setGlobalPrefix('api/v1/');
  await app.listen(3000);
}
bootstrap();
