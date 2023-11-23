import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@avans-nx-individueel/backend/user';

@Module({
  imports: [
    MongooseModule.forRoot(
       process.env['MONGODB_CONNECTION_STRING'] ??
      'mongodb://127.0.0.1:27017/streamtaku'
    ),
    UserModule,
  ],
})
export class AppModule {}
