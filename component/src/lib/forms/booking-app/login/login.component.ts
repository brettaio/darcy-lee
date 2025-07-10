import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BookingAppAuthService } from '../../../../../../service/src/lib/booking-app/auth.service';
import { EyeIcon, EyeSlashIcon } from '../../../../../../icon/src/icons';

@Component({
  selector: 'component-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EyeIcon, EyeSlashIcon],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full space-y-8 p-6 bg-white rounded shadow">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          Sign in
        </h2>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="mt-6 space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium">Email</label>
            <input
              formControlName="email"
              type="email"
              class="mt-1 block w-full rounded border px-3 py-2"
            />
            <p *ngIf="email.invalid && (email.dirty || email.touched)"
               class="mt-1 text-sm text-red-600">
              <span *ngIf="email.errors!['required']">Email is required.</span>
              <span *ngIf="email.errors!['email']">Enter a valid email.</span>
              <span *ngIf="email.errors!['server']">{{ email.errors!['server'] }}</span>
            </p>
          </div>

          <!-- Password with toggle -->
          <div>
            <label class="block text-sm font-medium">Password</label>
            <div class="relative mt-1">
              <input
                formControlName="password"
                [type]="showPassword ? 'text' : 'password'"
                class="block w-full rounded border px-3 py-2 pr-10"
              />
              <button
                type="button"
                (click)="togglePassword()"
                class="absolute inset-y-0 right-3 flex items-center text-indigo-500 hover:text-indigo-600"
                [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
              >
                <icon-eye *ngIf="!showPassword" class="h-5 w-5"></icon-eye>
                <icon-eye-slash *ngIf="showPassword" class="h-5 w-5"></icon-eye-slash>
              </button>
            </div>
            <p *ngIf="password.invalid && (password.dirty || password.touched)"
               class="mt-1 text-sm text-red-600">
              <span *ngIf="password.errors!['required']">Password is required.</span>
              <span *ngIf="password.errors!['server']">{{ password.errors!['server'] }}</span>
            </p>
          </div>

          <!-- Generic error -->
          <p *ngIf="error" class="text-center text-sm text-red-600">
            {{ error }}
          </p>

          <button
            type="submit"
            [disabled]="form.invalid"
            class="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  `,
})
export class BookingAppLoginComponent {
  form: FormGroup;
  error: string | null = null;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private auth: BookingAppAuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.error = null;
    const { email, password } = this.form.value;

    this.auth.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/calendar']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422 && err.error?.errors) {
          const errs = err.error.errors as Record<string, string[]>;
          if (errs['email']) {
            this.email.setErrors({ server: errs['email'][0] });
          }
          if (errs['password']) {
            this.password.setErrors({ server: errs['password'][0] });
          }
        } else {
          this.error = err.error?.message || 'Login failed. Please try again.';
        }
      },
    });
  }
}
