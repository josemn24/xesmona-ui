import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { B2bIconComponent } from '../icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-helper-text',
  templateUrl: './helper-text.component.html',
  styleUrls: ['./helper-text.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent],
})
export class B2bHelperTextComponent {
  @Input() invalid = false;
}
