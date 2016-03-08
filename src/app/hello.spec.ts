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

import {Hello} from './hello';
import {Greeter} from './services';

describe('Hello', () => {
  it('renders greeting', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(Hello)
      .then((fixture) => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('Hello, Angular 2!');
      });
  }));
});
