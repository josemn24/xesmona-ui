import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bBadgeComponent } from './badge.component';

describe('B2bBadgeComponent', () => {
    let component: B2bBadgeComponent;
    let fixture: ComponentFixture<B2bBadgeComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have empty content by default', () => {
        expect(component.content).toEqual('');
    });

    it('should set the content correctly', () => {
        const content = 'New Content';
        component.content = content;
        expect(component.content).toEqual(content);
    });

    it('should have disabled set to false by default', () => {
        expect(component.disabled).toBeFalsy();
    });

    it('should set disabled correctly', () => {
        component.disabled = true;
        expect(component.disabled).toBeTruthy();
    });
});
