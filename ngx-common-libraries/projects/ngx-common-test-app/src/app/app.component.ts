import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-common-test-app';

  counter: number;

  constructor() {
    this.counter = 0;
  }

  increment(): void {
    this.counter += 1;
  }
}
