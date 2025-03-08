import { Component, Input } from '@angular/core';
import { B2bFieldWrapperComponent } from '../../text-field/field-wrapper';
import { B2bFieldIconWrapperComponent } from '../../text-field/field-icon-wrapper';
import { B2bLabelComponent } from '../../label';
import { NgClass } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-date-picker-input',
  templateUrl: './date-picker-input.component.html',
  styleUrls: ['./date-picker-input.component.scss'],
  standalone: true,
  imports: [NgClass, B2bFieldWrapperComponent, B2bFieldIconWrapperComponent, B2bLabelComponent],
})
export class B2bDatePickerInputComponent {
  @Input() label = '';
  @Input() inputName = '';
  @Input() required = false;
}
