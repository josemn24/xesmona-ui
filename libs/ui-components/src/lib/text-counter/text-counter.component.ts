import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-text-counter',
  templateUrl: './text-counter.component.html',
  styleUrls: ['./text-counter.component.scss'],
  standalone: true,
  imports: [],
})
export class B2bTextCounterComponent {
  @Input() value = '';
  @Input() maxLength = '100';

  get textCounter() {
    return `${this.value.length}/${this.maxLength}`;
  }
}
