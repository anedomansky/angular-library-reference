import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProductComponentsComponent } from './ngx-product-components.component';

describe('NgxProductComponentsComponent', () => {
  let component: NgxProductComponentsComponent;
  let fixture: ComponentFixture<NgxProductComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProductComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxProductComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
