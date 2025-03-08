import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[b2b-radio-button-list]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./radio-button-list.component.scss'],
  imports: [],
  standalone: true,
})
export class B2bRadioButtonListComponent {}
