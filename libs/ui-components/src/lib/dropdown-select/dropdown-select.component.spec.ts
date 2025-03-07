import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bDropDownSelectComponent } from './dropdown-select.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bDropDownSelectComponent', () => {
    let component: B2bDropDownSelectComponent;
    let fixture: ComponentFixture<B2bDropDownSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bDropDownSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set the selected option', () => {
        const option = { id: 1, name: 'Option 1' };
        component.selectedOption = option;
        expect(component.currentOption()).toEqual(option);
    });

    it('should set the options', () => {
        const options = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
            { id: 3, name: 'Option 3' }
        ];
        component.options = options;
        expect(component.options).toEqual(options);
    });

    it('should emit selectionChange event when an option is selected', () => {
        const option = { id: 1, name: 'Option 1' };
        jest.spyOn(component.selectionChange, 'emit');
        component.onMenuOption(option);
        expect(component.selectionChange.emit).toHaveBeenCalledWith(option);
    });

    it('should write value to the model', () => {
        const value = { id: 1, name: 'Option 1' };
        component.writeValue(value);
        expect(component.currentOption()).toEqual(value);
    });

    it('should set disabled state', () => {
        component.setDisabledState(true);
        expect(component.disabled).toBeTruthy();
        component.setDisabledState(false);
        expect(component.disabled).toBeFalsy();
    });
});
