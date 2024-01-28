compilers.com.au
================
[![License](https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![GitHub Pages](https://github.com/codegen-driven-dev/www/workflows/GitHub%20Pages/badge.svg)

Bunch of guides for Compiler Driven Development (CDD).

## Deploy distribution

First [`npm i -g angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), then:

    ng build --configuration production
    cp README.md dist/compilers-www
    ngh --cname='compilers.com.au' --dir='dist/compilers-www' --repo='https://github.com/codegen-driven-dev/codegen-driven-dev.github.io' --branch='master' --message="$(git log -1 --pretty='%B')"

## Install

Assumes you have latest Node.JS and npm on *nix machine, then just run:

    npm i -g @angular/cli typescript
    npm i

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## License

Licensed under any of:

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or <https://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <https://opensource.org/licenses/MIT>)
- CC0 license ([LICENSE-CC0](LICENSE-CC0) or <https://creativecommons.org/publicdomain/zero/1.0/legalcode>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
licensed as above, without any additional terms or conditions.
