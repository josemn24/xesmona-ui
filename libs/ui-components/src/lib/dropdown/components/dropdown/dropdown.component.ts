import { Component, Input } from '@angular/core';
import { B2bLabelComponent } from '../../../label';
import { B2bIconComponent } from '../../../icon';
import { B2bDropdownWrapperComponent } from '../dropdown-wrapper/dropdown-wrapper.component';
import { B2bDropDownIconWrapperComponent } from '../dropdown-icon-wrapper/dropdown-icon-wrapper.component';
import { NgClass } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [NgClass, B2bDropdownWrapperComponent, B2bDropDownIconWrapperComponent, B2bLabelComponent, B2bIconComponent],
})
export class B2bDropDownComponent {
  @Input() label = '';
  @Input() inputName = '';
  @Input() required = false;
}
