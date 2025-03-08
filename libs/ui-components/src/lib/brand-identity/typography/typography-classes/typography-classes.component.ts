import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Typography,
  captionTypographies,
  ctaTypographies,
  titleTypographies
} from './typography-classes';

type typographyType = 'title' | 'caption' | 'cta';

@Component({
  selector: 'b2b-brand-identity-typography-classes',
  templateUrl: './typography-classes.component.html',
  styleUrls: ['./typography-classes.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class B2bBrandTypographyClassesComponent {

  @Input() typographyType: typographyType = 'title';

  get typographies(): Typography[] {
    switch(this.typographyType) {
      case 'title':
        return titleTypographies;
      case 'caption':
        return captionTypographies;
      case 'cta':
        return ctaTypographies;
      default:
        return [];
    }
  }

  getTypographyCSSClass(typo: Typography) {
    return `${typo.cssClass}${this.getWeightClass(typo.weight)}`;
  }

  getTypographyClass(typo: Typography) {
    const cssClass = typo.cssClass.substring(1);
    const weight = this.getWeightClass(typo.weight)?.substring(1);
    return `${weight} ${cssClass}`;
  }

  private getWeightClass(weight: 'regular' | 'medium' | 'bold') {
    if (!weight) return '';
    return `.b2b-font-weight-${weight}`;
  }
}
