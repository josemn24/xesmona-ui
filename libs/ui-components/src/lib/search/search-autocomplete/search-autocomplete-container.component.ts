import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { AutoCompleteService } from './services/autocomplete.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-auto-complete-container]',
  template: `<ng-content></ng-content>`,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'role': 'combobox',
    'aria-autocomplete': 'list',
    'aria-controls': 'search-autocomplete',
  },
  standalone: true
})
export class B2bSearchAutoCompleteContainerComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() enterKeyDown = new EventEmitter<any>();

  @HostBinding('attr.aria-expanded') get expanded() { return this.autoCompleteExpanded(); }
  @HostBinding('attr.aria-activedescendant') get activeDescendant() { return this.activeDescendantOption; }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "Escape":
        this.autoCompleteService.closeAutoComplete();
        break;
      case "ArrowDown":
        this.autoCompleteService.highlightNext();
        break;
      case "ArrowUp":
        this.autoCompleteService.highlightPrev();
        event.preventDefault();
        break;
      case "Enter":
        this.enterKeyDown.emit(this.autoCompleteService.autoCompleteCurrentResult);
        this.autoCompleteService.closeAutoComplete();
    }
  }

  get autoCompleteExpanded() {
    return this.autoCompleteService.autoCompleteExpanded;
  }

  get autoCompleteCurrentIndex() {
    return this.autoCompleteService.autoCompleteCurrentIndex;
  }
  
  get activeDescendantOption() {
    if (this.autoCompleteCurrentIndex() === -1) return null;
    return this.autoCompleteExpanded() ? `option-${this.autoCompleteCurrentIndex()}` : null;
  }

  constructor(private autoCompleteService: AutoCompleteService) {}
}
