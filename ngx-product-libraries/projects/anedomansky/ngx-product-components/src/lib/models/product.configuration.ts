import {
  AppConfiguration,
  ProductType,
} from '@anedomansky/ngx-common-components';

export interface ProductConfiguration {
  appTitle: string;
}

export const defaultProductConfig: AppConfiguration = {
  appTitle: 'Ngx-Product-Test-App',
  productType: ProductType.HEALTH,
};
