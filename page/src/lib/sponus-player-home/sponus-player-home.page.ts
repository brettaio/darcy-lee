import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SponusUserService } from '../../../../service/src/services';

@Component({
  selector: 'page-sponus-player-home',
  standalone: true,
  template: `
    <div *ngIf="user">
      <h1>Welcome, {{ user.firstName }} {{ user.lastName }}</h1>
      <p>Email: {{ user.email }}</p>
      <p>
        Address: {{ user.addressNumber }} {{ user.streetName }}
        {{ user.streetType }}, {{ user.city }}, {{ user.postalCode }},
        {{ user.country }}
      </p>
    </div>
    <p *ngIf="!user">Loading user...</p>
  `,
})
export class SponusPlayerHomePage implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.userService.getUsers().subscribe((users) => {
      this.user = users.find((u) => u.id === id);
    });
  }
}
