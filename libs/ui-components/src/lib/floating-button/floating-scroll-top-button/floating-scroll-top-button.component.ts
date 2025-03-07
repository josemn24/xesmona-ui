import { Component } from '@angular/core';
import { B2bFloatingButtonComponent } from '../floating-button.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-floating-scroll-top-button',
  templateUrl: './floating-scroll-top-button.component.html',
  styleUrls: ['./floating-scroll-top-button.component.scss'],
  standalone: true,
  imports: [B2bFloatingButtonComponent],
})
export class B2bFloatingScrollTopButtonComponent {
  onButtonClick() {
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
