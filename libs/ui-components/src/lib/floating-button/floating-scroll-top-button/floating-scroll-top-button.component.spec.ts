import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bFloatingScrollTopButtonComponent } from './floating-scroll-top-button.component';

describe('B2bFloatingScrollTopButtonComponent', () => {
    let component: B2bFloatingScrollTopButtonComponent;
    let fixture: ComponentFixture<B2bFloatingScrollTopButtonComponent>;
    window.scrollTo = jest.fn();

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bFloatingScrollTopButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call onButtonClick when button is clicked', () => {
        const onButtonClickSpy = jest.spyOn(component, 'onButtonClick');
        const button = fixture.nativeElement.querySelector('button[b2b-floating-button]');
        button.click();
        expect(onButtonClickSpy).toHaveBeenCalled();
    });

    it('should scroll to top when onButtonClick is called', () => {
        component.onButtonClick();
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth'
        });
    });
});
