import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent {
  @Input()
  legendText?: string;
}
