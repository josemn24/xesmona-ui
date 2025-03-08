import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[b2b-list-basic]',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.scss'],
  standalone: true,
  imports: [B2bIconComponent, NgClass],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bListBasicComponent {
  @Input() title = '';
}
