import mongoose from 'mongoose';
import { Deck } from 'src/decks/entities/deck.entity';
import { Player } from 'src/players/entities/player.entity';
import { Wincondition } from 'src/winconditions/entities/wincondition.entity';

export class CreateGameDto {
  participants: {
    player: { _id: mongoose.Types.ObjectId } & Player;
    deck: { _id: mongoose.Types.ObjectId } & Deck;
    isWinner: boolean;
  }[];
  wincondition: { _id: string } & Wincondition;
  playedAt: Date;
}
