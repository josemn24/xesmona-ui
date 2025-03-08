import { AfterViewChecked, Component, effect, ElementRef, Input, OnDestroy } from '@angular/core';
import { OptionsMenuService } from './services/option-menu.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[b2b-options-menu],ol[b2b-options-menu]',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss'],
  standalone: true,
  providers: [OptionsMenuService]
})
export class B2bOptionsMenuComponent implements AfterViewChecked, OnDestroy {
  /**
   * Horizontal position of the menu relative to the target element
  */
  @Input() xPosition: 'before' | 'after' = 'after';

  /**
   * Vertical position of the menu relative to the target element
  */
  @Input() yPosition: 'above' | 'below' = 'below';

  /**
   * Gap between the target element and the menu
  */
  @Input() gap = 0;

  isOpen;

  private rect: DOMRect;

  private get element(): HTMLElement {
    return this.el.nativeElement;
  }

  constructor(public el: ElementRef, private optionsMenuService: OptionsMenuService) {
    effect(() => {
      this.menuStateHandler(this.optionsMenuService.menuExpanded());
    });
    this.isOpen = this.optionsMenuService.menuExpanded;
  }

  ngAfterViewChecked() {
    if (this.element.clientHeight > 0 && this.rect) {
      this.setElementPosition(this.rect, this.xPosition, this.yPosition);
    }
  }

  ngOnDestroy() {
    this.removeMenuFromBody();
  }

  open(rect: DOMRect) {
    this.rect = rect;
    this.optionsMenuService.openMenu();
  }

  close() {
    this.optionsMenuService.closeMenu();
  }

  highlightNext() {
    this.optionsMenuService.highlightNext();
  }

  highlightPrev() {
    this.optionsMenuService.highlightPrev();
  }

  private menuStateHandler(isOpen: boolean) {
    if (!isOpen) {
      this.removeMenuFromBody();
    } else {
      this.addMenuToBody();
    }
  }

  private setElementPosition(rect: DOMRect, xPosition: 'before' | 'after', yPosition: 'above' | 'below') {
    this.setElementXPosition(rect, xPosition);
    this.setElementYPosition(rect, yPosition);
  }

  private setElementXPosition(rect: DOMRect, xPosition: 'before' | 'after') {
    if (xPosition === 'before') {
      this.setElementXPositionBefore(rect);
    } else {
      this.setElementXPositionAfter(rect);
    }
  }

  private setElementYPosition(rect: DOMRect, yPosition: 'above' | 'below') {
    if (yPosition === 'above') {
      this.setElementYPositionAbove(rect);
    } else {
      this.setElementYPositionBelow(rect);
    }
  }

  private setElementXPositionBefore(rect: DOMRect) {
    if (this.element.clientWidth > rect.left) {
      this.setElementPositionLeft(rect.left);
      return
    }
    this.setElementPositionRight(window.innerWidth - rect.right);
  }

  private setElementXPositionAfter(rect: DOMRect) {
    if (this.element.clientWidth > window.innerWidth - rect.right) {
      this.setElementPositionRight(window.innerWidth - rect.right);
      return;
    }
    this.setElementPositionLeft(rect.left);
  }

  private setElementYPositionAbove(rect: DOMRect) {
    if (this.element.clientHeight > rect.top) {
      this.setElementPositionTop(this.getElementPositionTop(rect));
      return;
    }
    this.setElementPositionBottom(this.getElementPositionBottom(rect));
  }

  private setElementYPositionBelow(rect: DOMRect) {
    if (this.element.clientHeight > window.innerHeight - rect.bottom) {
      this.setElementPositionBottom(this.getElementPositionBottom(rect));
      return;
    }
    this.setElementPositionTop(this.getElementPositionTop(rect));
  }

  private getElementPositionTop(rect: DOMRect) {
    return rect.bottom + window.scrollY + this.gap;
  }

  private getElementPositionBottom(rect: DOMRect) {
    return window.innerHeight - rect.top - window.scrollY + this.gap;
  }

  private setElementPositionTop(top: number) {
    this.element.style.top = `${top}px`;
  }

  private setElementPositionBottom(bottom: number) {
    this.element.style.top = "";
    this.element.style.bottom = `${bottom}px`;
  }

  private setElementPositionLeft(left: number) {
    this.element.style.left = `${left}px`;
  }

  private setElementPositionRight(right: number) {
    this.element.style.left = "";
    this.element.style.right = `${right}px`;
  }

  private addMenuToBody() {
    document.body.appendChild(this.element);
  }

  private removeMenuFromBody() {
    if (this.element?.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
  }
}
