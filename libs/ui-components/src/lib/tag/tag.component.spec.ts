import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bTagComponent } from '../tag/tag.component';
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'b2b-test-tag-component',
    template: `
        <b2b-tag [ngClass]="[colorClass, sizeClass]">{{ content }}</b2b-tag>
    `,
    standalone: true,
    imports: [B2bTagComponent, NgClass]
})
export class TestB2bTagComponent {
    @Input() content? = '';
    @Input() color?: 'blue' | 'green' | 'orange' | 'red' | 'grey' = 'blue';
    @Input() size?: 'small' | 'large' = 'large';

    get colorClass() {
        return `b2b--${this.color}`;
    }
    get sizeClass() {
        return `b2b--${this.size}`;
    }
}

describe('B2bTagComponent', () => {
    let component: TestB2bTagComponent;
    let fixture: ComponentFixture<TestB2bTagComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestB2bTagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display text content', () => {
        component.content = 'Lorem ipsum';
        fixture.detectChanges();
        const tagElement = fixture.debugElement.query(By.css('b2b-tag'));
        expect(tagElement.nativeElement.textContent).toContain('Lorem ipsum');
    });
});
