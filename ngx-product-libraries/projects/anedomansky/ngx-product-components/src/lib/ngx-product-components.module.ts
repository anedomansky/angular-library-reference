import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { TariffCreateComponent } from './tariff-create/tariff-create.component';

import {
  APP_CONFIGURATION,
  NgxCommonComponentsModule,
  NgxCommonTranslationService,
} from '@anedomansky/ngx-common-components';
import {
  defaultProductConfig,
  ProductConfiguration,
} from './models/product.configuration';
import { TariffPageComponent } from './tariff-page/tariff-page.component';

@NgModule({
  imports: [
    NgxCommonComponentsModule.forRoot(),
    TariffCreateComponent,
    TariffPageComponent,
  ],
  exports: [TariffCreateComponent, TariffPageComponent],
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
    {
      provide: APP_CONFIGURATION,
      useValue: defaultProductConfig,
    },
  ],
})
export class NgxProductComponentsModule {
  static forRoot(
    override: Partial<ProductConfiguration> = {}
  ): ModuleWithProviders<NgxProductComponentsModule> {
    return {
      ngModule: NgxProductComponentsModule,
      providers: [
        {
          provide: APP_CONFIGURATION,
          useValue: {
            ...defaultProductConfig,
            ...override,
          },
        },
      ],
    };
  }
}
