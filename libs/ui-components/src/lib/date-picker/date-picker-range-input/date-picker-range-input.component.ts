import { Component, Input } from '@angular/core';
import { B2bFieldWrapperComponent } from '../../text-field/field-wrapper';
import { B2bLabelComponent } from '../../label';
import { B2bFieldDateRangeWrapperComponent } from '../../text-field/field-date-range-wrapper';
import { NgClass } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-date-picker-range-input',
  templateUrl: './date-picker-range-input.component.html',
  standalone: true,
  imports: [NgClass, B2bFieldWrapperComponent, B2bLabelComponent, B2bFieldDateRangeWrapperComponent],
})
export class B2bDatePickerRangeInputComponent {
  @Input() label = '';
  @Input() inputName = '';
  @Input() required = false;
}
