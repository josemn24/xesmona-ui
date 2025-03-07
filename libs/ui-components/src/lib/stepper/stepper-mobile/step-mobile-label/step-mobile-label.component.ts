/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  Component, Input
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-step-mobile-label',
  templateUrl: './step-mobile-label.component.html',
  styleUrls: ['./step-mobile-label.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class B2bStepMobileLabelComponent {
  @Input() title = '';
  @Input() subtitle = '';

  getStateStyles(subtitle: string) {
    return subtitle ? 'b2b-step-info-container' : 'b2b-step-info-container-nosub';
  }
}
