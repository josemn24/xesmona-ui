/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable()
export class AutoCompleteStateService {
  private autoCompleteExpandedState = signal(false);
  private autoCompleteResults: WritableSignal<any[]> = signal([]);
  private autoCompleteCurrentIndex = signal(-1);

  get autoCompleteExpanded() {
    return this.autoCompleteExpandedState;
  }

  get results() {
    return this.autoCompleteResults;
  }

  get currentIndex() {
    return this.autoCompleteCurrentIndex;
  }

  showAutoComplete() {
    this.setAutoCompleteExpanded(true);
  }

  hideAutoComplete() {
    this.setAutoCompleteExpanded(false);
  }

  updateResults(results: any[]) {
    this.setAutoCompleteResults(results);
  }

  updateCurrentIndex(currentIndex: number) {
    this.setAutoCompleteCurrentIndex(currentIndex);
  }

  private setAutoCompleteExpanded(expanded: boolean) {
    this.autoCompleteExpandedState.set(expanded);
  }

  private setAutoCompleteResults(results: any[]) {
    this.autoCompleteResults.set(results);
  }

  private setAutoCompleteCurrentIndex(currentIndex: number) {
    this.autoCompleteCurrentIndex.set(currentIndex);
  }
}
