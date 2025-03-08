import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopOverService {
  private popOverState = signal(false);

  get mouseOnPopOver() {
    return this.popOverState;
  }

  mouseEnterPopOver() {
    this.emitPopOverUpdate(true);
  }

  mouseLeavePopOver() {
    this.emitPopOverUpdate(false);
  }

  private emitPopOverUpdate(show: boolean) {
    this.popOverState.set(show);
  }
}
