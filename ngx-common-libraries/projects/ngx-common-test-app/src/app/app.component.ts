import { Component, inject, Inject } from '@angular/core';
import {
  AppConfigurationToken,
  APP_CONFIGURATION,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserSlice } from './state/reducers';
import { selectUserName } from './state/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgxCommonComponentsModule, RouterOutlet, AsyncPipe],
})
export class AppComponent {
  title = 'ngx-common-test-app';

  counter: number;

  private store = inject<Store<UserSlice>>(Store);

  username$ = this.store.select(selectUserName);

  constructor(
    @Inject(APP_CONFIGURATION) public appConfig: AppConfigurationToken
  ) {
    this.counter = 0;
  }

  increment(): void {
    this.counter += 1;
  }
}
