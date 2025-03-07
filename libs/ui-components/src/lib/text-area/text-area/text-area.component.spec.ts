import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bLabelComponent } from '../../label/label.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { B2bTextAreaComponent } from './text-area.component';
import { B2bTextAreaWrapperComponent } from '../text-area-wrapper/text-area-wrapper.component';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';

@Component({
  selector: 'b2b-test-text-area-component',
  template: `
    <div b2b-text-area-wrapper>
      <label b2b-label for="text-area-test">{{ labelContent }}</label>
      <textarea b2b-text-area id="text-area-test" cols="30" rows="2" [attr.required]="required" [attr.readonly]="readonly" [attr.disabled]="disabled">{{ content }}</textarea>
      @if (helperContent) {
        <b2b-helper-text>{{ helperContent }}</b2b-helper-text>
      }
    </div>
  `,
  standalone: true,
  imports: [B2bTextAreaWrapperComponent, B2bLabelComponent, B2bTextAreaComponent, B2bHelperTextComponent]
})
export class TestB2bTextAreaComponent {
  @Input() content = '';
  @Input() labelContent = '';
  @Input() helperContent = '';
  @Input() inputType = 'text';
  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;
}

describe('B2bTextAreaComponent', () => {
  let component: TestB2bTextAreaComponent;
  let fixture: ComponentFixture<TestB2bTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestB2bTextAreaComponent, B2bTextAreaComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(TestB2bTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should can modify text area content by default', () => {
    const textAreaElement = fixture.debugElement.query(By.css('textarea[b2b-text-area]'));
    const newValue = 'This is some new text';
    textAreaElement.nativeElement.value = newValue;
    expect(textAreaElement.nativeElement.value).toContain('This is some new text');
  });

  it('should not modify text area content when readonly', () => {
    component.readonly = true;
    fixture.detectChanges();
    const textAreaElement = fixture.debugElement.query(By.css('textarea[b2b-text-area]'));
    const newValue = 'This is some new text';
    textAreaElement.nativeElement.value = newValue;
    expect(textAreaElement.nativeElement.value).toContain('');
  });

  it('should not be focusable when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const textAreaElement = fixture.debugElement.query(By.css('textarea[b2b-text-area]'));
    textAreaElement.nativeElement.focus();
    expect(document.activeElement).not.toBe(textAreaElement.nativeElement);
  });
});
