import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { NgxCommonTranslationDirective } from './ngx-common-translation.directive';
import { NgxCommonTranslationService } from './ngx-common-translation.service';

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
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (translationService: NgxCommonTranslationService) => () =>
        translationService.addTranslationsByPath('assets/common-i18n/', [
          'de',
          'en',
        ]),
      deps: [NgxCommonTranslationService],
    },
  ],
  exports: [NgxCommonTranslationDirective, TranslocoModule],
  declarations: [NgxCommonTranslationDirective],
})
export class TranslationRootModule {}
