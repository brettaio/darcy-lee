import { Component } from '@angular/core';
import { TestComponent } from '../../../../component/src/lib/test/test.component';

@Component({
  selector: 'page-test',
  imports: [TestComponent],
  template: `
    <section>
      <component-test />
    </section>
  `,
  styles: ``,
})
export class TestPage {}
