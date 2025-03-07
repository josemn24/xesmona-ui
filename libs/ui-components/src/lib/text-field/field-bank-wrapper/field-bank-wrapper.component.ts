import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[b2b-field-bank-wrapper]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./field-bank-wrapper.component.scss'],
  standalone: true,
})
export class B2bFieldBankWrapperComponent {}
