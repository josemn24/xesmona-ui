import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { B2bShowAutoCompleteDirective } from './show-autocomplete.directive';
import { AutoCompleteService } from '../services/autocomplete.service';
import { AutoCompleteStateService } from '../services/autocomplete-state.service';

@Component({
    template: `
        <input type="text" b2b-auto-complete-input>
    `,
    standalone: true,
    imports: [B2bShowAutoCompleteDirective]
})
class TestB2bShowAutoCompleteComponent {}

describe('B2bShowAutoCompleteDirective', () => {
    let fixture: ComponentFixture<TestB2bShowAutoCompleteComponent>;
    let inputElement: DebugElement;
    let directive: B2bShowAutoCompleteDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestB2bShowAutoCompleteComponent, B2bShowAutoCompleteDirective],
            providers: [AutoCompleteService, AutoCompleteStateService]
        }).compileComponents();

        fixture = TestBed.createComponent(TestB2bShowAutoCompleteComponent);
        inputElement = fixture.debugElement.query(By.css('input'));
        directive = inputElement.injector.get(B2bShowAutoCompleteDirective);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should call onFocus method when input is focused', () => {
        jest.spyOn(directive, 'onFocus');
        inputElement.triggerEventHandler('focus', {});
        expect(directive.onFocus).toHaveBeenCalled();
    });
});
