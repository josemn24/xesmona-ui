import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

function getSliderProgress(min: number, max: number, value: number) {
  return ((value - min) / (max - min)) * 100;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[b2b-slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
})
export class B2bSliderComponent implements OnInit {
  @HostBinding('style.background') get background() {
    return this.getProgressBackgroud(this.getProgressValue());
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement)?.value ?? '0';
    this.setValue(newValue);
  }

  private value = '0';

  constructor(private elementRef: ElementRef) {}

  private get min(): string {
    return this.elementRef.nativeElement.min ?? '0';
  }

  private get max(): string {
    return this.elementRef.nativeElement.max ?? '100';
  }

  ngOnInit() {
    // Timeout is needed to get the value from the input element
    // Issue: ngModel integration not working without timeout
    setTimeout(() => {
      const inputValue = this.elementRef.nativeElement.value ?? '0';
      this.setValue(inputValue);
    }, 0);
  }

  private getProgressBackgroud(progress: number) {
    return `linear-gradient(to right, var(--b2b-brand-blue-02) ${progress}%, var(--b2b-gray-scale-05) ${progress}%)`;
  }

  private getProgressValue() {
    return getSliderProgress(Number(this.min), Number(this.max), Number(this.value));
  }

  private setValue(value: string) {
    this.value = value;
  }
}
