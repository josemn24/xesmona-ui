import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[b2b-anchor-disabled]',
  standalone: true
})
export class B2bAnchorDisabledDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @HostBinding('class') className: string;

  ngOnInit() {
    this.el.nativeElement.removeAttribute('href');
    this.className = 'b2b--disabled';
  }
}
