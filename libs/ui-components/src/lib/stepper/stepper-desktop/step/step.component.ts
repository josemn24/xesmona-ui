/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  Component, Input
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class B2bStepComponent {
  @Input() number: number;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() state: 'active' | 'inactive' | 'filled';
  @Input() disabled = false;

  getStateStyles(state: string, subtitle: string ) {
    if (state === 'active' && subtitle) {
      return 'b2b-step-info-container';
    } else if (state === 'active' && !subtitle) {
      return 'b2b-step-info-container-nosub';
    } else {
      return 'b2b-step-no-info';
    }
  }

  getTabindex() {
    return this.disabled ? -1 : 0;
  }
}
