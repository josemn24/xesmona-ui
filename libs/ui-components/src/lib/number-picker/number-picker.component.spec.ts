/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bNumberPickerComponent } from './number-picker.component';
import { By } from '@angular/platform-browser';

describe('B2bNumberPickerComponent', () => {
    let component: B2bNumberPickerComponent;
    let fixture: ComponentFixture<B2bNumberPickerComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bNumberPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should increment the value', () => {
        component.value.set('1');
        fixture.detectChanges();
        component.increment();
        expect(component.value()).toBe('2');
    });

    it('should decrement the value', () => {
        component.value.set('2');
        fixture.detectChanges();
        component.decrement();
        expect(component.value()).toBe('1');
    });

    it('should set disabled state', () => {
        component.setDisabledState(true);
        expect(component.disabled()).toBe(true);
    });

    it('should write value', () => {
        component.writeValue('10');
        expect(component.value()).toBe('10');
    });

    it('should register onChange', () => {
        const fn = () => {};
        component.registerOnChange(fn);
        expect(component['onChange']).toBe(fn);
    });

    it('should register onTouched', () => {
        const fn = () => {};
        component.registerOnTouched(fn);
        expect(component['onTouched']).toBe(fn);
    });

    it('should update value on input event', () => {
        const inputElement = fixture.debugElement.query(By.css('input[b2b-input]')).nativeElement;
        inputElement.value = '15';
        inputElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(component.value()).toBe('15');
    });
});
