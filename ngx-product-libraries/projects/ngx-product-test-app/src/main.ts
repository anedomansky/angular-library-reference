import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppLoader } from '@anedomansky/loader';
import {
  COUNTER_API,
  NgxProductComponentsModule,
} from '@anedomansky/ngx-product-components';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/routes/app.routes';
import { importProvidersFrom } from '@angular/core';
import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgxCommonComponentsModule, NgxProductComponentsModule),
    {
      provide: COUNTER_API,
      useValue: AppLoader.getCounterInstance(),
    },
    provideRouter(APP_ROUTES),
  ],
});
