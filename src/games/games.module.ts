import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from './schemas/game.schema';
import { PlayersModule } from 'src/players/players.module';
import { DecksModule } from 'src/decks/decks.module';
import { WinconditionsModule } from 'src/winconditions/winconditions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
    PlayersModule,
    DecksModule,
    WinconditionsModule,
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
