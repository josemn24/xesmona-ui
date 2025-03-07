import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bBreadcrumbsComponent } from './breadcrumbs.component';

describe('B2bBreadcrumbsComponent', () => {
    let component: B2bBreadcrumbsComponent;
    let fixture: ComponentFixture<B2bBreadcrumbsComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bBreadcrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the breadcrumbs template', () => {
        const element = fixture.nativeElement;
        expect(element.querySelector('.b2b-breadcrumbs')).toBeTruthy();
    });
});
