import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  selector: 'b2b-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bFooterComponent {
  @Input() content = '';
  @Input() hasActions = false;
  @Input() hasExternalActions = false;
}
