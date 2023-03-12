import { Component, Inject } from '@angular/core';
import {
  APP_CONFIGURATION,
  AppConfigurationToken,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';
import { CounterAPI } from '@anedomansky/domain';
import {
  COUNTER_API,
  NgxProductComponentsModule,
} from '@anedomansky/ngx-product-components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgxProductComponentsModule,
    NgxCommonComponentsModule,
    RouterOutlet,
  ],
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
