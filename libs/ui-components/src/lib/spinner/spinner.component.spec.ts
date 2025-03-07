import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bSpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';

describe('B2bSpinnerComponent', () => {
  let component: B2bSpinnerComponent;
  let fixture: ComponentFixture<B2bSpinnerComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display text content by default', () => {
    const spinnerElement = fixture.debugElement.query(By.css('.b2b-spinner__description'));
    expect(spinnerElement).toBeNull();
  });

  it('should display text content', () => {
    component.description = 'Lorem ipsum';
    fixture.detectChanges();
    const spinnerElement = fixture.debugElement.query(By.css('.b2b-spinner__description'));
    expect(spinnerElement.nativeElement.textContent).toContain('Lorem ipsum');
  });
});
