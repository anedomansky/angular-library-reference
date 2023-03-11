# angular-library-reference

Showcase for multiple dependent Angular library that offer extensibility and customization.

## packages

### domain

"dist" - `npm link`
"dist" - `npm unlink -g`

#### TODO

#### Dependencies

- "@tsconfig/node18": "^1.0.1", (devDependencies)
- "typescript": "^4.9.5" (devDependencies)

### adapter

"dist" - `npm link`
"dist" - `npm unlink -g`

#### TODO

#### Dependencies

- "@tsconfig/node18": "^1.0.1", (devDependencies)
- "typescript": "^4.9.5" (devDependencies)
- `npm link @anedomansky/domain`
- `npm unlink @anedomansky/domain`

### loader

"dist" - `npm link`
"dist" - `npm unlink -g`

#### TODO

#### Dependencies

- "@tsconfig/node18": "^1.0.1", (devDependencies)
- "typescript": "^4.9.5" (devDependencies)
- `npm link @anedomansky/domain @anedomansky/adapters`
- `npm unlink @anedomansky/domain @anedomansky/adapters`

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

- create example ngrx logic

## ngx-product-libraries

"dist/anedomansky/ngx-product-components" - `npm link`
"dist/anedomansky/ngx-product-components" - `npm unlink -g`

### Components

TariffCreate

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`
- `npm unlink @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`

### TODO

- create standalone product pages
- build routes with standalone components from common- and product-library in test app

## ngx-customer-test-app

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`
- `npm unlink @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`

### TODO

- Overwrite/extend InjectionToken for loader/adapter
- wrap existing standalone page components in customer standalone page components
- create example routing with https://angular.io/guide/standalone-components#lazy-loading-many-routes-at-once
