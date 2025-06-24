import { TestBed } from '@angular/core/testing';

import { SponusUserService } from './sponus-user.service';

describe('SponusUserService', () => {
  let service: SponusUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponusUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
