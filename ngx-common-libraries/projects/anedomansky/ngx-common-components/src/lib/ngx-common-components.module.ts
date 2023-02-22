import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FieldsetComponent } from './fieldset/fieldset.component';

@NgModule({
  declarations: [ButtonComponent, FieldsetComponent],
  imports: [HttpClientModule],
  exports: [ButtonComponent, FieldsetComponent],
})
export class NgxCommonComponentsModule {}
