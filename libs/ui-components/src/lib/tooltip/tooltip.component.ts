import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class B2bTooltipComponent {
  @Input() tooltip = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipColor: 'light' | 'dark' = 'dark';

  get colorClass() {
    return `b2b-tooltip-${this.tooltipColor}`;
  }
}
