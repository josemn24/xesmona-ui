import { Component } from '@angular/core';
import { B2bLabelComponent, } from '../label/label.component';
import { B2bIconComponent } from '../icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[b2b-radio-button]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  imports: [B2bLabelComponent, B2bIconComponent],
  standalone: true,
})
export class B2bRadioButtonComponent {}
