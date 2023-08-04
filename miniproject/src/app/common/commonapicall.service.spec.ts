import { TestBed } from '@angular/core/testing';

import { CommonapicallService } from './commonapicall.service';

describe('CommonapicallService', () => {
  let service: CommonapicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonapicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
