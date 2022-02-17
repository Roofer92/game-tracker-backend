import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Deck, DeckSchema } from 'src/decks/schemas/deck.schema';
import { Player, PlayerSchema } from 'src/players/schemas/player.schema';
import {
  Wincondition,
  WinconditionSchema,
} from 'src/winconditions/schemas/wincondition.schema';

@Schema()
export class Participant {
  @Prop({ type: PlayerSchema, ref: 'Player', required: true })
  player: Player;

  @Prop({ type: DeckSchema, ref: 'Deck', required: true })
  deck: Deck;

  @Prop({ required: true })
  isWinner: boolean;
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ type: [ParticipantSchema], required: true })
  participants: Participant[];

  @Prop({ type: WinconditionSchema, ref: 'Wincondition' })
  wincondition: Wincondition;
}

export const GameSchema = SchemaFactory.createForClass(Game);
