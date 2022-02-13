import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Player } from 'src/players/schemas/player.schema';

export type DeckDocument = Deck & Document;

@Schema()
export class Commander {
  @Prop({ required: true })
  name: string;

  @Prop()
  scryfall_url: string;
}

export const CommanderSchema = SchemaFactory.createForClass(Commander);

@Schema()
export class Deck {
  @Prop()
  name: string;

  @Prop({ type: [CommanderSchema], required: true })
  commander: Commander[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Player' })
  owner: Player;

  @Prop({ default: 0 })
  total_games: number;

  @Prop({ default: 0 })
  total_wins: number;
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
