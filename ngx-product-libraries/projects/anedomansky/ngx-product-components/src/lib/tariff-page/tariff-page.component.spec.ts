import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPageComponent } from './tariff-page.component';

describe('TariffPageComponent', () => {
  let component: TariffPageComponent;
  let fixture: ComponentFixture<TariffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TariffPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
