import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommonComponentsComponent } from './ngx-common-components.component';

describe('NgxCommonComponentsComponent', () => {
  let component: NgxCommonComponentsComponent;
  let fixture: ComponentFixture<NgxCommonComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCommonComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCommonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
