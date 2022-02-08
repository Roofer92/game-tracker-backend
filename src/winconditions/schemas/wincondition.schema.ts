import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Wincondition {
  @Prop({ required: true })
  type: string;

  @Prop({ default: 0 })
  total_wins: number;
}
