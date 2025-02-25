import { signal } from '@angular/core';
import { createReviewData } from '../factory/review-data.factory';
import { ReviewData } from '../model/review-data.model';

export class ReviewDataStore {
  reviews = signal<ReviewData[]>(createReviewData());
}

export const reviewDataStore = new ReviewDataStore();
