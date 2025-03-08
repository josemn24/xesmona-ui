/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, computed, forwardRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B2bBoldTextPipe } from '../pipes/bold-text.pipe';
import { B2bInputComponent } from '../text-field/input/input.component';
import { B2bIconComponent } from '../icon/icon.component';
import { B2bSearchFieldComponent } from './search-field/search-field.component';
import { B2bSearchAutoCompleteComponent } from './search-autocomplete/search-autocomplete.component';
import { B2bShowAutoCompleteDirective } from './search-autocomplete/directives/show-autocomplete.directive';
import { B2bHideAutoCompleteDirective } from './search-autocomplete/directives/hide-autocomplete.directive';
import { B2bSearchAutoCompleteContainerComponent } from './search-autocomplete/search-autocomplete-container.component';
import { B2bSearchAutoCompleteOptionComponent } from './search-autocomplete/components/search-autocomplete-option/search-autocomplete-option.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoCompleteStateService } from './search-autocomplete/services/autocomplete-state.service';
import { AutoCompleteService } from './search-autocomplete/services/autocomplete.service';

const defaultFilterFn = (searchValue: string, optionValue: string) => optionValue?.toUpperCase().startsWith(searchValue?.toUpperCase());

@Component({
  selector: 'b2b-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    B2bBoldTextPipe,
    B2bInputComponent,
    B2bIconComponent,
    B2bSearchFieldComponent,
    B2bSearchAutoCompleteComponent,
    B2bShowAutoCompleteDirective,
    B2bHideAutoCompleteDirective,
    B2bSearchAutoCompleteContainerComponent,
    B2bSearchAutoCompleteOptionComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bSearchComponent),
      multi: true,
    },
    AutoCompleteService,
    AutoCompleteStateService
  ]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bSearchComponent implements ControlValueAccessor {
  /** The list of options */
  @Input() set options(values: any[]) {
    this.suggestions.set(values);
  }

  /** The list of recent options */
  @Input() set recentOptions(values: any[]) {
    this.recentSuggestions.set(values);
  }

  /** Property name to use as the label of an option. */
  @Input() optionLabel = '';

  /** The label of the input */
  @Input() label = '';

  /** The placeholder of the input */
  @Input() placeHolder = '';

  /** Whether the input is read-only */
  @Input() readOnly = false;

  /** Whether the input is required */
  @Input() required = false;

  /** Whether the input is disabled */
  @Input() disabled = false;

  /** Function to filter the options */
  @Input() matchFn = defaultFilterFn;

  /** Label to show when there are no results */
  @Input() noResultsLabel = 'No results';

  /** Event emitted when an option is selected */
  @Output() optionSelected = new EventEmitter<any>();

  /** Event emitted when the value changes */
  @Output() valueChange = new EventEmitter<any>();
  
  searchValue = signal('');
  searchInputValue = computed(() => this.searchValue() ?? null);
  suggestions = signal<any[]>([]);
  recentSuggestions = signal<any[]>([]);
  inputName: string;

  filteredSuggestions = computed(
    () => {
      if (!this.searchValue()) {
        return this.filterSuggestions(this.searchValue(), this.recentSuggestions());
      }
      return this.filterSuggestions(this.searchValue(), this.suggestions());
    }
  );

  constructor() {
    const array = new Uint8Array(1);
    self.crypto.getRandomValues(array);
    this.inputName = `search-${Math.floor(array[0])}`;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  getOptionValue(option: any, optionLabel: string) {
    return option[optionLabel] || '';
  }

  onAutoCompleteOption(result: any) {
    if (!result) return;
    this.optionSelected.emit(result);
    const value = this.optionLabel
      ? this.getOptionValue(result, this.optionLabel)
      : result;
    this.setSearchValue(value);
  }

  onInput(event: any) {
    this.setSearchValue(event.target.value);
  }

  onClose() {
    this.setSearchValue('');
  }

  showCloseButton() {
    if (this.readOnly || this.disabled) {
      return false;
    }
    return this.searchValue()?.length > 0;
  }

  /**
   * Sets the search's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.searchValue.set(value);
  }
  
  /**
     * Saves a callback function to be invoked when the search's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
  */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the search is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
  */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Disables the search. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
  */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private filterSuggestions(value: string, suggestions: any[], ) {
    return (suggestions ?? []).filter(suggestion => this.checkMatchFn(value, suggestion, this.matchFn));
  }

  private checkMatchFn(value: string, suggestion: any, matchFn: (inputValue: string, suggestionValue: string) => boolean) {
    const suggestionValue = this.optionLabel ? suggestion[this.optionLabel] : suggestion;
    return matchFn(value, suggestionValue);
  }

  private setSearchValue(value: string) {
    this.searchValue.set(value);
    this.onTouched();
    this.onChange(this.searchValue());
    this.valueChange.emit(this.searchValue());
  }
}
