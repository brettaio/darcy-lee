import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { CtaButtonAltComponent } from '../cta-button-alt/cta-button-alt.component';

@Component({
  selector: 'component-form',
  imports: [CtaButtonComponent, CtaButtonAltComponent],
  template: `
    <section class="bg-slate-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
                <div class="flex sm:gap-4">
                  <component-cta-button
                    customClasses=" text-lg text-slate-100 font-semibold"
                  />
                </div>
                <div class="xs:hidden sm:gap-4">
                  <component-cta-button-alt
                    customClasses="text-lg font-bold text-slate-600"
                  />
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
            <form
              [attr.data-netlify]="'true'"
              [attr.netlify-honeypot]="'bot-field'"
              name="contact"
              method="POST"
              action="/thank-you"
              target="_self"
              class="space-y-4"
            >
              >
              <!-- Hidden input for Netlify -->
              <input type="hidden" name="form-name" value="contact" />

              <!-- Optional honeypot field -->
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              <div>
                <label class="sr-only" for="name">Name</label>
                <input
                  name="name"
                  class="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-slate-900 focus:ring-0 focus:outline-none"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    name="email"
                    class="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-slate-900 focus:ring-0 focus:outline-none"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    name="phone"
                    class="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-slate-900 focus:ring-0 focus:outline-none"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                  name="message"
                  class="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-slate-900 focus:ring-0 focus:outline-none"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="block rounded-[999px] ring-2 text-lg text-slate-100 font-semibold ring-white bg-gray-600 px-5 py-2.5 mx-auto hover:shadow-lg hover:shadow-gray-600 hover:inset-shadow-2xl transition hover:bg-white hover:text-gray-600 hover:ring-2 hover:ring-gray-600"
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
