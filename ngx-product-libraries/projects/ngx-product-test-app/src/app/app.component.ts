import { Component, Inject } from '@angular/core';
import {
  APP_CONFIGURATION,
  AppConfigurationToken,
} from '@anedomansky/ngx-common-components';
import { CounterAPI } from '@anedomansky/domain';
import { COUNTER_API } from '@anedomansky/ngx-product-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-product-test-app';
  counter: number;

  constructor(
    @Inject(APP_CONFIGURATION) public appConfig: AppConfigurationToken,
    @Inject(COUNTER_API) private counterAPI: CounterAPI
  ) {
    this.counter = this.counterAPI.reset();
  }

  increment(): void {
    this.counter = this.counterAPI.increment(this.counter);
  }
}
