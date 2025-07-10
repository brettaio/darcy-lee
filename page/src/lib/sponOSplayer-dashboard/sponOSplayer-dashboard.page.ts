import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponOSAuthService } from '../../../../service/src/services';
import { Player } from '../../../../model/src/model';

@Component({
  selector: 'page-sponos-player-dashboard',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="overflow-hidden rounded-lg bg-white shadow-sm">
      <div class="px-4 py-5 sm:p-6">
        <ng-container *ngIf="auth.currentPlayer$ | async as player; else loading">
          <!-- Header -->
          <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <h1 class="text-3xl font-bold text-gray-900">
              Welcome back, {{ player.preferred_name || player.first_name }}!
            </h1>
            <p class="mt-2 md:mt-0 text-sm text-gray-500">{{ player.email }}</p>
          </div>

          <!-- Metrics -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="p-4 bg-indigo-50 rounded-lg text-center">
              <div class="text-sm text-gray-600">Total Sponsorships</div>
              <div class="mt-1 text-xl font-semibold text-indigo-700">
                {{ player.total_sponsorships | currency:player.sponsorship_currency }}
              </div>
            </div>
            <div class="p-4 bg-indigo-50 rounded-lg text-center">
              <div class="text-sm text-gray-600">Sponsorship Goal</div>
              <div class="mt-1 text-xl font-semibold text-indigo-700">
                {{ player.sponsorship_target | currency:player.sponsorship_currency }}
              </div>
            </div>
            <div class="p-4 bg-indigo-50 rounded-lg text-center">
              <div class="text-sm text-gray-600">Goal Met?</div>
              <span
                class="mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium"
                [ngClass]="
                  player.is_goal_met
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                "
              >
                {{ player.is_goal_met ? 'Yes' : 'No' }}
              </span>
            </div>
            <div class="p-4 bg-indigo-50 rounded-lg">
              <div class="text-sm text-gray-600 mb-1">Progress</div>
              <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  class="h-full bg-indigo-600"
                  [style.width.%]="
                    ((player.total_sponsorships ?? 0)/ (player.sponsorship_target ?? 1)) * 100
                      | number : '1.0-0'
                  "
                ></div>
              </div>
              <div class="mt-1 text-xs text-gray-500">
                {{
                  ((player.total_sponsorships ?? 0) / ( player.sponsorship_target ?? 1)) * 100
                    | number : '1.0-0'
                }}
                %
              </div>
            </div>
          </div>

          <!-- Details and Lists -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Personal Details -->
            <div class="space-y-3">
              <h2 class="text-lg font-medium text-gray-900">Personal Details</h2>
              <dl class="bg-white rounded-lg p-4 divide-y divide-gray-100">
                <div class="py-2 flex justify-between">
                  <dt class="text-sm text-gray-600">Date of Birth</dt>
                  <dd class="text-sm text-gray-900">{{ player.date_of_birth }}</dd>
                </div>
                <div class="py-2 flex justify-between">
                  <dt class="text-sm text-gray-600">Sport</dt>
                  <dd class="text-sm text-gray-900">{{ player.sport }}</dd>
                </div>
                <div class="py-2 flex justify-between">
                  <dt class="text-sm text-gray-600">Position</dt>
                  <dd class="text-sm text-gray-900">{{ player.position }}</dd>
                </div>
                <div class="py-2 flex justify-between">
                  <dt class="text-sm text-gray-600">Club</dt>
                  <dd class="text-sm text-gray-900">{{ player.club }}</dd>
                </div>
              </dl>
            </div>

<!-- Accolades & Perks -->
<div class="space-y-6">
  <div>
    <h2 class="text-lg font-medium text-gray-900 mb-2">Accolades</h2>
    <ul
      class="bg-white rounded-lg p-4 divide-y divide-gray-100"
      *ngIf="(player.player_accolades?.length ?? 0) > 0; else noAccl"
    >
      <li
        *ngFor="let a of player.player_accolades"
        class="py-2 flex justify-between"
      >
        <span>{{ a.year }} – {{ a.team }}</span>
        <span class="text-gray-600">{{ a.award }}</span>
      </li>
    </ul>
    <ng-template #noAccl>
      <p class="py-2 text-gray-500 italic">No accolades listed.</p>
    </ng-template>
  </div>

  <div>
    <h2 class="text-lg font-medium text-gray-900 mb-2">Sponsorship Perks</h2>
    <ul
      class="bg-white rounded-lg p-4 divide-y divide-gray-100"
      *ngIf="(player.sponsorship_perks?.length ?? 0) > 0; else noPerk"
    >
      <li *ngFor="let perk of player.sponsorship_perks" class="py-2">
        <div class="font-medium">{{ perk.item }}</div>
        <div class="text-gray-600 text-sm">{{ perk.description }}</div>
      </li>
    </ul>
    <ng-template #noPerk>
      <p class="py-2 text-gray-500 italic">No perks listed.</p>
    </ng-template>
  </div>
</div>
          </div>
        </ng-container>

        <ng-template #loading>
          <p class="text-gray-500">Loading your profile…</p>
        </ng-template>
      </div>
    </div>
  `,
})
export class SponOSPlayerDashboardPage {
  constructor(public auth: SponOSAuthService) {}
}
