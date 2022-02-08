import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Deck } from 'src/decks/schemas/deck.schema';
import { Player } from 'src/players/schemas/player.schema';
import {
  Wincondition,
  WinconditionSchema,
} from 'src/winconditions/schemas/wincondition.schema';

@Schema()
export class Participant {
  @Prop({ required: true })
  player: Player;

  @Prop({ required: true })
  deck: Deck;
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ type: [ParticipantSchema], required: true })
  particitpants: Participant[];

  @Prop({ type: ParticipantSchema })
  winner: Participant;

  @Prop({ type: WinconditionSchema })
  wincondition: Wincondition;
}

export const GameSchema = SchemaFactory.createForClass(Game);
