import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { DropDownService } from '../../../services/dropdown.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-menu-option]',
  template: `
    <div class="content" (click)="onMenuOption()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./dropdown-menu-option.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'role': 'option',
  },
  standalone: true,
  imports: [NgClass]
})
export class B2bDropDownMenuOptionComponent {
  @Input() optionId: number;
  @Output() clicked = new EventEmitter();

  @HostBinding('id') get id() { return this.optionAriaId; }
  @HostBinding('class') get class() { return this.optionId === this.currentIndex ? 'active' : ''; }

  get optionAriaId() {
    return `option-${this.optionId}`;
  }

  get currentIndex() {
    return this.dropDownService.menuCurrentIndex();
  }

  constructor(private dropDownService: DropDownService) {}

  onMenuOption() {
    this.clicked.emit();
    this.dropDownService.closeMenu();
  }
}
