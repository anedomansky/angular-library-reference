import { TestBed } from '@angular/core/testing';

import { NgxProductComponentsService } from './ngx-product-components.service';

describe('NgxProductComponentsService', () => {
  let service: NgxProductComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProductComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
