import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Deck } from 'src/decks/schemas/deck.schema';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deck' }] })
  decks: Deck[];
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
