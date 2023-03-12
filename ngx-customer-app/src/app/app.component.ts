import { Component, Inject } from '@angular/core';

import {
  APP_CONFIGURATION,
  AppConfigurationToken,
} from '@anedomansky/ngx-common-components';
import { TariffMaskComponent } from './tariff-mask/tariff-mask.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TariffMaskComponent, RouterOutlet],
})
export class AppComponent {
  title = 'ngx-customer-app';

  constructor(
    @Inject(APP_CONFIGURATION)
    public productConfig: AppConfigurationToken
  ) {}
}
