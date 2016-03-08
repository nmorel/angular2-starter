import 'es6-shim';
import 'angular2/bundles/angular2-polyfills';

import { enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import {Hello} from './app/hello';

// Import main SASS file
import './styles/main.scss';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}
bootstrap(Hello, []);
