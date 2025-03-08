import { Component, ElementRef, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'input[b2b-checkbox]',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    standalone: true,
})
export class B2bCheckBoxComponent {
  @Input() set indeterminate(value: boolean) {
    this.elem.nativeElement.indeterminate = value || false;
  }
  
  constructor(private elem: ElementRef) {}
}
