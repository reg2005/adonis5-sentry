
# Adonis5-Sentry
> Sentry, Sentry SDK for Node JS , AdonisJS, Sentry for Adonis

[![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url]

Sentry service provider for Adonis-5 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Installation](#installation)
- [Sample Usage](#sample-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation
```bash
npm i --save adonis5-sentry
```
Compile your code:
```bash
node ace serve --watch
```
Connect all dependences:
```bash
node ace invoke adonis5-swagger
```
* For other configuration, please update the `config/sentry.ts`.

# Sample Usage
After loading all providers Sentry service will be initialized. After this you can import Sentry service anywhere in your application in such way:
```js
 import Sentry from '@ioc:Adonis/Addons/Sentry'
```
* Then you have to send your error details to Sentry. You can use Adonis Exception Handler for this purposes. For example you can implement such Exception Handler:
  ```js
  import Sentry from '@ioc:Adonis/Addons/Sentry'  
  import Logger from '@ioc:Adonis/Core/Logger'
  import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
  
  export default class ExceptionHandler extends HttpExceptionHandler {
    constructor () {
      super(Logger)
    }
  
    public async handle (error, ctx) {
      Sentry.captureException(error)
      return super.handle(error, ctx)
    }
  }
  ```

For additional details of Sentry API, please check the Sentry SDK documentation by this link [Sentry docs](https://docs.sentry.io/platforms/node/?platform=node)

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/adonis5-sentry.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/adonis5-sentry "npm"

[license-image]: https://img.shields.io/npm/l/adonis5-sentry?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
