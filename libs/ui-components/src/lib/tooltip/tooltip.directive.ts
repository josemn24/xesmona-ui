/* eslint-disable @typescript-eslint/no-explicit-any */
import { B2bTooltipComponent } from "./tooltip.component";
import { Input,Directive, ComponentRef, ElementRef, HostListener, EmbeddedViewRef, OnDestroy, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-tooltip]',
  standalone: true,
})
export class B2bTooltipDirective implements OnDestroy {
  @Input() tooltip = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipColor: 'light' | 'dark' = 'dark';

  private componentRef: ComponentRef<any> | null;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('document:scroll', ['$event'])
  onViewportScroll() {
    this.destroy();
  }

  @HostListener('focus', ['$event'])
  onFocus() {
    this.showTooltip();
  }

  @HostListener("focusout", ["$event"]) 
  onBlur() { 
    this.destroy();
  } 

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.elementRef.nativeElement.focus();
    if (!this.elementHasFocus()) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.elementHasFocus()) {
      this.destroy();
      return;
    }
    this.elementRef.nativeElement.blur();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.elementHasFocus()) {
      if (event.key === "Escape") {
        this.destroy();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private showTooltip() {
    if (!this.componentRef) {
      const component = this.viewContainerRef.createComponent(B2bTooltipComponent);
      this.componentRef = component;
    }
    if (this.componentRef) {
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.tooltipPosition = this.tooltipPosition;
      this.componentRef.instance.tooltipColor = this.tooltipColor;

      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      domElem.style.position = 'fixed';
      domElem.style.zIndex = '100';
      domElem.setAttribute('tooltipPosition', this.tooltipPosition);
      domElem.setAttribute('tooltipColor', this.tooltipColor);

      setTimeout(() => {
        this.setTooltipPosition(domElem, this.elementRef.nativeElement.getBoundingClientRect());
      }, 0);
    }
  }

  private setTooltipPosition(domElem: HTMLElement, boundingClientRect: {left: number, top: number, width: number, height: number}) {
    const { left, top, width, height } = boundingClientRect;

    this.setTooltipToAvailablePosition(domElem, left, top, width, height);
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltipPosition = this.tooltipPosition;
    }
    domElem.setAttribute('tooltipPosition', this.tooltipPosition);
    this.adjustTooltipPosition(domElem, left, top, width, height);
  }

  private setTooltipToAvailablePosition(domElem: HTMLElement, left: number, top: number, width: number, height: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    switch (this.tooltipPosition) {
      case 'top':
        if (top - domElem.offsetHeight < 0) {
          this.tooltipPosition = 'bottom';
        }
        break;
      case 'bottom':
        if (top + height + domElem.offsetHeight > viewportHeight) {
          this.tooltipPosition = 'top';
        }
        break;
      case 'left':
        if (left - domElem.offsetWidth < 0) {
          this.tooltipPosition = 'right';
        }
        break;
      case 'right':
        if (left + width + domElem.offsetWidth > viewportWidth) {
          this.tooltipPosition = 'left';
        }
        break;
    }
  }

  private adjustTooltipPosition(domElem: HTMLElement, left: number, top: number, width: number, height: number) {
    switch (this.tooltipPosition) {
      case 'bottom':
        domElem.style.left = `${left + width / 2 - domElem.offsetWidth / 2}px`;
        domElem.style.top = `${top + 10 + height}px`;
        break;
      case 'left':
        domElem.style.left = `${left - 10 - domElem.offsetWidth}px`;
        domElem.style.top = `${top + height / 2 - domElem.offsetHeight / 2}px`;
        break;
      case 'right':
        domElem.style.left = `${left + 10 + width}px`;
        domElem.style.top = `${top + height / 2 - domElem.offsetHeight / 2}px`;
        break;
      // case 'top':
      default:
        domElem.style.left = `${left + width / 2 - domElem.offsetWidth / 2}px`;
        domElem.style.top = `${top - 10 - domElem.offsetHeight}px`;
        break;
    }
  }

  private elementHasFocus(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
