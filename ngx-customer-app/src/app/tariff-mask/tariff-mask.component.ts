import { Component } from '@angular/core';
import { ComponentConfiguration } from '@anedomansky/ngx-common-components';

@Component({
  selector: 'app-tariff-mask',
  templateUrl: './tariff-mask.component.html',
  styleUrls: ['./tariff-mask.component.scss'],
})
export class TariffMaskComponent {
  createBtnConfig: ComponentConfiguration = {
    disabled: false,
  };

  tariffPriceConfig: ComponentConfiguration = {
    disabled: true,
  };
}
