import { TestBed, inject } from '@angular/core/testing';

import { IceFireService } from './ice-fire.service';

describe('IceFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IceFireService]
    });
  });

  it('should be created', inject([IceFireService], (service: IceFireService) => {
    expect(service).toBeTruthy();
  }));
});
