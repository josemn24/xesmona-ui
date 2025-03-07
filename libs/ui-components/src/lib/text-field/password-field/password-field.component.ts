/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output, computed, forwardRef, signal } from '@angular/core';
import { B2bFieldWrapperComponent } from '../field-wrapper';
import { B2bFieldIconWrapperComponent } from '../field-icon-wrapper';
import { B2bLabelComponent } from '../../label';
import { B2bIconComponent } from '../../icon';
import { B2bInputComponent } from '../input/input.component';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  standalone: true,
  imports: [NgClass, B2bFieldWrapperComponent, B2bFieldIconWrapperComponent, B2bLabelComponent, B2bIconComponent, B2bInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bPasswordFieldComponent),
      multi: true,
    }
  ]
})
export class B2bPasswordFieldComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() inputName = '';
  @Input() placeholder = '';
  @Input() autocomplete = '';
  @Input() required = false;
  @Input() readOnly = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  passwordValue = signal('');
  passwordInputValue = computed(() => this.passwordValue() ?? null);
  passwordIsVisible = signal(false);
  inputType = computed(() => this.passwordIsVisible() ? 'text' : 'password');
  passwordIcon = computed(() => this.passwordIsVisible() ? 'icon-no-view' : 'icon-view');

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  onInput(event: any) {
    this.setPasswordValue(event.target.value);
  }

  onViewPassword() {
    this.passwordIsVisible.update(value => !value);
  }

  /**
   * Sets the password's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.passwordValue.set(value);
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
    this.disabled = isDisabled;
  }

  private setPasswordValue(value: string) {
    this.passwordValue.set(value);
    this.onTouched();
    this.onChange(this.passwordValue());
    this.valueChange.emit(this.passwordValue());
  }
}
