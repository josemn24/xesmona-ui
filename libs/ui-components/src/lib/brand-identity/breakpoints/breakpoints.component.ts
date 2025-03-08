import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { breakpoints } from './breakpoints';

@Component({
  selector: 'b2b-brand-identity-breakpoints',
  templateUrl: './breakpoints.component.html',
  styleUrls: ['./breakpoints.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class B2bBrandBreakpointsComponent {
  breakPoints = breakpoints;

  mapExample = `
    $breakpoints: (
      'xs': 360px,
      'sm': 480px,
      'md': 768px,
      'lg': 960px,
      'xl': 1024px,
      'xxl': 1280px,
      '3xl': 1366px,
      '4xl': 1440px,
    );
  `;

  mixinExample = `
    @include b2b-breakpoint('md') {
      ...
    }
  `;
}
