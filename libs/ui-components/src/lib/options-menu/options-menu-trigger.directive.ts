import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';
import { B2bOptionsMenuComponent } from './options-menu.component';

@Directive({
  selector: '[b2bOptionsMenuTrigger]',
  standalone: true,
})
export class B2BOptionsMenuTriggerDirective {
  @Input('b2bOptionsMenuTrigger') menu: B2bOptionsMenuComponent;

  constructor(private el: ElementRef) {}

  @HostBinding('attr.aria-haspopup') get hasPopUp() {
    return !!this.menu;
  }

  @HostBinding('attr.aria-expanded') get expanded() {
    return this.menu?.isOpen();
  }

  @HostBinding('attr.aria-controls') get menuId() {
    return this.menu?.el.nativeElement.id || null;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isActiveElement() || this.menuIsActiveElement()) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          this.onArrowUp();
          return;
        case 'ArrowDown':
          event.preventDefault();
          this.onArrowDown();
          return;
      }
    }

    if (this.isActiveElement()) {
      if (event.key === 'Escape') {
        this.menu.close();
      }
      if (event.key === 'Enter' || event.code === 'Space') {
        this.toggleMenu();
      }
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    /* Do nothing if click event has been triggered by keyboard */
    if (event.detail === 0) {
      return;
    }
    this.toggleMenu();
  }

  @HostListener("focusout", ["$event"])
  onBlur(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as Element;
    if (this.menuContainsElement(relatedTarget)) {
      return;
    }
    this.menu.close();
  }

  private onArrowDown() {
    if (this.menu.isOpen()) {
      this.menu.highlightNext();
    }
  }
  
  private onArrowUp() {
    if (this.menu.isOpen()) {
      this.menu.highlightPrev();
    }
  }

  private toggleMenu() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (this.menu.isOpen()) {
      this.menu.close();
    } else {
      this.menu.open(rect);
    }
  }

  private isActiveElement() {
    return this.el.nativeElement === document.activeElement;
  }

  private menuIsActiveElement() {
    return this.menuContainsElement(document.activeElement);
  }

  private menuContainsElement(element: Element | null) {
    return this.menu.el.nativeElement.contains(element);
  }
}
