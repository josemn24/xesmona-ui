import { Directive, ElementRef, HostBinding, HostListener, Input, effect } from '@angular/core';
import { DropDownService } from '../services/dropdown.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-dropdown-container]',
  standalone: true
})
export class B2bDropDownContainerDirective {
  @Input() optionLabel = '';

  @HostBinding('attr.aria-expanded') get expanded() { return this.menuExpanded(); }
  @HostBinding('attr.aria-activedescendant') get activeDescendant() { return this.activeDescendantOption; }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    if (!this.el.nativeElement.contains(clickedElement)) {
      this.dropDownService.closeMenu();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.el.nativeElement.contains(document.activeElement)) {
      const regex = /^[a-zA-Z]+$/;
      const isLetter = regex.test(event.key) && event.key.length === 1;

      if (isLetter) {
        this.selectFirstMatch(event.key);
        return;
      }

      switch (event.key) {
        case "Escape":
          this.dropDownService.closeMenu();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.onArrowDown();
          break;
        case "ArrowUp":
          this.onArrowUp();
          event.preventDefault();
          break;
      }
    }
  }

  get menuExpanded() {
    return this.dropDownService.menuExpanded;
  }

  get autoCompleteCurrentIndex() {
    return this.dropDownService.menuCurrentIndex;
  }
  
  get activeDescendantOption() {
    if (this.autoCompleteCurrentIndex() === -1) return null;
    return this.menuExpanded() ? `option-${this.autoCompleteCurrentIndex()}` : null;
  }

  constructor(private el: ElementRef, private dropDownService: DropDownService) {
    effect(() => {
      if (this.dropDownService.menuExpanded()) {
        this.el.nativeElement.classList.add('show-menu');
      } else {
        this.el.nativeElement.classList.remove('show-menu');
      }
    });
  }

  private selectFirstMatch(key: string) {
    if (this.menuExpanded()) {
      const firstMatchIndex = this.dropDownService.menuOptions().findIndex(
        option => this.optionMatchesKey(option, key)
      );
      if (firstMatchIndex !== -1) {
        this.dropDownService.updateIndex(firstMatchIndex);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private optionMatchesKey(option: any, key: string) {
    const optionValue = this.optionLabel ? option[this.optionLabel] : option;
    return optionValue?.toLowerCase().startsWith(key.toLowerCase());
  } 

  private onArrowDown() {
    if (this.menuExpanded()) {
      this.dropDownService.highlightNext();
    }
  }

  private onArrowUp() {
    if (this.menuExpanded()) {
      this.dropDownService.highlightPrev();
    }
  }
}
