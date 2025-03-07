/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable()
export class OptionsMenuService {
  get menuExpanded() {
    return this.menuExpandedState;
  }

  get menuCurrentResult() {
    if (this.currentIndex() === -1) return null;
    return this.options()[this.currentIndex()];
  }

  get menuOptions() {
    return this.options;
  }

  get menuCurrentIndex() {
    return this.currentIndex;
  }
  
  get activeDescendantOption() {
    if (this.currentIndex() === -1) return null;
    return this.menuExpanded() ? `option-${this.currentIndex()}` : null;
  }

  openMenu() {
    this.setMenuExpanded(true);
  }

  closeMenu() {
    this.updateIndex(-1);
    this.setMenuExpanded(false);
  }

  highlightNext() {
    const newIndex = (this.currentIndex() + 1) % this.optionId;
    this.updateIndex(newIndex);
  }

  highlightPrev() {
    const newIndex = this.currentIndex() === -1
      ? this.optionId - 1
      : (this.currentIndex() - 1 + this.optionId) % this.optionId;
    this.updateIndex(newIndex);
  }
  
  updateOptions(results: any[]) {
    this.setMenuOptions(results);
  }

  updateIndex(newIndex: number) {
    this.setMenuCurrentIndex(newIndex);
  }

  getOptionId() {
    return this.optionId++;
  }

  private optionId = 0;
  private menuExpandedState = signal(false);
  private options: WritableSignal<any[]> = signal([]);
  private currentIndex = signal(-1);

  private setMenuExpanded(expanded: boolean) {
    this.menuExpandedState.set(expanded);
  }

  private setMenuOptions(options: any[]) {
    this.options.set(options);
  }

  private setMenuCurrentIndex(currentIndex: number) {
    this.currentIndex.set(currentIndex);
  }
}
