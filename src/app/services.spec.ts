/* tslint:disable:no-unused-variable */
import {
  TestComponentBuilder,
  injectAsync,
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit
} from 'angular2/testing';
/* tslint:enable:no-unused-variable */

import {Greeter} from './services';

describe('Greeter', () => {
  describe('#say', () => {
    it('greets to the given name', () => {
      const greeter = new Greeter();
      expect(greeter.say('Hello', 'Angular 2')).toEqual('Hello, Angular 2!');
    });

    it('capitalizes greeting', () => {
      const greeter = new Greeter();
      expect(greeter.say('hello', 'Angular 2')).toEqual('Hello, Angular 2!');
    });
  });
});
