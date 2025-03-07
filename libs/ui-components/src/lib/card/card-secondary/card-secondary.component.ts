/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-card-secondary]',
  templateUrl: './card-secondary.component.html',
  standalone: true,
  host: {
    'class': 'b2b-card b2b-card-secondary',
    '[class.b2b-card-content-center]': 'contentAlign() === "center"',
  },
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bCardSecondaryComponent {
  /* The title of the card */
  title = input<string>('');

  /* The description of the card */
  description = input<string>('');

  /* Whether the card content should be aligned to the center */
  contentAlign = input<'center' | 'left'>('left');
}
