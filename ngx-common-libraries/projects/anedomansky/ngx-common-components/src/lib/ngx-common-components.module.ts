import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { TranslationRootModule } from './i18n/translation-root.module';
import {
  AppConfiguration,
  APP_CONFIGURATION,
  defaultAppConfig,
} from './models/app.configuration';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [ButtonComponent, FieldsetComponent],
  imports: [HttpClientModule, TranslationRootModule, ErrorPageComponent],
  exports: [
    ButtonComponent,
    FieldsetComponent,
    TranslationRootModule,
    ErrorPageComponent,
  ],
})
export class NgxCommonComponentsModule {
  static forRoot(
    override: Partial<AppConfiguration> = {}
  ): ModuleWithProviders<NgxCommonComponentsModule> {
    return {
      ngModule: NgxCommonComponentsModule,
      providers: [
        {
          provide: APP_CONFIGURATION,
          useValue: {
            ...defaultAppConfig,
            ...override,
          },
        },
      ],
    };
  }
}
