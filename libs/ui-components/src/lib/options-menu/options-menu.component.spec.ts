import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bOptionsMenuComponent } from './options-menu.component';

describe('B2bOptionsMenuComponent', () => {
    let component: B2bOptionsMenuComponent;
    let fixture: ComponentFixture<B2bOptionsMenuComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bOptionsMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have default xPosition and yPosition values', () => {
        expect(component.xPosition).toBe('after');
        expect(component.yPosition).toBe('below');
    });

    it('should have default gap value', () => {
        expect(component.gap).toBe(0);
    });

    it('should open the menu and set the element position when calling open()', () => {
        const rect: DOMRect = { x: 0, y: 0, width: 100, height: 100 } as DOMRect;
        component.open(rect);
        expect(component.isOpen()).toBe(true);
    });

    it('should close the menu when calling close()', () => {
        component.close();
        expect(component.isOpen()).toBe(false);
    });
});
