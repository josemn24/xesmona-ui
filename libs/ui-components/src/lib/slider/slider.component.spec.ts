import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bSliderComponent } from './slider.component';
import { ElementRef } from '@angular/core';

describe('B2bSliderComponent', () => {
  let component: B2bSliderComponent;
  let fixture: ComponentFixture<B2bSliderComponent>;
  let elementRef: ElementRef;

  beforeEach(async () => {
    elementRef = new ElementRef(document.createElement('input'));
    await TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: elementRef }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value on input event', () => {
    const inputEvent = new Event('input');
    Object.defineProperty(inputEvent, 'target', { value: { value: '75' } });
    component.onInput(inputEvent);
    expect(component['value']).toBe('75');
  });

  it('should calculate progress value correctly', () => {
    elementRef.nativeElement.min = '0';
    elementRef.nativeElement.max = '100';
    component['value'] = '50';
    const progressValue = component['getProgressValue']();
    expect(progressValue).toBe(50);
  });

  it('should set background style correctly', () => {
    component['value'] = '50';
    const background = component.background;
    expect(background).toBe('linear-gradient(to right, var(--b2b-brand-blue-02) 50%, var(--b2b-gray-scale-05) 50%)');
  });
});
