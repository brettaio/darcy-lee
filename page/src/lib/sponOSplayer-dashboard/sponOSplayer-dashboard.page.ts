import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../service/src/services';
import { Player } from '../../../../model/src/model';

@Component({
  selector: 'page-sponOS-player-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="h-full bg-gray-50">
      <!-- Mobile off-canvas menu -->
      <div *ngIf="mobileMenuOpen" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>
        <div class="fixed inset-0 flex">
          <div class="relative mr-16 flex w-full max-w-xs flex-1">
            <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
              <button (click)="toggleMobileMenu()" type="button" class="-m-2.5 p-2.5 text-white">
                <span class="sr-only">Close sidebar</span>
                ✕
              </button>
            </div>
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
              <div class="flex h-16 shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="SponOS" />
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li><a href="#" class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-indigo-600">Dashboard</a></li>
                  <!-- add other links here -->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="SponOS" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li><a href="#" class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-indigo-600">Dashboard</a></li>
              <!-- add other links here -->
            </ul>
          </nav>
        </div>
      </div>

      <!-- Mobile top bar -->
      <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
        <button (click)="toggleMobileMenu()" type="button" class="-m-2.5 p-2.5 text-gray-700">
          <span class="sr-only">Open sidebar</span>
          ☰
        </button>
        <div class="flex-1 text-sm font-semibold text-gray-900">Dashboard</div>
        <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Your profile" />
      </div>

      <!-- Main content -->
      <main class="py-10 lg:pl-72">
        <div class="px-4 sm:px-6 lg:px-8">
          <div *ngIf="player">
            <!-- Header and action buttons -->
            <div class="flex items-center justify-between mb-6">
              <h1 class="text-2xl font-semibold text-gray-900">
                Welcome, {{ player.preferred_name || player.first_name }}!
              </h1>
              <div>
                <button *ngIf="!editMode" (click)="toggleEdit()" class="px-4 py-2 bg-indigo-600 text-white rounded-md">Edit Profile</button>
                <button *ngIf="editMode" (click)="onSave()" [disabled]="saving" class="px-4 py-2 bg-green-600 text-white rounded-md">
                  {{ saving ? 'Saving…' : 'Save Changes' }}
                </button>
                <button *ngIf="editMode" (click)="toggleEdit()" class="ml-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
              </div>
            </div>

            <!-- Edit Mode Form -->
            <form *ngIf="editMode" [formGroup]="editForm" class="space-y-6">
              <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                <!-- ID (read-only) -->
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">ID</label>
                  <input formControlName="id" class="mt-1 block w-full rounded border-gray-300 bg-gray-100" />
                </div>

                <!-- Basic info -->
                <div>
                  <label class="block text-sm font-medium text-gray-700">Title</label>
                  <input formControlName="title" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">First Name</label>
                  <input formControlName="first_name" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input formControlName="middle_name" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Last Name</label>
                  <input formControlName="last_name" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Suffix</label>
                  <input formControlName="suffix" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Preferred Name</label>
                  <input formControlName="preferred_name" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Contact -->
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Email</label>
                  <input formControlName="email" type="email" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Personal -->
                <div>
                  <label class="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input formControlName="date_of_birth" type="date" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Sport</label>
                  <input formControlName="sport" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Sponsorship -->
                <div>
                  <label class="block text-sm font-medium text-gray-700">Sponsorship Goal</label>
                  <input formControlName="sponsorship_goal" type="number" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Currency (ISO 3-letter)</label>
                  <input formControlName="sponsorship_currency" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Club Details -->
                <div>
                  <label class="block text-sm font-medium text-gray-700">Position</label>
                  <input formControlName="position" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Club</label>
                  <input formControlName="club" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Division</label>
                  <input formControlName="division" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">League</label>
                  <input formControlName="league" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Addresses -->
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Primary Address ID</label>
                  <input formControlName="primary_address_id" class="mt-1 block w-full rounded border-gray-300" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Billing Address ID</label>
                  <input formControlName="billing_address_id" class="mt-1 block w-full rounded border-gray-300" />
                </div>

                <!-- Player Accolades -->
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Player Accolades</label>
                  <div formArrayName="player_accolades" class="space-y-2 mt-1">
                    <div *ngFor="let acc of playerAccolades.controls; let i=index" [formGroupName]="i" class="grid grid-cols-3 gap-2">
                      <input formControlName="team" placeholder="Team" class="rounded border-gray-300" />
                      <input formControlName="year" type="number" placeholder="Year" class="rounded border-gray-300" />
                      <input formControlName="award" placeholder="Award" class="rounded border-gray-300" />
                    </div>
                  </div>
                </div>

                <!-- Sponsorship Perks -->
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Sponsorship Perks</label>
                  <div formArrayName="sponsorship_perks" class="space-y-2 mt-1">
                    <div *ngFor="let perk of sponsorshipPerks.controls; let j=index" [formGroupName]="j" class="grid grid-cols-2 gap-2">
                      <input formControlName="item" placeholder="Item" class="rounded border-gray-300" />
                      <input formControlName="description" placeholder="Description" class="rounded border-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <!-- Display Mode -->
            <div *ngIf="!editMode" class="space-y-4">
              <h2 class="text-lg font-medium text-gray-900">Player Profile</h2>
              <div class="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6">
                <p><strong>ID:</strong> {{ player.id }}</p>
                <p><strong>Title:</strong> {{ player.title }}</p>
                <p><strong>First Name:</strong> {{ player.first_name }}</p>
                <p><strong>Middle Name:</strong> {{ player.middle_name }}</p>
                <p><strong>Last Name:</strong> {{ player.last_name }}</p>
                <p><strong>Suffix:</strong> {{ player.suffix }}</p>
                <p><strong>Preferred Name:</strong> {{ player.preferred_name }}</p>
                <p><strong>Email:</strong> {{ player.email }}</p>
                <p><strong>Date of Birth:</strong> {{ player.date_of_birth }}</p>
                <p><strong>Sport:</strong> {{ player.sport }}</p>
                <p><strong>Sponsorship Goal:</strong> {{ player.sponsorship_goal }} {{ player.sponsorship_currency }}</p>
                <p><strong>Position:</strong> {{ player.position }}</p>
                <p><strong>Club:</strong> {{ player.club }}</p>
                <p><strong>Division:</strong> {{ player.division }}</p>
                <p><strong>League:</strong> {{ player.league }}</p>
                <p><strong>Primary Address ID:</strong> {{ player.primary_address_id }}</p>
                <p><strong>Billing Address ID:</strong> {{ player.billing_address_id }}</p>
              </div>

              <h3 class="mt-6 text-md font-medium text-gray-900">Accolades</h3>
              <ul *ngIf="player.player_accolades?.length; else noAccl" class="list-disc pl-5">
                <li *ngFor="let a of player.player_accolades">
                  {{ a.year }} – {{ a.team }}: {{ a.award }}
                </li>
              </ul>
              <ng-template #noAccl><p class="italic text-gray-500">No accolades listed.</p></ng-template>

              <h3 class="mt-6 text-md font-medium text-gray-900">Perks</h3>
              <ul *ngIf="player.sponsorship_perks?.length; else noPerk" class="list-disc pl-5">
                <li *ngFor="let p of player.sponsorship_perks">
                  <strong>{{ p.item }}:</strong> {{ p.description }}
                </li>
              </ul>
              <ng-template #noPerk><p class="italic text-gray-500">No perks listed.</p></ng-template>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class SponOSPlayerDashboardPage implements OnInit {
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);

  player!: Player;
  editForm!: FormGroup;
  editMode = false;
  saving = false;
  mobileMenuOpen = false;

  ngOnInit(): void {
    this.auth.currentPlayer$.subscribe((p) => {
      if (p) {
        this.player = p;
        this.buildForm(p);
      }
    });
  }

  buildForm(p: Player) {
    this.editForm = this.fb.group({
      id: [{ value: p.id, disabled: true }],
      title: [p.title],
      first_name: [p.first_name, Validators.required],
      middle_name: [p.middle_name],
      last_name: [p.last_name, Validators.required],
      suffix: [p.suffix],
      preferred_name: [p.preferred_name],
      email: [p.email, [Validators.required, Validators.email]],
      date_of_birth: [p.date_of_birth],
      sport: [p.sport],
      sponsorship_goal: [p.sponsorship_goal],
      sponsorship_currency: [p.sponsorship_currency],
      position: [p.position],
      club: [p.club],
      division: [p.division],
      league: [p.league],
      primary_address_id: [p.primary_address_id],
      billing_address_id: [p.billing_address_id],
      player_accolades: this.fb.array(
        (p.player_accolades || []).map((a) =>
          this.fb.group({
            team: [a.team, Validators.required],
            year: [a.year, Validators.required],
            award: [a.award, Validators.required],
          })
        )
      ),
      sponsorship_perks: this.fb.array(
        (p.sponsorship_perks || []).map((s) =>
          this.fb.group({
            item: [s.item, Validators.required],
            description: [s.description, Validators.required],
          })
        )
      ),
    });
  }

  get playerAccolades(): FormArray {
    return this.editForm.get('player_accolades') as FormArray;
  }
  get sponsorshipPerks(): FormArray {
    return this.editForm.get('sponsorship_perks') as FormArray;
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  onSave() {
    if (this.editForm.invalid) return;
    this.saving = true;
    this.auth.updatePlayer(this.editForm.getRawValue()).subscribe({
      next: (u) => {
        this.player = u;
        this.buildForm(u);
        this.editMode = false;
        this.saving = false;
      },
      error: () => (this.saving = false),
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
