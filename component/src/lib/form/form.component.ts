import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { CtaButtonAltComponent } from '../cta-button-alt/cta-button-alt.component';

@Component({
  selector: 'component-form',
  imports: [CtaButtonComponent, CtaButtonAltComponent],
  template: `
    <section class="bg-slate-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <div
              class="max-w-xl text-2xl text-center text-gray-800"
              [innerHTML]="appDataStore.homeData().formHeading"
            ></div>
            <div
              class="max-w-xl text-lg text-justify text-gray-800 mt-6"
              [innerHTML]="appDataStore.homeData().formParagraph"
            ></div>

            <div class="mt-8">
              <div class="flex items-center justify-evenly gap-8">
                <div class="sm:flex sm:gap-4">
                  <component-cta-button />
                </div>
                <div class="sm:flex sm:gap-4">
                  <component-cta-button-alt />
                </div>
              </div>

              <div class="mt-6 text-gray-800 text-center">
                <address
                  [innerHTML]="appDataStore.brandData().postalAddress"
                ></address>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    for="Option1"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm">Option 1</span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option2"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm">Option 2</span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option3"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm">Option 3</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>

                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class FormComponent {
  appDataStore = appDataStore;
}
