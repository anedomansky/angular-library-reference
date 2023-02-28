import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxProductComponentsModule } from '@anedomansky/ngx-product-components';
import { TariffMaskComponent } from './tariff-mask/tariff-mask.component';
import {
  NgxCommonTranslationService,
  NgxCommonComponentsModule,
} from '@anedomansky/ngx-common-components';

@NgModule({
  declarations: [AppComponent, TariffMaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProductComponentsModule.forRoot({
      appTitle: 'Ngx-Customer-App',
    }),
    NgxCommonComponentsModule,
  ],
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
