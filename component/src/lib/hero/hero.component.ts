import { Component } from '@angular/core';
import { CtaButtonAltComponent } from '../cta-button-alt/cta-button-alt.component';

@Component({
  selector: 'component-hero',
  imports: [CtaButtonAltComponent],
  template: `
    <section
      class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center sm:h-[50vh] lg:h-full"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p class="text-gray-500 mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div class="mt-12 inline-block">
            <component-cta-button-alt />
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  `,
  styles: ``,
})
export class HeroComponent {}
