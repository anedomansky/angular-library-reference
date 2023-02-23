import { TestBed } from '@angular/core/testing';

import { NgxCommonTranslationService } from './ngx-common-translation.service';

describe('NgxCommonTranslationService', () => {
  let service: NgxCommonTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCommonTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
