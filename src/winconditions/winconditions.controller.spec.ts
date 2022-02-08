import { Test, TestingModule } from '@nestjs/testing';
import { WinconditionsController } from './winconditions.controller';
import { WinconditionsService } from './winconditions.service';

describe('WinconditionsController', () => {
  let controller: WinconditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinconditionsController],
      providers: [WinconditionsService],
    }).compile();

    controller = module.get<WinconditionsController>(WinconditionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
