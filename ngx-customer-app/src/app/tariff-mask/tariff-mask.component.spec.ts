import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffMaskComponent } from './tariff-mask.component';

describe('TariffMaskComponent', () => {
  let component: TariffMaskComponent;
  let fixture: ComponentFixture<TariffMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
