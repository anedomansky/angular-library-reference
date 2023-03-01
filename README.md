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

## ngx-product-libraries

"dist/anedomansky/ngx-product-components" - `npm link`
"dist/anedomansky/ngx-product-components" - `npm unlink -g`

### Components

TariffCreate

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`
- `npm unlink @anedomansky/ngx-common-components anedomansky/domain @anedomansky/adapters @anedomansky/loader`

### TODO

## ngx-customer-test-app

### Dependencies

- "@ngneat/transloco": "^4.2.2",
- "@ngneat/transloco-locale": "^4.0.0",
- `npm link @anedomansky/ngx-common-components @anedomansky/domain @anedomansky/adapters @anedomansky/loader`
- `npm unlink @anedomansky/ngx-common-components anedomansky/domain @anedomansky/adapters @anedomansky/loader`

### TODO

- Overwrite/extend InjectionToken for loader/adapter
