import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Color,
  customerColors,
  greyColors,
  primaryColors,
  secondaryColors,
  statesColors,
  supportColors,
  transparenciesColors
} from './colors';

type colorType = 'primary' | 'secondary' | 'grey' | 'state' | 'customer' | 'support' | 'transparency';

@Component({
  selector: 'b2b-brand-identity-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class B2bBrandColorsComponent {
  @Input() colorType: colorType = 'primary';

  get colors(): Color[] {
    switch(this.colorType) {
      case 'primary':
        return primaryColors;
      case 'secondary':
        return secondaryColors;
      case 'grey':
        return greyColors;
      case 'state':
        return statesColors;
      case 'customer':
        return customerColors;
      case 'support':
        return supportColors;
      case 'transparency':
        return transparenciesColors;
      default:
        return [];
    }
  }
}
