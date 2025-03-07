import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-options-menu-item-el]',
  templateUrl: './options-menu-item.component.html',
  styleUrls: ['./options-menu-item.component.scss'],
  standalone: true,
})
export class B2bOptionsMenuItemElComponent {
  @Output() clicked = new EventEmitter();

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.onMenuOption();
    }
  }

  onMenuOption() {
    this.clicked.emit();
  }
}
