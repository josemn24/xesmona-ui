/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, WritableSignal, computed, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';
import { B2bDropDownInputComponent } from '../dropdown/components/dropdown-input/dropdown-input.component';
import { B2bDropDownFieldComponent } from '../dropdown/dropdown-field/dropdown-field.component';
import { B2bDropDownMenuOptionComponent } from '../dropdown/dropdown-menu/components/dropdown-menu-option/dropdown-menu-option.component';
import { B2bDropDownMenuComponent } from '../dropdown/dropdown-menu/dropdown-menu.component';
import { B2bDropDownMenuContainerComponent } from '../dropdown/dropdown-menu/components/dropdown-menu-container/dropdown-menu-container.component';
import { DropDownService } from '../dropdown/services/dropdown.service';
import { B2bDropDownContainerDirective } from '../dropdown/directive/dropdown-container.directive';
import { B2bDropdownInputBlurDirective } from '../dropdown/directive/dropdown-input-blur.directive';

@Component({
  selector: 'b2b-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    B2bIconComponent,
    B2bDropDownInputComponent,
    B2bDropDownFieldComponent,
    B2bDropDownMenuOptionComponent,
    B2bDropDownMenuComponent,
    B2bDropDownMenuContainerComponent,
    B2bDropDownContainerDirective,
    B2bDropdownInputBlurDirective
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bDropDownSelectComponent),
      multi: true,
    },
    DropDownService
  ]
})
export class B2bDropDownSelectComponent implements ControlValueAccessor {
  @Input() set selectedOption(value: any) {
    this.currentOption.set(value);
  }
  @Input() options: any[] = [];
  @Input() optionLabel = '';
  @Input() optionValue = '';
  @Input() label = '';
  @Input() placeHolder = '';
  @Input() readOnly = false;
  @Input() required = false;
  @Input() disabled = false;
  @Output() selectionChange = new EventEmitter<any>();

  currentOption: WritableSignal<any>;
  currentOptionInputValue = computed(() => this.getCurrentOptionInputValue());
  inputName: string;

  constructor() {
    this.currentOption = signal(null);
    const array = new Uint8Array(1);
    self.crypto.getRandomValues(array);
    this.inputName = `dropdown-select-${Math.floor(array[0])}`;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  getOptionLabel(option: any, optionLabel: string) {
    return option[optionLabel] || '';
  }

  isSelected(option: any) {
    if (
      this.optionValue &&
      !this.optionHasKey(this.currentOption(), this.optionValue)
    ) {
      return this.currentOption() === option[this.optionValue];
    }
    return this.currentOption() === option;
  }

  onMenuOption(item: any) {
    if (!item) return;
    this.setDropDownValue(item);
  }

  /**
   * Sets the dropdown's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.currentOption.set(value);
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

  private getCurrentOptionInputValue() {
    if (!this.currentOption()) return '';
    if (
      this.optionValue &&
      !this.optionHasKey(this.currentOption(), this.optionValue)
    ) {
      const option = this.options.find((o) => o[this.optionValue] === this.currentOption());
      return option[this.optionLabel];
    }
    return this.optionLabel
      ? this.currentOption()[this.optionLabel]
      : this.currentOption();
  }

  private setDropDownValue(value: any) {
    this.updateCurrentOption(value);
    this.onTouched();
    this.onChange(this.currentOption());
    this.selectionChange.emit(this.currentOption());
  }

  private updateCurrentOption(option: any) {
    if (
      this.optionValue &&
      !this.optionHasKey(this.currentOption(), this.optionValue)
    ) {
      this.currentOption.set(option[this.optionValue]);
      return;
    }
    this.currentOption.set(option);
  }

  private optionHasKey(option: any, optionKey: string) {
    if (this.currentOption() == null) return false;
    return Object.keys(option).some(key => key === optionKey);
  }
}
