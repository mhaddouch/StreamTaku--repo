import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env['MONGODB_CONNECTION_STRING'] ??
        'mongodb://localhost/streamtaku'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
