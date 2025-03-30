import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'component-customer-onboarding-brettaio',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 text-center">
        Onboard as a New Customer
      </h2>
      <form (ngSubmit)="createCustomer()" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-900">
            Email
          </label>
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-indigo-600"
              placeholder="you@example.com"
              [(ngModel)]="email"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>

      <div *ngIf="customerId" class="mt-4 p-4 border border-green-500 rounded">
        <p>
          Customer created successfully! Customer ID:
          <strong>{{ customerId }}</strong>
          <span *ngIf="existingCustomer">(Existing Customer)</span>
        </p>
        <p>
          We will be in contact soon. Thank you for testing my stripe serverless
          function integration.
        </p>
      </div>

      <div
        *ngIf="errorMessage"
        class="mt-4 p-4 border border-red-500 rounded text-red-500"
      >
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  `,
})
export class CustomerOnboardingBrettaioComponent {
  email: string = '';
  customerId: string | null = null;
  existingCustomer: boolean = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  createCustomer() {
    // Clear previous messages
    this.customerId = null;
    this.errorMessage = null;
    this.existingCustomer = false;

    const payload = { email: this.email };

    this.http.post('/.netlify/functions/createCustomer', payload).subscribe({
      next: (res: any) => {
        console.log('API response:', res);
        this.customerId = res.customerId;
        this.existingCustomer = res.existing;
        // Force change detection
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error creating customer:', err);
        this.errorMessage =
          err.error?.error || 'An error occurred while creating the customer.';
        this.cd.detectChanges();
      },
    });
  }
}
