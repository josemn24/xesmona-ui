import { Component, Input } from '@angular/core';

@Component({
  selector: 'b2b-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
  standalone: true
})
export class B2bTableContainerComponent {
  @Input() title = '';
}
