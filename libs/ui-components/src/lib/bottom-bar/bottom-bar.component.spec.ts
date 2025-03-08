import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bBottomBarComponent } from './bottom-bar.component';

describe('B2bBottomBarComponent', () => {
    let component: B2bBottomBarComponent;
    let fixture: ComponentFixture<B2bBottomBarComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bBottomBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
