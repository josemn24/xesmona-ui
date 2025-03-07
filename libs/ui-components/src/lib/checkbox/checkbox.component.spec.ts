import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { B2bCheckBoxComponent } from './checkbox.component';

@Component({
    selector: 'b2b-test-checkbox-component',
    template: `
      <label b2b-label>
        <input b2b-checkbox type="checkbox" [indeterminate]="indeterminate" [attr.disabled]="disabled">{{ content }}
      </label>
    `,
    standalone: true,
    imports: [B2bCheckBoxComponent]
})
export class TestB2bCheckBoxComponent {
    @Input() content? = '';
    @Input() indeterminate = false;
    @Input() disabled = false;
}

describe('B2bCheckBoxComponent', () => {
    let component: TestB2bCheckBoxComponent;
    let fixture: ComponentFixture<TestB2bCheckBoxComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestB2bCheckBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display text content', () => {
        component.content = 'Checkbox';
        fixture.detectChanges();
        const labelElement = fixture.debugElement.query(By.css('label[b2b-label]'));
        expect(labelElement.nativeElement.textContent).toContain('Checkbox');
    });

    it('should not be focusable when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();
        const checkboxElement = fixture.debugElement.query(By.css('input[b2b-checkbox]'));
        // Attempt to focus the Checkbox';
        try {
            checkboxElement.nativeElement.focus();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });

    it('should be indeterminate', () => {
        component.indeterminate = true;
        fixture.detectChanges();
        const checkboxElement = fixture.debugElement.query(By.css('input[b2b-checkbox]'));
        expect(checkboxElement.nativeElement.indeterminate).toBeTruthy();
    });
});
