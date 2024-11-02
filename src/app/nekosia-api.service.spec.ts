import { TestBed } from '@angular/core/testing';

import { NekosiaApiService } from './nekosia-api.service';

describe('NekosiaApiService', () => {
  let service: NekosiaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NekosiaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
