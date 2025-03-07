import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bCarouselComponent } from './carousel.component';

describe('B2bCarouselComponent', () => {
    let component: B2bCarouselComponent;
    let fixture: ComponentFixture<B2bCarouselComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize itemsPerView with default value', () => {
        expect(component.itemsPerView()).toBe(1);
    });

    it('should disable left button when on the first slide', () => {
        component.currentSlideIndex = 0;
        expect(component.isLeftButtonDisabled()).toBeTruthy();
    });

    it('should disable right button when on the last slide', () => {
        component.currentSlideIndex = component.paginationCount - 1;
        expect(component.isRightButtonDisabled()).toBeTruthy();
    });

    it('should move to the next slide on right button click', () => {
        component.currentSlideIndex = 0;
        component.paginationCount = 5;
        component.onRightButtonClick();
        expect(component.currentSlideIndex).toBe(1);
    });

    it('should move to the previous slide on left button click', () => {
        component.currentSlideIndex = 1;
        component.onLeftButtonClick();
        expect(component.currentSlideIndex).toBe(0);
    });

    it('should set carousel position correctly on touch move', () => {
        component.onTouchStart({ touches: [{ clientX: 0 }] } as unknown as TouchEvent);
        component.onTouchMove({ touches: [{ clientX: 50 }] } as unknown as TouchEvent);
        expect(component.carouselWrapper.nativeElement.style.transform).toBe('translate3d(50px, 0, 0)');
    });
});
