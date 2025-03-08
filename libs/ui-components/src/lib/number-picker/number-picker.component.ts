/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed, ElementRef, forwardRef, input, model, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { B2bLabelComponent } from '../label';
import { B2bFieldIconWrapperComponent } from '../text-field/field-icon-wrapper/field-icon-wrapper.component';
import { B2bFieldWrapperComponent } from '../text-field/field-wrapper/field-wrapper.component';
import { B2bIconComponent } from '../icon/icon.component';
import { B2bInputComponent } from '../text-field/input/input.component';

@Component({
  selector: 'b2b-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss'],
  standalone: true,
  imports: [
    B2bFieldWrapperComponent,
    B2bFieldIconWrapperComponent,
    B2bLabelComponent,
    B2bIconComponent,
    B2bInputComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bNumberPickerComponent),
      multi: true,
    }
  ]
})
export class B2bNumberPickerComponent implements ControlValueAccessor {
  /* The label for the input element */
  label = input<string>('');

  /* The id of the input element */
  inputId = input<string>('');

  /* The placeholder for the input element */
  placeholder = input<string>('');

  /* Hint for form autofill feature */
  autocomplete = input<string>('');

  /* The minimum value */
  min = input<string>('');

  /* The maximum value */
  max = input<string>('');

  /* The step value */
  step = input<string>('');

  /* Whether the input is read-only */
  readOnly = input<boolean>(false);

  /* Whether the input is required */
  required = input<boolean>(false);

  /* The value of the input element */
  value = model('');

  /* Whether the input is disabled */
  disabled = model(false);

  /* Reference to the input element */
  @ViewChild('numberInput', {read: ElementRef}) inputElementRef: ElementRef<HTMLInputElement>;

  inputNumberValue = computed(() => this.value() ?? null);
  inputNumberId = computed(() => this.inputId() || this.randomName);

  private randomName: string;

  constructor() {
    const array = new Uint8Array(1);
    self.crypto.getRandomValues(array);
    this.randomName = `input-number-${Math.floor(array[0])}`;
  }

  get input(): HTMLInputElement {
    return this.inputElementRef.nativeElement;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  onInput(event: any) {
    this.setInputNumberValue(event.target.value);
    console.log(event.target.value);
  }

  increment(): void {
    this.input.stepUp();
    this.setInputNumberValue(this.input.value);
  }

  decrement(): void {
    this.input.stepDown();
    this.setInputNumberValue(this.input.value);
  }

  /**
   * Sets the password's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.value.set(value);
  }
  
  /**
   * Saves a callback function to be invoked when the password's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
  */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  
  /**
   * Saves a callback function to be invoked when the password is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
  */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  
  /**
   * Disables the password. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
  */
  setDisabledState(isDisabled: boolean) {
    this.disabled.set(isDisabled);
  }

  private setInputNumberValue(value: string) {
    this.value.set(value);
    this.onTouched();
    this.onChange(this.value());
  }
}
