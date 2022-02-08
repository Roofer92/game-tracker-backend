import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { DecksModule } from './decks/decks.module';
import { WinconditionsModule } from './winconditions/winconditions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.188.52/nest'),
    PlayersModule,
    DecksModule,
    WinconditionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
