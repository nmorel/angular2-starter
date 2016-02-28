import {Component, View, Input} from 'angular2/core';

import {Greeter} from './services';

@Component({
  selector: 'hello',
  template: '<h1>{{ message }}</h1>',
  viewProviders: [Greeter]
})
export class Hello {
  constructor(greeter:Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}
