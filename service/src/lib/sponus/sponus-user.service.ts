import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  password: string;
  role: 'PLAYER' | 'SPONSOR_USER' | 'SPONSOR_CORPORATE' | 'ADMIN';
  firstName: string;
  lastName: string;
  phone?: string;
  addressNumber?: string;
  streetName?: string;
  streetType?: string;
  city?: string;
  regionOrState?: string;
  postalCode?: string;
  country?: string;
  billingAddressNumber?: string;
  billingStreetName?: string;
  billingStreetType?: string;
  billingCity?: string;
  billingRegionOrState?: string;
  billingPostalCode?: string;
  billingCountry?: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class SponusUserService {
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
