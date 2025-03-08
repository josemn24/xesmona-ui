import { Component, input, model } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bPaginationIntl } from '../services/paginator-intl.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bPaginationComponent {
  /** The total number of pages */
  totalPages = input<number>(0);

  /** The zero-based page index */
  activePageIndex = model(0);

  constructor(public paginatorIntl: B2bPaginationIntl) {}

  onFirst() {
    this.setIndex(0);
  }

  onPrev() {
    this.setIndex(this.activePageIndex() - 1);
  }

  onNext() {
    this.setIndex(this.activePageIndex() + 1);
  }

  onLast() {
    this.setIndex(this.totalPages() - 1);
  }

  isDisabled(navButton: 'first' | 'prev' | 'next' | 'last') {
    switch (navButton) {
      case 'first':
      case 'prev':
        return this.activePageIndex() === 0;
      case 'next':
      case 'last':
        return this.activePageIndex() === this.totalPages() - 1;
      default:
        return false;
    }
  }

  private setIndex(index: number) {
    this.activePageIndex.set(index);
  }
}
