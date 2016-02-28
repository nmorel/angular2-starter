import 'reflect-metadata';
import 'babel-polyfill';

import {provide} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Hello} from './app/hello';

// Import main SASS file
import './styles/main.scss';

enableProdMode();
bootstrap(Hello, []);
