import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bModalComponent } from './modal.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bModalComponent', () => {
    let component: B2bModalComponent;
    let fixture: ComponentFixture<B2bModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set the initial values correctly', () => {
        expect(component.visible).toBeFalsy();
        expect(component.iconState).toBe('');
        expect(component.title).toBe('Main title');
        expect(component.description).toBe('Description');
        expect(component.custom).toBeFalsy();
    });

    it('should emit the closeModal event when onClose is called', () => {
        jest.spyOn(component.closeModal, 'emit');
        component.onClose();
        expect(component.closeModal.emit).toHaveBeenCalled();
    });

    it('should return the visibility value correctly', () => {
        component.visible = true;
        expect(component.getVisibility(component.visible)).toBe('b2b-modal');
        component.visible = false;
        expect(component.getVisibility(component.visible)).toBe('b2b-modal hidden');
    });

    it('should return the icon value correctly', () => {
        expect(component.getIcon('alert')).toBe('icon-warning');
        component.iconState = 'info';
        expect(component.getIcon()).toBe('icon-info');
    });
});