/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  Component, Input
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-step-mobile',
  templateUrl: './step-mobile.component.html',
  styleUrls: ['./step-mobile.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class B2bStepMobileComponent {
  @Input() number: number;
  @Input() state: 'active' | 'inactive' | 'filled';
}
