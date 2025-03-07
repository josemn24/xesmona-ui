import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'b2b-notification-inline',
  templateUrl: './notification-inline.component.html',
  styleUrls: ['./notification-inline.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bNotificationInlineComponent {
  @Input() visible = false;
  @Input() state = '';
  @Input() title = '';
  @Input() description? = '';
  @Input() closable: boolean;
  @Input() hasActions? = false;
  @Output() closeNotification = new EventEmitter();

  getVisibility(visible: boolean) {
    return visible ? 'b2b-notification-inline-wrapper' : 'b2b-notification-inline-wrapper hidden';
  }

  getIcon(state = 'info') {
    if (state === 'ok') {
      return 'icon-check';
    } else if (state === 'error') {
      return 'icon-delete-circle';
    } else if (state === 'alert'){
      return 'icon-warning';
    } else if (!state) {
      return 'icon-error';
    } else {
      return `icon-${state}`;
    }
  }

  onClose() {
    this.closeNotification.emit();
  }
}
