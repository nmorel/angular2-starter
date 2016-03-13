import {Component, View, Input} from 'angular2/core';

import {Greeter} from './services';
import {Type} from 'angular2/core';

@Component({
  selector: 'hello',
  template: '<h1>{{ message }}</h1>',
  viewProviders: [Greeter]
})
export class Hello extends Type {
  message: string;

  constructor(greeter: Greeter) {
    super();
    this.message = greeter.say('hello', 'Angular 2');
  }
}
