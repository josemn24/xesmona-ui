import { Directive, ElementRef, HostListener } from '@angular/core';
import { AutoCompleteService } from '../services/autocomplete.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-auto-complete-input]',
  standalone: true,
})
export class B2bShowAutoCompleteDirective {
  constructor(private el: ElementRef, private autoCompleteService: AutoCompleteService) {}

  @HostListener('focus', ['$event'])
  onFocus(event: FocusEvent) {
    const isReadOnlyInput = this.el.nativeElement?.readOnly;
    const isDisabledInput = this.el.nativeElement?.disabled;
    if (isReadOnlyInput || isDisabledInput) {
      return;
    }
    this.autoCompleteService.openAutoComplete();
  }

  @HostListener("focusout", ["$event"]) 
  onBlur(event: FocusEvent) { 
    if ((event.relatedTarget as Element)?.hasAttribute('b2b-autocomplete-option')) {
      return;
    }
    this.autoCompleteService.closeAutoComplete();
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    this.autoCompleteService.updateIndex(-1);
    if (!this.autoCompleteService.autoCompleteExpanded()) {
      this.autoCompleteService.openAutoComplete();
    }
  }
}
