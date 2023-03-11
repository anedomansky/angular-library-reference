import { Component, Inject } from '@angular/core';
import {
  AppConfigurationToken,
  APP_CONFIGURATION,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgxCommonComponentsModule, RouterOutlet],
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
