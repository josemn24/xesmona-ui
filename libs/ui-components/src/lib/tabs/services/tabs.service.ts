/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable()
export class TabsService {
  get currentTab() {
    return this.tabsOptions()[this.currentIndex()];
  }

  get tabs() {
    return this.tabsOptions;
  }

  get tabsCurrentIndex() {
    return this.currentIndex;
  }

  highlightNext() {
    const newIndex = (this.currentIndex() + 1) % this.tabsOptions().length;
    this.updateIndex(newIndex);
  }

  highlightPrev() {
    const newIndex = (this.currentIndex() - 1 + this.tabsOptions().length) % this.tabsOptions().length;
    this.updateIndex(newIndex);
  }
  
  addTab(result: string) {
    this.updateTabs([...this.tabsOptions(), result]);
  }

  updateTabs(results: string[]) {
    this.setTabsOptions(results);
  }

  updateIndex(newIndex: number) {
    this.setTabsCurrentIndex(newIndex);
  }

  private tabsOptions: WritableSignal<string[]> = signal([]);
  private currentIndex = signal(0);

  private setTabsOptions(options: string[]) {
    this.tabsOptions.set(options);
  }

  private setTabsCurrentIndex(currentIndex: number) {
    this.currentIndex.set(currentIndex);
  }
}
