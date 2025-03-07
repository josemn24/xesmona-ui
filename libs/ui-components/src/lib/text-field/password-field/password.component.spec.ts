import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bPasswordFieldComponent } from './password-field.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bPasswordFieldComponent', () => {
  let component: B2bPasswordFieldComponent;
  let fixture: ComponentFixture<B2bPasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(B2bPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display password input by default', () => {
    const inputElement = fixture.nativeElement.querySelector('input[type="password"]');
    expect(inputElement).toBeTruthy();
  });

  it('should display input type when button is clicked by first time', () => { 
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input[type="text"]');
    expect(inputElement).toBeTruthy();
  });
});
