import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bChipComponent } from './chip.component';

describe('B2bChipComponent', () => {
    let component: B2bChipComponent;
    let fixture: ComponentFixture<B2bChipComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have default values', () => {
        expect(component.removable).toBeFalsy();
        expect(component.type).toBe('solid');
        expect(component.size).toBe('sm');
        expect(component.selected).toBeFalsy();
    });

    it('should set the correct values when inputs are provided', () => {
        component.removable = true;
        component.type = 'outline';
        component.size = 'lg';
        component.selected = true;

        expect(component.removable).toBeTruthy();
        expect(component.type).toBe('outline');
        expect(component.size).toBe('lg');
        expect(component.selected).toBeTruthy();
    });
});
