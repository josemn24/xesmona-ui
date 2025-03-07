import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bFooterComponent } from './footer.component';

describe('B2bFooterComponent', () => {
    let component: B2bFooterComponent;
    let fixture: ComponentFixture<B2bFooterComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have default values for inputs', () => {
        expect(component.content).toEqual('');
        expect(component.hasActions).toBeFalsy();
        expect(component.hasExternalActions).toBeFalsy();
    });

    it('should update content input', () => {
        const newContent = 'New content';
        component.content = newContent;
        fixture.detectChanges();
        expect(component.content).toEqual(newContent);
    });

    it('should update hasActions input', () => {
        component.hasActions = true;
        fixture.detectChanges();
        expect(component.hasActions).toBeTruthy();
    });

    it('should update hasExternalActions input', () => {
        component.hasExternalActions = true;
        fixture.detectChanges();
        expect(component.hasExternalActions).toBeTruthy();
    });
});
