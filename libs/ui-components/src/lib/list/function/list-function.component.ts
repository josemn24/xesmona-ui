import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-list-function]',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.scss'],
  standalone: true,
  imports: [B2bIconComponent, NgClass],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bListFunctionComponent {
  @Input() title = '';
  @Input() description = '';
}
