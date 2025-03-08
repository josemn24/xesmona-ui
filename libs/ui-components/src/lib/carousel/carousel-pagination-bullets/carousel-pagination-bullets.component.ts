/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed, input, model, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'b2b-carousel-pagination-bullets',
  templateUrl: './carousel-pagination-bullets.component.html',
  styleUrls: ['./carousel-pagination-bullets.component.scss'],
  standalone: true,
})
export class B2bCarouselBulletsComponent {
  /* The number of bullets */
  bullets = input(1);

  /* The zero-based current index */
  currentIndex = model(0);

  /* List of bullets */
  bulletsList = computed(() => new Array(this.bullets()));

  /* Get list of native bullet elements */
  @ViewChildren('paginationBullet') bulletElements: QueryList<any>;

  getTabIndex(index: number) {
    return this.currentIndex() === index ? 0 : -1;
  }

  isActive(index: number) {
    return this.currentIndex() === index;
  }

  onPaginationBulletClick(index: number) {
    this.updateCurrentIndex(index);
  }

  onKeydown(event: KeyboardEvent, index: number) {
    const { key } = event;
    if (key === 'ArrowRight') {
      this.goToNextBullet(index);
    } else if (key === 'ArrowLeft') {
      this.goToPreviousBullet(index);
    } else if (key === 'Home') {
      this.updateCurrentIndex(0);
    } else if (key === 'End') {
      this.updateCurrentIndex(this.bullets() - 1);
    }
  }
  
  goToNextBullet(index: number) {
    const nextIndex = (index + 1) % this.bullets();
    this.updateCurrentIndex(nextIndex);
    this.focusBullet(nextIndex);
  }
  
  goToPreviousBullet(index: number) {
    const prevIndex = (index - 1 + this.bullets()) % this.bullets();
    this.updateCurrentIndex(prevIndex);
    this.focusBullet(prevIndex);
  }
  
  focusBullet(index: number) {
    if (this.bulletElements.get(index)) {
      (this.bulletElements.get(index).nativeElement as HTMLElement).focus();
    }
  }

  private updateCurrentIndex(index: number) {
    this.currentIndex.set(index);
  }
}
