import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent]
})
export class B2bTagComponent {}
