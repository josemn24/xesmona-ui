import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bProgressBarCircularComponent } from './progress-bar-circular.component';

describe('B2bProgressBarCircularComponent', () => {
    let component: B2bProgressBarCircularComponent;
    let fixture: ComponentFixture<B2bProgressBarCircularComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bProgressBarCircularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    
    it('should have a default progress of 0', () => {
        expect(component.progress).toBe(0);
    });

    it('should update the progress when input changes', () => {
        component.progress = 50;
        fixture.detectChanges();
        expect(component.progress).toBe(50);
    });
});
