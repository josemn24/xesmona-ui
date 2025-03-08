import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-chip]',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bChipComponent {
  @Input() removable = false;
  @Input() type = 'solid';
  @Input() size = 'sm';
  @Input() selected = false;
}
