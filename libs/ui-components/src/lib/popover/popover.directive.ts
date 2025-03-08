/* eslint-disable @typescript-eslint/no-explicit-any */
import { B2bPopOverComponent } from "./popover.component";
import { Input,Directive, TemplateRef, ComponentRef, ElementRef, HostListener, EmbeddedViewRef, OnDestroy, effect, ViewContainerRef } from '@angular/core';
import { PopOverService } from "./popover.service";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-popover]',
  standalone: true,
})
export class B2bPopOverDirective implements OnDestroy {  
  @Input() popoverTitle = '';
  @Input() popoverDescription = '';
  @Input() popoverPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() popoverColor: 'light' | 'dark' = 'dark';
  @Input() popoverContent: string | TemplateRef<any> = '';

  private componentRef: ComponentRef<any> | null;
  private mouseOnComponentRef = false;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private popOverService: PopOverService,
  ) {
    effect(() => {
      if (!this.popOverService.mouseOnPopOver()) {
        this.destroyIfNotInPopOver();
      }
    });
  }

  @HostListener('document:scroll', ['$event'])
  onViewportScroll() {
    this.destroy();
  }

  @HostListener('focus', ['$event'])
  onFocus() {
    this.showPopOver();
  }

  @HostListener("focusout", ["$event"]) 
  onBlur() { 
    this.destroyIfNotInPopOver();
  } 

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.mouseOnComponentRef = true;
    this.elementRef.nativeElement.focus();
    if (!this.elementHasFocus()) {
      this.showPopOver();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseOnComponentRef = false;
    if (!this.elementHasFocus()) {
      this.destroyIfNotInPopOver();
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

  ngOnDestroy() {
    this.destroy();
  }

  private destroyIfNotInPopOver() {
    setTimeout(() => {
      if (!this.mouseOnComponentRef && !this.popOverService.mouseOnPopOver()) {
        this.destroy();
      }
    }, 100);
  }

  private destroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private showPopOver() {
    if (!this.componentRef) {
      const component = this.viewContainerRef.createComponent(B2bPopOverComponent);
      this.componentRef = component;
    }
    if (this.componentRef) {
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setPopoverComponentProperties();
      this.componentRef.instance.visible = true;
    }
  }

  private setPopoverComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.popoverContent = this.popoverContent;
      this.componentRef.instance.popoverPosition = this.popoverPosition;
      this.componentRef.instance.popoverColor = this.popoverColor;
      
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      domElem.style.position = 'fixed';
      domElem.style.zIndex = '100';
      domElem.setAttribute('popoverPosition', this.popoverPosition);
      domElem.setAttribute('popoverColor', this.popoverColor);

      setTimeout(() => {
        this.setPopOverPosition(domElem, this.elementRef.nativeElement.getBoundingClientRect());
      }, 0);
    }
  }

  private setPopOverPosition(domElem: HTMLElement, boundingClientRect: {left: number, top: number, width: number, height: number}) {
    const { left, top, width, height } = boundingClientRect;

    this.setPopOverToAvailablePosition(domElem, left, top, width, height);

    if (this.componentRef !== null) {
      this.componentRef.instance.popoverPosition = this.popoverPosition;
    }
    domElem.setAttribute('popoverPosition', this.popoverPosition);

    this.adjustPopOverPosition(domElem, left, top, width, height);
  }

  private setPopOverToAvailablePosition(domElem: HTMLElement, left: number, top: number, width: number, height: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    switch (this.popoverPosition) {
      case 'top':
        if (top - domElem.offsetHeight < 0) {
          this.popoverPosition = 'bottom';
        }
        break;
      case 'bottom':
        if (top + height + domElem.offsetHeight > viewportHeight) {
          this.popoverPosition = 'top';
        }
        break;
      case 'left':
        if (left - domElem.offsetWidth < 0) {
          this.popoverPosition = 'right';
        }
        break;
      case 'right':
        if (left + width + domElem.offsetWidth > viewportWidth) {
          this.popoverPosition = 'left';
        }
        break;
    }
  }

  private adjustPopOverPosition(domElem: HTMLElement, left: number, top: number, width: number, height: number) {
    switch (this.popoverPosition) {
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
