import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-slider-floating-value]',
  standalone: true,
})
export class B2bSliderFloatingValueDirective implements OnInit {
  private spanElement: HTMLElement;

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement)?.value ?? '0';
    this.renderer.setProperty(this.spanElement, 'textContent', newValue);
    this.updateLabelPosition(newValue);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      const inputValue = this.elementRef.nativeElement.value ?? '0';
      this.createLabel(inputValue);
      this.updateLabelPosition(inputValue);
    }, 0);
  }

  private createLabel(sliderValue: string) {
    this.spanElement = this.renderer.createElement('span');
    this.renderer.addClass(this.spanElement, 'b2b-slider-floating-value');
    this.renderer.setProperty(this.spanElement, 'textContent', sliderValue);

    const parent = this.elementRef.nativeElement.parentElement;
    this.renderer.appendChild(parent, this.spanElement);
  }

  private updateLabelPosition(sliderValue: string) {
    const slider = this.elementRef.nativeElement;
    const min = Number(slider.min) || 0;
    const max = Number(slider.max) || 100;
    const value = Number(sliderValue);

    const thumbWidth = 24;
    const sliderWidth = slider.offsetWidth - thumbWidth;
    const percent = (value - min) / (max - min);
    const leftPosition = percent * sliderWidth;

    this.renderer.setStyle(this.spanElement, 'left', `${leftPosition}px`);
  }
}
