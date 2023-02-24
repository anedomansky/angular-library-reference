import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCommonComponentsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
