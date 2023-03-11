import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/routes/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgxCommonComponentsModule.forRoot()),
    provideHttpClient(),
    provideRouter(APP_ROUTES),
  ],
});
