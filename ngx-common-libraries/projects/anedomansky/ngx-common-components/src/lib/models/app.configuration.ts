import { InjectionToken } from '@angular/core';

export enum ProductType {
  COMPOSITE = 'composite',
  LIFE = 'life',
  GENERAL = 'general',
  HEALTH = 'health',
}

export interface AppConfiguration {
  productType: ProductType;
  appTitle: string;
}

export interface AppConfigurationToken {
  config: AppConfiguration;
}

export const defaultAppConfig: AppConfiguration = {
  appTitle: 'Ngx-Common-Test-App',
  productType: ProductType.COMPOSITE,
};

export const APP_CONFIGURATION = new InjectionToken<AppConfigurationToken>(
  'AppConfig'
);
