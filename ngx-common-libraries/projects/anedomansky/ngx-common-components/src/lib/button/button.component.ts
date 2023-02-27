import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  AppConfigurationToken,
  APP_CONFIGURATION,
} from '../models/app.configuration';
import { ComponentConfiguration } from '../models/component.configuration';

export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  config?: ComponentConfiguration = {
    disabled: false,
  };

  @Input()
  type: ButtonType = 'button';

  @Output()
  onclick = new EventEmitter<MouseEvent>();

  constructor(
    @Inject(APP_CONFIGURATION) public appConfig: AppConfigurationToken
  ) {}
}
