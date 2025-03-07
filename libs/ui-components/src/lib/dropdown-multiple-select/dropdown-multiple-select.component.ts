/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, WritableSignal, computed, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';
import { B2bDropDownInputComponent } from '../dropdown/components/dropdown-input/dropdown-input.component';
import { DropDownService } from '../dropdown/services/dropdown.service';
import { B2bDropDownMultipleMenuOptionComponent } from '../dropdown/dropdown-multiple-menu/components/dropdown-multiple-menu-option/dropdown-multiple-menu-option.component';
import { B2bDropDownMultipleMenuComponent } from '../dropdown/dropdown-multiple-menu/dropdown-multiple-menu.component';
import { B2bDropDownMultipleMenuContainerComponent } from '../dropdown/dropdown-multiple-menu/components/dropdown-multiple-menu-container/dropdown-multiple-menu-container.component';
import { B2bDropDownFieldComponent } from '../dropdown/dropdown-field/dropdown-field.component';
import { B2bDropDownContainerDirective } from '../dropdown/directive/dropdown-container.directive';

@Component({
  selector: 'b2b-dropdown-multiple-select',
  templateUrl: './dropdown-multiple-select.component.html',
  styleUrls: ['./dropdown-multiple-select.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    B2bIconComponent,
    B2bDropDownInputComponent,
    B2bDropDownFieldComponent,
    B2bDropDownMultipleMenuOptionComponent,
    B2bDropDownMultipleMenuComponent,
    B2bDropDownMultipleMenuContainerComponent,
    B2bDropDownContainerDirective
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bDropDownMultipleSelectComponent),
      multi: true,
    },
    DropDownService
  ]
})
export class B2bDropDownMultipleSelectComponent implements ControlValueAccessor {
  @Input() set selectedOptions(values: any[]) {
    this.currentOptions.set(values);
  }
  @Input() options: any[] = [];
  @Input() optionLabel = '';
  @Input() optionValue = '';
  @Input() label = '';
  @Input() placeHolder = '';
  @Input() readOnly = false;
  @Input() required = false;
  @Input() disabled = false;
  @Output() selectionChange = new EventEmitter<any[]>();

  currentOptions: WritableSignal<any[]>;
  dropDownInputValue = computed(() => this.getSelectedOptionsInputValue());
  inputName: string;

  constructor() {
    this.currentOptions = signal<any[]>([]);
    const array = new Uint8Array(1);
    self.crypto.getRandomValues(array);
    this.inputName = `dropdown-select-${Math.floor(array[0])}`;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  getOptionValue(option: any, optionLabel: string) {
    return option[optionLabel] || '';
  }

  isSelected(option: any) {
    if (
      this.optionValue &&
      !this.optionsHaveKey(this.currentOptions(), this.optionValue)
    ) {
      return (this.currentOptions() ?? []).includes(option[this.optionValue]);
    }
    return (this.currentOptions() ?? []).includes(option);
  }

  onDropDownOption(option: any) {
    if (!option) return;
    this.setDropDownValue(option);
  }

  /**
   * Sets the dropdown's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.currentOptions.set(value);
  }

  /**
   * Saves a callback function to be invoked when the dropdown's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
  */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the dropdown is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
  */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Disables the dropdown. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
  */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private getSelectedOptionsInputValue() {
    if (!this.currentOptions()?.length) return '';
    if (
      this.optionValue &&
      !this.optionsHaveKey(this.currentOptions(), this.optionValue)
    ) {
      const options = this.options.filter((o) => (this.currentOptions() ?? []).includes(o[this.optionValue]));
      return (options ?? []).map((option) => option[this.optionLabel]).join(', ');
    }
    return this.optionLabel
      ? (this.currentOptions() ?? []).map((option) => option[this.optionLabel]).join(', ')
      : (this.currentOptions() ?? []).join(', ');
  }

  private setDropDownValue(option: any) {
    this.toggleOption(option);
    this.onTouched();
    this.onChange(this.currentOptions());
    this.selectionChange.emit(this.currentOptions());
  }

  private toggleOption(option: any) {
    if (this.isSelected(option)) {
      this.removeSelectedOption(option);
    } else {
      this.addSelectedOption(option);
    }
  }

  private addSelectedOption(option: any) {
    const options = this.currentOptions() ?? [];

    if (
      this.optionValue &&
      !this.optionsHaveKey(options, this.optionValue)
    ) {
      this.currentOptions.set([...options, option[this.optionValue]]);
      return;
    }
    this.currentOptions.set([...options, option]);
  }

  private removeSelectedOption(option: any) {
    const options = this.currentOptions() ?? [];

    this.currentOptions.set(options.filter((o) => {
        if (
          this.optionValue &&
          !this.optionsHaveKey(options, this.optionValue)
        ) {
          return o !== option[this.optionValue];
        }
        return o !== option;
      }
    ));
  }

  private optionsHaveKey(options: any[], optionKey: string) {
    if (!options?.length) {
      return false;
    }
    return Object.keys(options[0])?.some(key => key === optionKey);
  }
}
