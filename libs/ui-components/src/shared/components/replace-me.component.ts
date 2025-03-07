import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[replace-me]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./replace-me.component.scss'],
  standalone: true,
})
export class ReplaceMeComponent {}
