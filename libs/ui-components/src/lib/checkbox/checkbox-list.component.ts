import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[b2b-checkbox-list]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./checkbox-list.component.scss'],
  standalone: true,
})
export class B2bCheckBoxListComponent {}
