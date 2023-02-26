import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TariffCreateComponent } from './tariff-create/tariff-create.component';

import {
  NgxCommonComponentsModule,
  NgxCommonTranslationService,
} from '@anedomansky/ngx-common-components';

@NgModule({
  declarations: [TariffCreateComponent],
  imports: [NgxCommonComponentsModule],
  exports: [TariffCreateComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (translationService: NgxCommonTranslationService) => () =>
        translationService.addTranslationsByPath('assets/product-i18n/', [
          'de',
          'en',
        ]),
      deps: [NgxCommonTranslationService],
      multi: true,
    },
  ],
})
export class NgxProductComponentsModule {}
