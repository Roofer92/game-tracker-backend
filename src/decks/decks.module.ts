import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckSchema } from './schemas/deck.schema';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
    PlayersModule,
  ],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
