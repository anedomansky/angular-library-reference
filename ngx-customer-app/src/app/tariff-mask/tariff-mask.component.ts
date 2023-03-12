import { Component } from '@angular/core';
import {
  ComponentConfiguration,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';
import { NgxProductComponentsModule } from '@anedomansky/ngx-product-components';

@Component({
  selector: 'app-tariff-mask',
  templateUrl: './tariff-mask.component.html',
  styleUrls: ['./tariff-mask.component.scss'],
  standalone: true,
  imports: [NgxCommonComponentsModule, NgxProductComponentsModule],
})
export class TariffMaskComponent {
  createBtnConfig: ComponentConfiguration = {
    disabled: false,
  };

  tariffPriceConfig: ComponentConfiguration = {
    disabled: true,
  };
}
