# angular-library-reference

Showcase for multiple dependent Angular library that offer extensibility and customization.

## packages

### domain

#### TODO

- compile and link to apps

### adapter

#### TODO

- compile and link to apps

### loader

#### TODO

- compile and link to apps

## ngx-common-libraries

"dist/anedomansky/ngx-common-components" - `npm link`
"dist/anedomansky/ngx-common-components" - `npm unlink -g`

### Components

Button
Fieldset

### Dependencies

- "@ngneat/transloco": "^4.2.2", (peerDependencies)
- "@ngneat/transloco-locale": "^4.0.0", (peerDependencies)

### TODO

## ngx-product-libraries

"dist/anedomansky/ngx-product-components" - `npm link`
"dist/anedomansky/ngx-product-components" - `npm unlink -g`

### Components

TariffCreate

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-common-components`
- `npm unlink @anedomansky/ngx-common-components`

### TODO

- Add InjectionToken for loader/adapter and add test case

## ngx-customer-test-app

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-product-components @anedomansky/ngx-common-components`
- `npm unlink @anedomansky/ngx-product-components @anedomansky/ngx-common-components`

### TODO

- Build example component
- Translation with "@ngneat/transloco" and "@ngneat/transloco-locale" and overwrite/add translations
- Overwrite/extend InjectionToken for loader/adapter
