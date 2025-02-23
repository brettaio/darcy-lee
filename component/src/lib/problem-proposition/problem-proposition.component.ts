import { Component } from '@angular/core';

@Component({
  selector: 'component-problem-proposition',
  imports: [],
  template: `
    <section class="bg-gray-white">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <!-- Heading -->
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
        </div>

        <!-- Three columns of paragraphs -->
        <div
          class="mx-auto mt-8 max-w-4xl grid grid-cols-1 gap-6 text-left md:grid-cols-3"
        >
          <!-- Column 1 -->
          <p class="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
          <!-- Column 2 -->
          <p class="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
          <!-- Column 3 -->
          <p class="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProblemPropositionComponent {}
