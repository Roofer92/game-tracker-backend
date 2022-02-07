import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Player } from 'src/players/schemas/player.schema';

export type DeckDocument = Deck & Document;

@Schema()
export class Deck {
  @Prop()
  name: string;

  @Prop({ required: true })
  commander: {
    name: string;
    scryfallUrl: string;
  };

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Player' })
  owner: Player;
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
