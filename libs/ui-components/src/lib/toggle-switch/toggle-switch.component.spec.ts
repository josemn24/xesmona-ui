import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bToggleSwitchComponent } from './toggle-switch.component';

describe('B2bToggleSwitchComponent', () => {
  let component: B2bToggleSwitchComponent;
  let fixture: ComponentFixture<B2bToggleSwitchComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be not checked by default', () => {
    expect(component.checked).toBe(false);
  });

  it('should change checked value when onKeyboardEvent is called', () => {
    component.onKeyboardEvent({ code: 'Space' } as KeyboardEvent);
    expect(component.checked).toBe(true);
  });

  it('should not change checked value when space key is pressed but not focused', () => {
    const event = new KeyboardEvent('keydown', {code: 'Space'});
    document.dispatchEvent(event);
    expect(component.checked).toBe(false);
  });

  it('should emit valueChanged event when change', () => {
    jest.spyOn(component.valueChanged, 'emit');
    component.onCheckedChange();
    expect(component.valueChanged.emit).toHaveBeenCalledWith(component.checked);
  });
});
