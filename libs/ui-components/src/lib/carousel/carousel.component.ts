/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  effect,
  ContentChildren,
  TemplateRef,
  QueryList,
  AfterContentInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { B2bCarouselBulletsComponent } from './carousel-pagination-bullets/carousel-pagination-bullets.component';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  selector: 'b2b-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, B2bIconComponent, B2bCarouselBulletsComponent],
  host: {
    '(window:resize)': 'onViewportResize()',
  },
})
export class B2bCarouselComponent implements AfterContentInit {
  /* The number of items to show per view */
  itemsPerView = input(1);

  /* Whether buttons are displayed with offset */
  buttonsOffset = input(false);

  items: any[] = [];
  responsiveItemsPerView = 1;
  paginationCount = 1;
  currentSlideIndex = 0;

  /* Items projected templates */
  @ContentChildren('carouselItem') projectedItems!: QueryList<TemplateRef<any>>;
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  private readonly mobileMaxItemsPerView = 1;
  private readonly tabletMaxItemsPerView = 3;
  private readonly desktopMaxItemsPerView = 4;

  private startX = 0;
  private currentTranslate = 0;
  private prevTranslate = 0;
  private animationID = 0;
  private isDragging = false;

  constructor() {
    effect(() => {
      this.adjustItemsPerView(this.itemsPerView());
      this.calculatePaginationCount((this.items ?? []), this.responsiveItemsPerView);
    });
  }

  ngAfterContentInit() {
    this.items = this.projectedItems?.toArray() ?? [];
    this.calculatePaginationCount((this.items ?? []), this.responsiveItemsPerView);
    this.projectedItems?.changes?.subscribe(value => {
      this.items = value.toArray();
      this.calculatePaginationCount((this.items ?? []), this.responsiveItemsPerView);
    });
  }

  getFlexStyle() {
    return `0 0 ${100 / this.responsiveItemsPerView}%`;
  }

  getTransFormStyle() {
    return `translate3d(-${this.currentSlideIndex * (100 / this.responsiveItemsPerView)}%, 0, 0)`;
  }

  isLeftButtonDisabled() {
    return this.currentSlideIndex === 0;
  }
  
  isRightButtonDisabled() {
    return this.currentSlideIndex >= this.paginationCount - 1;
  }

  onViewportResize() {
    this.adjustItemsPerView(this.itemsPerView());
  }

  onLeftButtonClick() {
    this.prevSlide();
  }

  onRightButtonClick() {
    this.nextSlide();
  }

  onTouchStart(event: TouchEvent) {
    this.startDragging(event.touches[0].clientX);
  }

  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      const currentX = event.touches[0].clientX;
      const movedBy = currentX - this.startX;
      this.currentTranslate = this.prevTranslate + movedBy;
      this.setCarouselPosition();
    }
  }

  onTouchEnd() {
    this.isDragging = false;
    cancelAnimationFrame(this.animationID);

    const movedBy = this.currentTranslate - this.prevTranslate;
    // Determine if it was a swipe action
    if (movedBy < -50 && this.currentSlideIndex < this.paginationCount - 1) {
      this.currentSlideIndex += 1;
    }

    if (movedBy > 50 && this.currentSlideIndex > 0) {
      this.currentSlideIndex -= 1;
    }

    this.setPositionByIndex();
  }

  private nextSlide() {
    if (this.currentSlideIndex < this.paginationCount - 1) {
      this.currentSlideIndex++;
    }
  }
  
  private prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  private adjustItemsPerView(itemsPerView: number) {
    this.responsiveItemsPerView = this.getResponsiveItemsPerView(itemsPerView);
    this.calculatePaginationCount((this.items ?? []), this.responsiveItemsPerView);
  }

  private calculatePaginationCount(items: any[], itemsPerView: number) {
    const newPaginationCount = items.length - itemsPerView + 1;
    if (newPaginationCount < 0) {
      return
    }
    this.paginationCount = newPaginationCount;
  }
  
  private getResponsiveItemsPerView(itemsPerView: number) {
    const width = window.innerWidth;
    if (width < 768) {
      return this.getMobileItemsPerView();
    } else if (width < 960) {
      return this.getTabletItemsPerView(itemsPerView);
    } else {
      return this.getDesktopItemsPerView(itemsPerView);
    }
  }

  private getMobileItemsPerView() {
    return this.mobileMaxItemsPerView;
  }

  private getTabletItemsPerView(currentItemsPerView: number) {
    if (currentItemsPerView > this.tabletMaxItemsPerView) {
      return this.tabletMaxItemsPerView;
    } else {
      return currentItemsPerView;
    }
  }

  private getDesktopItemsPerView(currentItemsPerView: number) {
    if (currentItemsPerView > this.desktopMaxItemsPerView) {
      return this.desktopMaxItemsPerView;
    } else {
      return currentItemsPerView;
    }
  }

  private startDragging(positionX: number) {
    this.isDragging = true;
    this.startX = positionX;
    this.animationID = requestAnimationFrame(this.animate.bind(this));
  }

  private animate() {
    this.setCarouselPosition();
    if (this.isDragging) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  private setCarouselPosition() {
    this.carouselWrapper.nativeElement.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
  }

  private setPositionByIndex() {
    this.currentTranslate = this.currentSlideIndex * -this.carouselWrapper.nativeElement.clientWidth / this.responsiveItemsPerView;
    this.prevTranslate = this.currentTranslate;
    this.setCarouselPosition();
  }
}
