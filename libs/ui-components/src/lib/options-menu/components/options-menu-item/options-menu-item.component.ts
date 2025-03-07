/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, computed, effect, ElementRef, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { OptionsMenuService } from '../../services/option-menu.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-options-menu-item],a[b2b-options-menu-item]',
  templateUrl: './options-menu-item.component.html',
  styleUrls: ['./options-menu-item.component.scss'],
  host: {
    'role': 'menuitem',
  },
  standalone: true,
})
export class B2bOptionsMenuItemComponent {
  @Output() clicked = new EventEmitter();
  
  @HostBinding('id') get id() {
    return `option-menu-${this.optionId}`;
  }
  
  @HostBinding('tabindex') get tabindex() {
    return this.tabIndex();
  }
  
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      this.isActiveElement() &&
      this.optionId === this.currentMenuIndex() &&
      (event.key === 'Enter' || event.code === 'Space')
    ) {
      this.onMenuOption();
    }
  }
  
  get currentMenuIndex() {
    return this.optionsMenuService.menuCurrentIndex;
  }
  
  tabIndex = computed(() => this.optionId === this.currentMenuIndex() ? 0 : -1);

  private optionId: number;

  constructor(private elem: ElementRef, private optionsMenuService: OptionsMenuService) {
    this.optionId = this.optionsMenuService.getOptionId();
    effect(() => {
      this.setFocusByTabIndex(this.tabIndex());
    });
  }

  onMenuOption() {
    this.clicked.emit();
    if (this.elem.nativeElement instanceof HTMLAnchorElement) {
      return;
    }
    this.optionsMenuService.closeMenu();
  }

  private setFocusByTabIndex(tabIndex: number) {
    if (tabIndex === 0) {
      this.elem.nativeElement.focus();
    }
  }

  private isActiveElement() {
    return this.elem.nativeElement === document.activeElement;
  }
}
