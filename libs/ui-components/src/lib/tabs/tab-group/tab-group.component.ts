import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
  computed,
  effect,
  signal
} from '@angular/core';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bTabComponent } from '../tab.component';
import { TabsService } from '../services/tabs.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  standalone: true,
  imports: [B2bIconComponent],
  providers: [TabsService]
})
export class B2bTabGroupComponent implements AfterContentInit, AfterViewChecked {
  @Input() leftArrow = false;
  @Input() rightArrow = false;
  @Input() translationStep = 100;
  @Output() tabChange = new EventEmitter<string>();

  @ViewChild('tabsContainer') tabsContainerElement: ElementRef;
  @ViewChild('tabsList') tabsListElement: ElementRef;
  @ContentChildren(B2bTabComponent) tabs: QueryList<B2bTabComponent>;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.hiddenTabsWidth.set(Math.ceil((this.tabsWidth - this.containerWidth)));
  }

  currentTabsPosition = signal(0);
  hiddenTabsWidth = signal(0);
  tabsTranslateX = computed(() => `translateX(${this.currentTabsPosition()}px)`);
  leftArrowIsDisabled = computed(() => this.tabsAreBelowLimit(this.currentTabsPosition()) || null);
  rightArrowIsDisabled = computed(() => this.tabsAreOverLimit(this.currentTabsPosition(), this.hiddenTabsWidth()) || null);

  previousTabIndex = -1;

  get containerWidth() {
    return this.tabsContainerElement?.nativeElement?.getBoundingClientRect()?.width;
  }

  get tabsWidth() {
    return this.tabsListElement?.nativeElement?.getBoundingClientRect()?.width;
  }

  constructor(private cd: ChangeDetectorRef, private tabsService: TabsService) {
    effect(() => {
      this.tabsIndexUpdateHandler(this.tabsService.tabsCurrentIndex());
    });
  }

  ngAfterContentInit() {
    this.initTabs();
  }

  ngAfterViewChecked(): void {
    this.hiddenTabsWidth.set(Math.ceil((this.tabsWidth - this.containerWidth)));
    this.cd.detectChanges();
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.tabsService.highlightPrev();
        break;
      case 'ArrowRight':
        this.tabsService.highlightNext();
        break;
    }
  }

  onTranslateLeft() {
    if (this.tabsAreBelowLimit(this.currentTabsPosition())) {
      return;
    }
    this.translateTabsToLeft();
  }

  onTranslateRight() {
    if (
      !this.tabsAreWiderThanContainer() || this.tabsAreOverLimit(this.currentTabsPosition(), this.hiddenTabsWidth())
    ) {
      return;
    }
    this.translateTabsToRight();
  }

  private initTabs() {
    if (!this.tabs?.length) {
      return;
    }
    this.tabsService.updateTabs(this.tabs.map(tab => tab.value));
  }

  private tabsIndexUpdateHandler(newIndex: number) {
    if (this.tabsService.tabs().length === 0) { 
      return;
    }
    this.changeSelectedTab(newIndex);
  }

  private changeSelectedTab(newSelectedIndex: number) {
    const previousTab = this.tabs?.get(this.previousTabIndex);
    if (previousTab) {
      this.toggleSelectStyle(previousTab);
      this.updateTabIndex(previousTab, -1);
    }

    const newSeletedTab = this.tabs?.get(newSelectedIndex);
    if (newSeletedTab) {
      this.toggleSelectStyle(newSeletedTab);
      this.updateTabIndex(newSeletedTab, 0);
    }

    if (this.previousTabIndex !== -1) {
      newSeletedTab?.elem.nativeElement.focus();
    }

    this.previousTabIndex = newSelectedIndex;
    this.tabChange.emit(newSeletedTab?.value);
  }

  private updateTabIndex(tab: B2bTabComponent, index: number) {
    if (!tab) {
      return;
    }
    tab.elem.nativeElement.tabIndex = index;
  }

  private toggleSelectStyle(tab: B2bTabComponent) {
    if (!tab) {
      return;
    }
    if (!tab.elem.nativeElement.classList.contains('selected')) {
      tab.elem.nativeElement.classList.add('selected');
    } else {
      tab.elem.nativeElement.classList.remove('selected');
    }
  }

  private translateTabsToLeft() {
    const nextTabPosition = this.currentTabsPosition() + this.translationStep;
    const nextStep = this.tabsAreBelowLimit(nextTabPosition)
      ? Math.abs(this.currentTabsPosition())
      : this.translationStep;
    this.translateTabs(nextStep);
  }

  private translateTabsToRight() {
    const nextTabPosition = this.currentTabsPosition() - this.translationStep;
    const nextStep = this.tabsAreOverLimit(nextTabPosition, this.hiddenTabsWidth())
      ? this.hiddenTabsWidth() - Math.abs(this.currentTabsPosition())
      : this.translationStep;
    this.translateTabs(-nextStep);
  }

  private translateTabs(translateStep: number) {
    this.currentTabsPosition.update(position => position + translateStep);
  }

  private tabsAreBelowLimit(tabsPosition: number, lowerLimit = 0) {
    return tabsPosition >= lowerLimit;
  }

  private tabsAreOverLimit(tabsPosition: number, upperLimit: number) {
    return Math.abs(tabsPosition) >= upperLimit;
  }

  private tabsAreWiderThanContainer() {
    return this.tabsWidth > this.containerWidth;
  }
}
