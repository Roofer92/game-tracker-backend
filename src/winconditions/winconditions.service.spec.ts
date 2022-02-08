import { Test, TestingModule } from '@nestjs/testing';
import { WinconditionsService } from './winconditions.service';

describe('WinconditionsService', () => {
  let service: WinconditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinconditionsService],
    }).compile();

    service = module.get<WinconditionsService>(WinconditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
