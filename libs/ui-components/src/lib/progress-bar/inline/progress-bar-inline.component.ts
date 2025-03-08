import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'b2b-progress-bar-inline',
  templateUrl: './progress-bar-inline.component.html',
  styleUrls: ['./progress-bar-inline.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bProgressBarInlineComponent {
  /**
   * The title of the progress bar
  */
  @Input() title = '';
  /**
   * The progress value of the progress bar
   */
  @Input() progress = 0;
  /**
   * The maximum value of the progress bar
  */
  @Input() max = 100;
}
