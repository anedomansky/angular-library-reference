import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { TranslationRootModule } from './i18n/translation-root.module';

@NgModule({
  declarations: [ButtonComponent, FieldsetComponent],
  imports: [HttpClientModule, TranslationRootModule],
  exports: [ButtonComponent, FieldsetComponent, TranslationRootModule],
})
export class NgxCommonComponentsModule {}
