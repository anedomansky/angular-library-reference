import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  NgxCommonComponentsModule,
  NgxCommonTranslationService,
} from '@anedomansky/ngx-common-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCommonComponentsModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (translationService: NgxCommonTranslationService) => () =>
        translationService.addTranslationsByPath('assets/i18n/', ['de', 'en']),
      deps: [NgxCommonTranslationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
