import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bFloatingButtonComponent } from './floating-button.component';

describe('B2bFloatingButtonComponent', () => {
    let component: B2bFloatingButtonComponent;
    let fixture: ComponentFixture<B2bFloatingButtonComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bFloatingButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
