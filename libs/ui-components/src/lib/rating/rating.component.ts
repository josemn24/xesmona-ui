/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, forwardRef, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'b2b-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B2bRatingComponent),
      multi: true,
    }
  ]
})
export class B2bRatingComponent implements ControlValueAccessor {
  /* The name of the rating group */
  name = input<string>('');

  /* The number of stars to display */
  stars = input<number>(5);

  /* Whether the rating is read-only */
  readOnly = input<boolean>(false);

  /* The rating value */
  rate = model(0);

  /* The iterable of star ratings */
  ratings = computed(() => Array.from({ length: this.stars() }));

  radioGroupName = computed(() => this.name() || this.randomName);

  private randomName: string;

  constructor() {
    // Generate a random name for the radio group
    const array = new Uint8Array(1);
    self.crypto.getRandomValues(array);
    this.randomName = `b2b-rating-${Math.floor(array[0])}`;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched = () => {};

  /**
   * Sets the rating's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
  */
  writeValue(value: any) {
    this.rate.set(value);
  }

  /**
   * Saves a callback function to be invoked when the rating's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
  */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the rating is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
  */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Disables the rating. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
  */
  setDisabledState(isDisabled: boolean) {
    // There is no disabled state for the rating component
  }

  onRating(value: number) {
    this.setRatingValue(value);
  }

  getPointerEvents() {
    return this.readOnly() ? 'none' : 'auto';
  }

  getTabIndex() {
    return this.readOnly() ? -1 : 0;
  }

  getValue(index: number) {
    return ++index;
  }

  isChecked(index: number) {
    return this.rate() === index + 1;
  }

  isFilled(index: number) {
    return this.rate() >= index + 1;
  }

  private setRatingValue(value: number) {
    this.rate.set(++value);
    this.onChange(this.rate());
    this.onTouched();
  }
}
