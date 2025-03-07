import { Directive, HostListener } from '@angular/core';
import { DropDownService } from '../services/dropdown.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-dropdown-input-blur]',
  standalone: true,
})
export class B2bDropdownInputBlurDirective {
  constructor(private dropDownService: DropDownService) {}

  @HostListener("focusout", ["$event"]) 
  onBlur(event: FocusEvent) {
    if ((event.relatedTarget as Element)?.hasAttribute('b2b-menu-option')) {
      return;
    }
    this.dropDownService.closeMenu();
  }
}
