import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API MONEY MANAGER')
  .setDescription('manage your finances')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  //comentado por temas de produccion
  // app.setGlobalPrefix('/api');
  app.enableCors()
  // app.getUrl()
  await app.listen(9999);
}
bootstrap();
