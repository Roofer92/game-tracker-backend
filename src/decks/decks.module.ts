import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckSchema } from './schemas/deck.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Decks', schema: DeckSchema }])],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
