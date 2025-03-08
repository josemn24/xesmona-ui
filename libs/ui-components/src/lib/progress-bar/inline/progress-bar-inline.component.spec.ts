import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bProgressBarInlineComponent } from './progress-bar-inline.component';

describe('B2bProgressBarInlineComponent', () => {
    let component: B2bProgressBarInlineComponent;
    let fixture: ComponentFixture<B2bProgressBarInlineComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bProgressBarInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have default empty title', () => {
        expect(component.title).toBe('');
    });

    it('should have default progress', () => {
        expect(component.progress).toBe(0);
    });

    it('should have default max', () => {
        expect(component.max).toBe(100);
    });

    it('should update progress when input changes', () => {
        component.progress = 50;
        fixture.detectChanges();
        expect(component.progress).toBe(50);
    });
});