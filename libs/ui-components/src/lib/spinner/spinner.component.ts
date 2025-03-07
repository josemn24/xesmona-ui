import { Component, Input } from '@angular/core';

@Component({
  selector: 'b2b-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
})
export class B2bSpinnerComponent {
  @Input() description?: string;
}
