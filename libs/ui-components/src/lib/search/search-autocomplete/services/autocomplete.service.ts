import { Injectable } from '@angular/core';
import { AutoCompleteStateService } from './autocomplete-state.service';

@Injectable()
export class AutoCompleteService {
  get autoCompleteExpanded() {
    return this.autoCompleteStateService.autoCompleteExpanded;
  }

  get autoCompleteCurrentResult() {
    if (this.autoCompleteCurrentIndex() === -1) return null;
    return this.autoCompleteExpanded() ? this.autoCompleteResults()[this.autoCompleteCurrentIndex()] : null;
  }

  get autoCompleteResults() {
    return this.autoCompleteStateService.results;
  }

  get autoCompleteCurrentIndex() {
    return this.autoCompleteStateService.currentIndex;
  }
  
  get activeDescendantOption() {
    if (this.autoCompleteCurrentIndex() === -1) return null;
    return this.autoCompleteExpanded() ? `option-${this.autoCompleteCurrentIndex()}` : null;
  }
  
  constructor(private autoCompleteStateService: AutoCompleteStateService) {}

  openAutoComplete() {
    this.autoCompleteStateService.showAutoComplete();
  }

  closeAutoComplete() {
    this.autoCompleteStateService.updateCurrentIndex(-1);
    this.autoCompleteStateService.hideAutoComplete();
  }

  highlightNext() {
    const newIndex = (this.autoCompleteCurrentIndex() + 1) % this.autoCompleteResults().length;
    this.updateIndex(newIndex);
  }

  highlightPrev() {
    const newIndex = this.autoCompleteCurrentIndex() === -1
      ? this.autoCompleteResults().length - 1
      : (this.autoCompleteCurrentIndex() - 1 + this.autoCompleteResults().length) % this.autoCompleteResults().length;
    this.updateIndex(newIndex);
  }

  updateIndex(newIndex: number) {
    this.autoCompleteStateService.updateCurrentIndex(newIndex);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateResults(results: any[]) {
    this.autoCompleteStateService.updateResults(results);
  }
}
