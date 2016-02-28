import {Component, View, Input} from 'angular2/core';

import {Greeter} from './services';

@Component({
  selector: 'hello-app',
  template: '<h1>{{ message }}</h1>',
  viewProviders: [Greeter]
})
export class HelloApp {
  constructor(greeter:Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}