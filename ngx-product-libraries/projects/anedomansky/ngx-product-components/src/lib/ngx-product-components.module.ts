import { NgModule } from '@angular/core';
import { TariffCreateComponent } from './tariff-create/tariff-create.component';

import { NgxCommonComponentsModule } from '@anedomansky/ngx-common-components';

@NgModule({
  declarations: [TariffCreateComponent],
  imports: [NgxCommonComponentsModule],
  exports: [TariffCreateComponent],
})
export class NgxProductComponentsModule {}
