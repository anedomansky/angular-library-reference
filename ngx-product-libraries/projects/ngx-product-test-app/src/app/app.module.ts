import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  COUNTER_API,
  NgxProductComponentsModule,
} from '@anedomansky/ngx-product-components';
import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';

import { AppLoader } from '@anedomansky/loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProductComponentsModule,
    NgxCommonComponentsModule,
  ],
  providers: [
    {
      provide: COUNTER_API,
      useValue: AppLoader.getCounterInstance(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
