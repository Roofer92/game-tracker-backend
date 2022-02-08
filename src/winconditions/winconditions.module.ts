import { Module } from '@nestjs/common';
import { WinconditionsService } from './winconditions.service';
import { WinconditionsController } from './winconditions.controller';

@Module({
  controllers: [WinconditionsController],
  providers: [WinconditionsService]
})
export class WinconditionsModule {}
