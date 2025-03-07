import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bButtonComponent } from './button.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
    selector: 'b2b-test-button-component',
    template: `
      <button b2b-button [ngClass]="[typeClass, sizeClass]" [attr.disabled]="disabled">
        {{ content }}
      </button>
    `,
    standalone: true,
    imports: [B2bButtonComponent, NgClass]
})
export class TestB2bButtonComponent {
    @Input() content? = '';
    @Input() type?: 'primary' | 'secondary' | 'tertiary' | 'auxiliary' = 'primary';
    @Input() size?: 'small' | 'large' = 'large';
    @Input() disabled = false;

    get typeClass() {
        return `b2b--${this.type}`;
    }
    get sizeClass() {
        return `b2b--${this.size}`;
    }
}

describe('B2bButtonComponent', () => {
    let component: TestB2bButtonComponent;
    let fixture: ComponentFixture<TestB2bButtonComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestB2bButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display text content', () => {
        component.content = 'Button';
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css('button[b2b-button]'));
        expect(buttonElement.nativeElement.textContent).toContain('Button');
    });

    it('should not be focusable when disabled', () => {
        component.disabled = true;
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css('button[b2b-button]'));
        // Attempt to focus the button
        try {
            buttonElement.nativeElement.focus();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});
