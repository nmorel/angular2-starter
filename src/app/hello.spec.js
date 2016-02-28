import { TestComponentBuilder } from 'angular2/testing';
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
