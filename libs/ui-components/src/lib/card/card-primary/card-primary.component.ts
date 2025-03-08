/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, computed, input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-card-primary]',
  templateUrl: './card-primary.component.html',
  standalone: true,
  host: {
    'class': 'b2b-card b2b-card-primary',
    '[class.b2b-card-elevated]': 'elevated()',
  },
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bCardPrimaryComponent {
  /* The image source of the card */
  imageSrc = input<string>('');

  /* The image aspect ratio of the card */
  imageAspectRatio = input<'widescreen' | 'square'>('widescreen');

  /* The title of the card */
  title = input<string>('');

  /* The description of the card */
  description = input<string>('');

  /* Whether the card has an elevated shadow */
  elevated = input<boolean>(false);

  aspectRatioClass = computed(() => `b2b-card-image-${this.imageAspectRatio()}`);
}
