import { signal } from '@angular/core';
import { createProblemPropData } from '../factory/problem-prop-data.factory';
import { ProblemPropData } from '../model/problem-prop-data.model';

export class ProblemPropDataStore {
  problemPropData = signal<ProblemPropData>(createProblemPropData());
}

export const problemPropDataStore = new ProblemPropDataStore();
