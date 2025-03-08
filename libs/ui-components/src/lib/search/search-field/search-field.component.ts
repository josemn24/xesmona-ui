import { Component, Input } from '@angular/core';
import { B2bFieldWrapperComponent } from '../../text-field/field-wrapper';
import { B2bFieldIconWrapperComponent } from '../../text-field/field-icon-wrapper';
import { B2bLabelComponent } from '../../label';
import { B2bIconComponent } from '../../icon';
import { NgClass } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  imports: [NgClass, B2bFieldWrapperComponent, B2bFieldIconWrapperComponent, B2bLabelComponent, B2bIconComponent],
})
export class B2bSearchFieldComponent {
  @Input() label = '';
  @Input() inputName = '';
  @Input() required = false;
}
