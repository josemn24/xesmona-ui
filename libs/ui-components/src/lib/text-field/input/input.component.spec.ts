import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bInputComponent } from './input.component';
import { B2bFieldWrapperComponent } from '../field-wrapper/field-wrapper.component';
import { B2bLabelComponent } from '../../label/label.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';

@Component({
  selector: 'b2b-test-input-component',
  template: `
    <div b2b-field-wrapper>
      <label b2b-label for="input-test">{{ labelContent }}</label>
      <input b2b-input [type]="inputType" id="input-test" name="input-test" [value]="content" [attr.required]="required" [attr.readonly]="readonly" [attr.disabled]="disabled">
      @if (helperContent) {
        <b2b-helper-text>{{ helperContent }}</b2b-helper-text>
      }
    </div>
  `,
  standalone: true,
  imports: [B2bFieldWrapperComponent, B2bLabelComponent, B2bInputComponent, B2bHelperTextComponent]
})
export class TestB2bInputComponent {
  @Input() content = '';
  @Input() labelContent = '';
  @Input() helperContent = '';
  @Input() inputType = 'text';
  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;
}

describe('B2bInputComponent', () => {
  let component: TestB2bInputComponent;
  let fixture: ComponentFixture<TestB2bInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestB2bInputComponent, B2bInputComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(TestB2bInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should can modify input content by default', () => {
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    const newInputValue = 'This is some new text';
    inputElement.nativeElement.value = newInputValue;
    expect(inputElement.nativeElement.value).toContain('This is some new text');
  });

  it('should not modify input content when readonly', () => {
    component.readonly = true;
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    const newInputValue = 'This is some new text';
    inputElement.nativeElement.value = newInputValue;
    expect(inputElement.nativeElement.value).toContain('');
  });

  it('should not be focusable when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    inputElement.nativeElement.focus();
    expect(document.activeElement).not.toBe(inputElement.nativeElement);
  });

  it('should be invalid when type email and invalid email', () => {
    component.inputType = 'email';
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    inputElement.nativeElement.value = 'invalid-email';
    expect(inputElement.nativeElement.validity.valid).toBe(false);
  });
});
