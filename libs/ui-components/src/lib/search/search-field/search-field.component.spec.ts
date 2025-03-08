import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bInputComponent } from '../../text-field/input/input.component';
import { B2bSearchFieldComponent } from './search-field.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'b2b-test-search-component',
  template: `
    <b2b-search-field [label]="labelContent" [inputName]="'input-test'">
      <input b2b-input [type]="inputType" id="input-test" name="input-test" [value]="content" [attr.required]="required" [attr.readonly]="readonly" [attr.disabled]="disabled">
      @if (content) {
        <button class="b2b-close-button" (click)="content =''">
          x
        </button>
      }
    </b2b-search-field>
  `,
  standalone: true,
  imports: [B2bSearchFieldComponent, B2bInputComponent]
})
export class TestB2bSearchFieldComponent {
  @Input() content = '';
  @Input() labelContent = '';
  @Input() inputType = 'text';
  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;
}

describe('B2bSearchFieldComponent', () => {
  let component: TestB2bSearchFieldComponent;
  let fixture: ComponentFixture<TestB2bSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [TestB2bSearchFieldComponent, B2bSearchFieldComponent, B2bInputComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(TestB2bSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display search icon', () => {
    const iconElement = fixture.debugElement.query(By.css('b2b-icon[name="icon-search"]'));
    expect(iconElement.nativeElement).toBeTruthy();
  });

  it('should display content', () => {
    component.content = 'Input content';
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    expect(inputElement.nativeElement.value).toContain('Input content');
  });

  it('should display label', () => {
    component.labelContent = 'Label content';
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement.nativeElement.textContent).toContain('Label content');
  });

  it('should remove input content when close button is clicked', () => {
    component.content = 'Input content';
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('button.b2b-close-button'));
    closeButton.nativeElement.click();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[b2b-input]'));
    expect(inputElement.nativeElement.value).toBe('');
  });
});
