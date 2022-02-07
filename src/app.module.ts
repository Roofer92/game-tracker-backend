import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    PlayersModule,
    MongooseModule.forRoot('mongodb://192.168.188.52/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
