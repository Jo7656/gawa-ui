import { TestBed } from '@angular/core/testing';

import { HttpErrorServiceService } from './http-error-service.service';

describe('HttpErrorServiceService', () => {
  let service: HttpErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
