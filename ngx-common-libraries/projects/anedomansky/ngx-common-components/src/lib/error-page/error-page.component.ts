import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorSlice } from '../state/reducers';
import { selectErrorCode, selectErrorDescription } from '../state/selectors';

@Component({
  selector: 'common-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ErrorPageComponent {
  private store = inject<Store<ErrorSlice>>(Store);

  errorCode$ = this.store.select(selectErrorCode);

  errorDescription$ = this.store.select(selectErrorDescription);
}
