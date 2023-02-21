import { TestBed } from '@angular/core/testing';

import { NgxCommonComponentsService } from './ngx-common-components.service';

describe('NgxCommonComponentsService', () => {
  let service: NgxCommonComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCommonComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
