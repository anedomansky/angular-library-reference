import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-tariff-create',
  templateUrl: './tariff-create.component.html',
  styleUrls: ['./tariff-create.component.scss'],
})
export class TariffCreateComponent {
  @Input()
  legendText = 'New Tariff';

  createdTariff: string;

  constructor() {
    this.createdTariff = '';
  }

  createTariff(): void {
    this.createdTariff = 'Tariff created!';
  }
}
