import { Component, Input } from '@angular/core';
import { ComponentConfiguration } from '@anedomansky/ngx-common-components';
import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';

@Component({
  selector: 'product-tariff-create',
  templateUrl: './tariff-create.component.html',
  styleUrls: ['./tariff-create.component.scss'],
  standalone: true,
  imports: [NgxCommonComponentsModule],
})
export class TariffCreateComponent {
  @Input()
  createTariffButtonConfig: ComponentConfiguration = {
    disabled: true,
  };

  @Input()
  tariffNameInputConfig?: ComponentConfiguration = {
    disabled: false,
  };

  @Input()
  legendText?: string;

  createdTariff: string;

  constructor() {
    this.createdTariff = '';
  }

  createTariff(): void {
    this.createdTariff = 'Tariff created!';
  }
}
