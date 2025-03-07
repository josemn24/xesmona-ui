import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bListFunctionComponent } from './list-function.component';

describe('B2bListFunctionComponent', () => {
    let component: B2bListFunctionComponent;
    let fixture: ComponentFixture<B2bListFunctionComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bListFunctionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have empty title and description by default', () => {
        expect(component.title).toBe('');
        expect(component.description).toBe('');
    });

    it('should display the title and description correctly', () => {
        component.title = 'Test Title';
        component.description = 'Test Description';
        fixture.detectChanges();

        const titleElement = fixture.nativeElement.querySelector('.b2b-list-function-header');
        const descriptionElement = fixture.nativeElement.querySelector('.b2b-list-function-description');

        expect(titleElement.textContent).toContain('Test Title');
        expect(descriptionElement.textContent).toContain('Test Description');
    });
});
