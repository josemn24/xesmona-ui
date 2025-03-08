import { Component, computed, input } from '@angular/core';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[b2b-header-burger-button]',
  templateUrl: './header-burger-button.component.html',
  styleUrls: ['./header-burger-button.component.scss'],
  standalone: true,
  imports: [B2bIconComponent],
})
export class B2bHeaderBurgerButtonComponent {
  open = input<boolean>(false);
  headerIcon = computed(() => (this.open() ? 'icon-close' : 'icon-menu-burger'));
}
