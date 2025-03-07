import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpacingToken, spacingTokens } from './spacing';

@Component({
  selector: 'b2b-brand-identity-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class B2bBrandSpacingComponent {
  spacings: SpacingToken[] = spacingTokens;
}
