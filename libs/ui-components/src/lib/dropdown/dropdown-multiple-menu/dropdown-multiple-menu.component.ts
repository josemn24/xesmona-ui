import { Component, Signal, effect, input } from '@angular/core';
import { DropDownService } from '../services/dropdown.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-dropdown-multiple-menu',
  templateUrl: './dropdown-multiple-menu.component.html',
  styleUrls: ['./dropdown-multiple-menu.component.scss'],
  standalone: true,
})
export class B2bDropDownMultipleMenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options = input<any[]>([]);
  showMenu: Signal<boolean>;

  constructor(private dropDownService: DropDownService) {
    this.showMenu = this.dropDownService.menuExpanded;

    effect(() => {
      this.dropDownService.updateOptions(this.options());
    }, { allowSignalWrites: true });
  }
}
