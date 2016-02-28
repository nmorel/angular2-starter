import 'reflect-metadata';
import 'babel-polyfill';
require('./styles/main.scss');

import {provide} from 'angular2/core';
import {enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {HelloApp} from './app/hello';

enableProdMode();
bootstrap(HelloApp, []);