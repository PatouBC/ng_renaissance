import { TestBed } from '@angular/core/testing';

import { IndicationService } from './indication.service';

describe('IndicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicationService = TestBed.get(IndicationService);
    expect(service).toBeTruthy();
  });
});
