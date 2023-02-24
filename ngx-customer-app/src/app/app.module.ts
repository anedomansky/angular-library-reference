import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxProductComponentsModule } from '@anedomansky/ngx-product-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxProductComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
