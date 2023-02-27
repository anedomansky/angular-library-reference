import { Component, Inject } from '@angular/core';
import {
  AppConfigurationToken,
  APP_CONFIGURATION,
} from '@anedomansky/ngx-common-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-common-test-app';

  counter: number;

  constructor(
    @Inject(APP_CONFIGURATION) public appConfig: AppConfigurationToken
  ) {
    this.counter = 0;
  }

  increment(): void {
    this.counter += 1;
  }
}
