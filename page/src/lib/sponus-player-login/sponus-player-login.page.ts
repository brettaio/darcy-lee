import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'page-sponus-player-login',
  imports: [RouterLink],
  template: `
    <button
      [routerLink]="['/player', 'a0a0a0', 'home']"
      class="mt-4 inline-block rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
    >
      Go to Player Home
    </button>
  `,
  styles: ``,
})
export class SponusPlayerLoginPage {}
