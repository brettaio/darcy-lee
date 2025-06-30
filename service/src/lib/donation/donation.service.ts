import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../websites/sponOS/src/environments/environments';

@Injectable({ providedIn: 'root' })
export class DonationService {
  private stripePromise: Promise<Stripe | null>;

  constructor(private http: HttpClient) {
    this.stripePromise = loadStripe(environment.stripeKey);
  }

  /**
   * Kick off a Stripe Checkout session for a donation.
   * @param playerId the six-char player code
   * @param amount The donation in amount of AUD
   * @param message Optional Sponsor Message
   */

  async donate(
    playerId: string,
    amount: number,
    message?: string,
  ): Promise<void> {
    //1. create the checkout session server side
    const { id: sessionId } = await firstValueFrom(
      this.http.post<{ id: string }>(
        '/stripe/session/',
        { played_id: playerId, amount, message },
        { withCredentials: true },
      ),
    );
    //2) redirect to Stripe Checkout
    const stripeClient = await this.stripePromise;
    if (stripeClient) {
      await stripeClient.redirectToCheckout({ sessionId });
    } else {
      console.error('Stripe failed to initialize.');
    }
  }
}
