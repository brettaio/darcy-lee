import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../service/src/services';
import {
  EyeIcon,
  EyeSlashIcon,
  UserPlusIcon,
} from '../../../../../../icon/src/icons';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'component-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EyeIcon,
    EyeSlashIcon,
    UserPlusIcon,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-white/30 backdrop-blur-md"
        (click)="close.emit()"
      ></div>
      <div
        class="relative overflow-visible bg-white bg-opacity-90 backdrop-blur-sm
               rounded-lg shadow-xl w-full max-w-md p-6 pt-12"
      >
        <button
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          (click)="close.emit()"
          aria-label="Close"
        >&times;</button>

        <div
          class="absolute -top-8 left-1/2 transform -translate-x-1/2 flex
                 h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
        >
          <icon-user-plus class="h-8 w-8 text-indigo-600"></icon-user-plus>
        </div>

        <h3 class="mt-2 text-center text-xl font-semibold text-gray-900">
          Sign in to your account
        </h3>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="mt-6 space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              formControlName="email"
              type="email"
              class="mt-1 block w-full rounded border border-gray-300
                     px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p
              *ngIf="email.invalid && (email.dirty || email.touched)"
              class="mt-1 text-sm text-red-600"
            >
              <span *ngIf="email.errors!['required']">Email is required.</span>
              <span *ngIf="email.errors!['email']">Enter a valid email.</span>
              <span *ngIf="email.errors!['notFound']">
                {{ email.errors!['notFound'] }}
              </span>
              <span *ngIf="email.errors!['server']">
                {{ email.errors!['server'] }}
              </span>
            </p>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <div class="relative mt-1">
              <input
                formControlName="password"
                [type]="showPassword ? 'text' : 'password'"
                class="block w-full rounded border border-gray-300
                       px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                (click)="togglePassword()"
                class="absolute inset-y-0 right-3 flex items-center text-indigo-500 hover:text-indigo-600"
                [attr.aria-label]="
                  showPassword ? 'Hide password' : 'Show password'
                "
              >
                <icon-eye
                  *ngIf="!showPassword"
                  class="h-5 w-5"
                ></icon-eye>
                <icon-eye-slash
                  *ngIf="showPassword"
                  class="h-5 w-5"
                ></icon-eye-slash>
              </button>
            </div>
            <p
              *ngIf="password.invalid && (password.dirty || password.touched)"
              class="mt-1 text-sm text-red-600"
            >
              <span *ngIf="password.errors!['required']">
                Password is required.
              </span>
              <span *ngIf="password.errors!['invalid']">
                {{ password.errors!['invalid'] }}
              </span>
              <span *ngIf="password.errors!['server']">
                {{ password.errors!['server'] }}
              </span>
            </p>
          </div>

          <!-- Generic error -->
          <p *ngIf="error" class="text-center text-sm text-red-600">
            {{ error }}
          </p>

          <button
            type="submit"
            [disabled]="form.invalid"
            class="w-full inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2
                   text-white font-semibold hover:bg-indigo-700 focus:outline-none
                   focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            Sign in
          </button>

          <p class="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?
            <a
              routerLink="/signup"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>`,
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  form: FormGroup;
  showPassword = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
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
        this.router.navigate(['/player']);
        this.close.emit();
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