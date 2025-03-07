import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { AutoCompleteService } from '../../services/autocomplete.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-autocomplete-option]',
  template: `
    <div class="content" (click)="onAutoCompleteOption()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./search-autocomplete-option.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'role': 'option',
  },
  standalone: true,
  imports: [NgClass]
})
export class B2bSearchAutoCompleteOptionComponent {
  @Input() optionId: number;
  @Output() clicked = new EventEmitter();

  @HostBinding('id') get id() { return this.optionAriaId; }
  @HostBinding('class') get class() { return this.optionId === this.currentIndex ? 'active' : ''; }

  get optionAriaId() {
    return `option-${this.optionId}`;
  }

  get currentIndex() {
    return this.autoCompleteService.autoCompleteCurrentIndex();
  }

  constructor(private autoCompleteService: AutoCompleteService) {}

  onAutoCompleteOption() {
    this.clicked.emit();
    this.autoCompleteService.closeAutoComplete();
  }
}
