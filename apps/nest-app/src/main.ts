/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import { FooTypeFromAlias } from '@/foo';

console.log('FooTypeFromAlias: ', FooTypeFromAlias);

console.log('environment: ', environment);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// console.log(DEBUG);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// console.log(DEBUG1);

async function bootstrap() {
  console.log(1111222);
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
