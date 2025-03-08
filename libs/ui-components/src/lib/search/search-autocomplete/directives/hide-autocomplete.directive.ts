import { Directive, ElementRef, HostListener, effect } from '@angular/core';
import { AutoCompleteService } from '../services/autocomplete.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-auto-complete-container]',
  standalone: true
})
export class B2bHideAutoCompleteDirective {
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    if (!this.el.nativeElement.contains(clickedElement)) {
      this.autoCompleteService.closeAutoComplete();
    }
  }

  constructor(private el: ElementRef, private autoCompleteService: AutoCompleteService) {
    effect(() => {
      if (this.autoCompleteService.autoCompleteExpanded()) {
        this.el.nativeElement.classList.add('show-autocomplete');
      } else {
        this.el.nativeElement.classList.remove('show-autocomplete');
      }
    });
  }
}
