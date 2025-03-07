import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bDropDownMultipleSelectComponent } from './dropdown-multiple-select.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bDropDownMultipleSelectComponent', () => {
    let component: B2bDropDownMultipleSelectComponent;
    let fixture: ComponentFixture<B2bDropDownMultipleSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bDropDownMultipleSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set selectedOptions', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        component.selectedOptions = options;
        expect(component.currentOptions()).toEqual(options);
    });

    it('should set options', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        component.options = options;
        expect(component.options).toEqual(options);
    });

    it('should emit selectionChange event', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        jest.spyOn(component.selectionChange, 'emit');
        component.onDropDownOption(options[0]);
        expect(component.selectionChange.emit).toHaveBeenCalledWith([options[0]]);
    });

    it('should write value to the model', () => {
        const values = ['Option 1', 'Option 2', 'Option 3'];
        component.writeValue(values);
        expect(component.currentOptions()).toEqual(values);
    });

    it('should set disabled state', () => {
        component.setDisabledState(true);
        expect(component.disabled).toBeTruthy();
        component.setDisabledState(false);
        expect(component.disabled).toBeFalsy();
    });
});
