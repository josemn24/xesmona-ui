import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { B2bRadioButtonComponent } from './radio-button.component';

@Component({
    selector: 'b2b-test-radio-button-component',
    template: `
      <label b2b-label>
        <input b2b-radio-button type="radio" [name]="name" [value]="value" [attr.disabled]="disabled">{{ content }}
      </label>
    `,
    standalone: true,
    imports: [B2bRadioButtonComponent]
})
export class TestB2bRadioButtonComponent {
    @Input() content? = '';
    @Input() name = '';
    @Input() value = '';
    @Input() disabled = false;
}

describe('B2bRadioButtonComponent', () => {
    let component: TestB2bRadioButtonComponent;
    let fixture: ComponentFixture<TestB2bRadioButtonComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestB2bRadioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display text content', () => {
        component.content = 'Radio Button';
        fixture.detectChanges();
        const labelElement = fixture.debugElement.query(By.css('label[b2b-label]'));
        expect(labelElement.nativeElement.textContent).toContain('Radio Button');
    });

    it('should not be focusable when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();
        const radioButtonElement = fixture.debugElement.query(By.css('input[b2b-radio-button]'));
        // Attempt to focus the radio-button';
        try {
            radioButtonElement.nativeElement.focus();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
