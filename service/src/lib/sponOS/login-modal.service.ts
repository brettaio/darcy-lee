import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginModalService {
  private visible$$ = new BehaviorSubject<boolean>(false);
  visible$ = this.visible$$.asObservable();

  open() { this.visible$$.next(true) }
  close() { this.visible$$.next(false) }
}
