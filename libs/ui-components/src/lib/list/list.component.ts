import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
})
export class B2bListComponent {
  @Input() size: 'sm' | 'md' = 'sm';
  @HostBinding('class.b2b-list-size-m')
  get mediumSize() { return this.size === 'md'; }
}
