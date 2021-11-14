import { Test, TestingModule } from '@nestjs/testing';
import { RectanguloService } from './rectangulo.service';

describe('RectanguloService', () => {
  let service: RectanguloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RectanguloService],
    }).compile();

    service = module.get<RectanguloService>(RectanguloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
