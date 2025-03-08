import { Component, computed, input, model } from '@angular/core';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bPaginationComponent } from '../pagination/pagination.component';
import { B2bDropDownSelectComponent } from '../../dropdown-select/dropdown-select.component';
import { B2bPaginationIntl } from '../services/paginator-intl.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [B2bPaginationComponent, B2bDropDownSelectComponent, B2bIconComponent],
})
export class B2bPaginatorComponent {
  /** The length of the total number of items that are being paginated */
  length = input<number>(0);

  /** The set of provided page size options to display to the user */
  pageSizeOptions = input<number[]>([]);

  /** The zero-based page index of the displayed list of items */
  pageIndex = model(0);

  /** Number of items to display on a page */
  pageSize = model(0);

  /** The total number of pages */
  totalPages = computed(() => this.getTotalPages(this.length(), this.pageSize()));

  constructor(public paginatorIntl: B2bPaginationIntl) {}

  onPaginationSizeChange(value: number) {
    this.updatePageSize(value);
  }

  private getTotalPages(resultsLength: number, pageSize: number) {
    if (!resultsLength || !pageSize) {
      return 0;
    }
    return Math.ceil(resultsLength / pageSize);
  }
  
  private updatePageSize(pageSize: number) {
    this.updatePageIndex(
      this.calculateNewPageIndex(this.pageIndex(), this.pageSize(), pageSize)
    );
    this.pageSize.set(pageSize);
  }

  private updatePageIndex(pageIndex: number) {
    this.pageIndex.set(pageIndex);
  }

  private calculateNewPageIndex(index: number, oldSize: number, newSize: number) {
    return Math.floor((oldSize * index) / newSize);
  }
}
