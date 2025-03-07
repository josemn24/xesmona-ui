import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[b2b-header-menu-option-button]',
  templateUrl: './header-menu-option-button.component.html',
  styleUrls: ['./header-menu-option-button.component.scss'],
  standalone: true,
})
export class B2bHeaderMenuOptionButtonComponent {
  @Input() open = false;
}
