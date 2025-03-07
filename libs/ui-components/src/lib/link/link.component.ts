import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[b2b-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent]
})
export class B2bLinkComponent {}
