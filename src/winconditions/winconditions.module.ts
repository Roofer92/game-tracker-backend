import { Module } from '@nestjs/common';
import { WinconditionsService } from './winconditions.service';
import { WinconditionsController } from './winconditions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WinconditionSchema } from './schemas/wincondition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Wincondition', schema: WinconditionSchema },
    ]),
  ],
  controllers: [WinconditionsController],
  providers: [WinconditionsService],
  exports: [WinconditionsService],
})
export class WinconditionsModule {}
