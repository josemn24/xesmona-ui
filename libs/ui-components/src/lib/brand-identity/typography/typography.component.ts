import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
TypographyProperty,
  typoFontFamily,
typoFontSizes,
typoFontWeight,
typoLineHeights
} from './typography';

type typographyProperty = 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight';

@Component({
  selector: 'b2b-brand-identity-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class B2bBrandTypographyComponent {
  @Input() typographyProperty: typographyProperty = 'fontFamily';

  get typographies(): TypographyProperty[] {
    switch(this.typographyProperty) {
      case 'fontFamily':
        return typoFontFamily;
      case 'fontWeight':
        return typoFontWeight;
      case 'fontSize':
        return typoFontSizes;
      case 'lineHeight':
        return typoLineHeights;
      default:
        return typoFontSizes;
    }
  }
}
