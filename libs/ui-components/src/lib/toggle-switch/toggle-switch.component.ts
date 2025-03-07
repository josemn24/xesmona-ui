/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'b2b-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bToggleSwitchComponent),
      multi: true,
    }
  ]
})
export class B2bToggleSwitchComponent implements ControlValueAccessor {
  @Input() inputId = 'b2b-toggle-switch';
  @Input() tabIndex = 0;
  @Input() disabled = false;
  @Output() valueChanged = new EventEmitter<boolean>();

  checked = false;

  getTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }

  onKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.checked = !this.checked;
      this.setCheckedValue(this.checked);
    }
  }

  onCheckedChange() {
    this.setCheckedValue(this.checked);
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  /**
   * Sets the dropdown's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.checked = value;
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

  private setCheckedValue(value: boolean) {
    this.onTouched();
    this.onChange(value);
    this.valueChanged.emit(value);
  }
}
