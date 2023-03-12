import { Component } from '@angular/core';
import { TariffCreateComponent } from '../tariff-create/tariff-create.component';

@Component({
  selector: 'product-tariff-page',
  standalone: true,
  templateUrl: './tariff-page.component.html',
  styleUrls: ['./tariff-page.component.scss'],
  imports: [TariffCreateComponent],
})
export class TariffPageComponent {}
