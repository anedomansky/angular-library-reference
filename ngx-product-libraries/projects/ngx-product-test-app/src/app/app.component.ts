import { Component, Inject } from '@angular/core';
import {
  APP_CONFIGURATION,
  AppConfigurationToken,
} from '@anedomansky/ngx-common-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-product-test-app';

  constructor(
    @Inject(APP_CONFIGURATION) public appConfig: AppConfigurationToken
  ) {}
}
