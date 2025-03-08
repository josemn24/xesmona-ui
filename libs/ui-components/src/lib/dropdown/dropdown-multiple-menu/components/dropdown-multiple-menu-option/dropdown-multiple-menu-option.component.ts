import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { DropDownService } from '../../../services/dropdown.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-multiple-menu-option]',
  template: `
    <div class="content" (click)="onMenuOption()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./dropdown-multiple-menu-option.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'role': 'option',
  },
  standalone: true,
})
export class B2bDropDownMultipleMenuOptionComponent {
  @Input() optionId: number;
  @Output() clicked = new EventEmitter();

  @HostBinding('class') get class() { return this.optionId === this.currentIndex ? 'active' : ''; }
  @HostBinding('id') get id() { return this.optionAriaId; }

  get currentIndex() {
    return this.dropDownService.menuCurrentIndex();
  }

  get optionAriaId() {
    return `option-${this.optionId}`;
  }

  onMenuOption() {
    this.clicked.emit();
  }

  constructor(private dropDownService: DropDownService) {}
}
