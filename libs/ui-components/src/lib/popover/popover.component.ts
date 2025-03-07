/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PopOverService } from './popover.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class B2bPopOverComponent implements AfterViewInit{
  @Input() popoverPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() popoverContent: string | TemplateRef<any> = '';
  
  @HostListener('mouseenter')
  onMouseEnter() {
    this.popOverService.mouseEnterPopOver();
  }
  
  @HostListener('mouseleave')
  onMouseLeave() {
    this.popOverService.mouseLeavePopOver();
  }

  @ViewChild('popoverTemplate', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  private textNode!: Text;

  constructor(private renderer: Renderer2, private popOverService: PopOverService) {}

  ngAfterViewInit(): void {
    this.updateView(this.popoverContent);
  }

  private clear(): void {
    this.viewContainerRef?.clear();
    
    if (this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }

  private updateView(content: string | TemplateRef<any>): void {
    this.clear();

    if (!content) {
      return;
    }

    if (content instanceof TemplateRef) {
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);
      const popoverBody = this.renderer.createElement('div');
      this.renderer.addClass(popoverBody, 'popover-body');
      this.renderer.appendChild(popoverBody, this.textNode);

      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, popoverBody);
    }
  }
}
