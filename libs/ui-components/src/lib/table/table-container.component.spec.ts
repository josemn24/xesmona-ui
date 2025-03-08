import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bTableContainerComponent } from './table-container.component';

describe('B2bTableContainerComponent', () => {
    let component: B2bTableContainerComponent;
    let fixture: ComponentFixture<B2bTableContainerComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bTableContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have an input property "title"', () => {
        expect(component.title).toBe('');
        component.title = 'Test Title';
        expect(component.title).toBe('Test Title');
    });

    it('should render the title in the template', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        const titleElement = fixture.nativeElement.querySelector('.b2b-table-container-title');
        expect(titleElement.textContent).toContain('Test Title');
    });
});
