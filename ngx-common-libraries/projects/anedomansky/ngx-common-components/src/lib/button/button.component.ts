import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  type: ButtonType = 'button';

  @Output()
  onclick = new EventEmitter<MouseEvent>();
}
