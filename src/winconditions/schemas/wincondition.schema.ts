import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WinconditionDocument = Wincondition & Document;

@Schema()
export class Wincondition {
  @Prop({ required: true })
  type: string;

  @Prop({ default: 0 })
  total_wins: number;
}

export const WinconditionSchema = SchemaFactory.createForClass(Wincondition);
