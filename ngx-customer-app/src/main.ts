import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  NgxCommonTranslationService,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';
import { NgxProductComponentsModule } from '@anedomansky/ngx-product-components';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/routes/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgxCommonComponentsModule,
      NgxProductComponentsModule.forRoot({
        appTitle: 'Ngx-Customer-App',
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (translationService: NgxCommonTranslationService) => () =>
        translationService.addTranslationsByPath('assets/i18n/', ['de', 'en']),
      deps: [NgxCommonTranslationService],
      multi: true,
    },
    provideRouter(APP_ROUTES),
  ],
});
