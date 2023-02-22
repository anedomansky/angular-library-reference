import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TranslocoService,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { TranslationHttpLoader } from './translation-http-loader';
import { translationPreLoad } from './translation-pre-load';

@NgModule({
  imports: [
    TranslocoLocaleModule.forRoot({
      langToLocaleMapping: {
        en: 'en-US',
        de: 'de-DE',
      },
    }),
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        prodMode: !isDevMode(),
        availableLangs: [
          { id: 'en', label: 'English' },
          { id: 'de', label: 'German' },
        ],
        reRenderOnLangChange: true,
        fallbackLang: 'en',
        defaultLang: 'en',
        flatten: {
          aot: !isDevMode(),
        },
      }),
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslationHttpLoader,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: translationPreLoad,
      deps: [TranslocoService],
    },
  ],
  exports: [TranslocoModule],
})
export class TranslationRootModule {}
