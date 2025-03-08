import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bListBasicComponent } from './list-basic.component';

describe('B2bListBasicComponent', () => {
    let component: B2bListBasicComponent;
    let fixture: ComponentFixture<B2bListBasicComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bListBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have an empty title by default', () => {
        expect(component.title).toEqual('');
    });

    it('should display the title', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        const titleElement = fixture.nativeElement.querySelector('.b2b-list-basic-header');
        expect(titleElement.textContent).toContain('Test Title');
    });
});