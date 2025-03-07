import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bLinkComponent } from '../../link/link.component';

@Component({
  selector: 'b2b-notification-floating',
  templateUrl: './notification-floating.component.html',
  styleUrls: ['./notification-floating.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent, B2bLinkComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bNotificationFloatingComponent {
  @Input() visible = false;
  @Input() state = '';
  @Input() title = '';
  @Input() description = '';
  @Input() direction = 'bottom';
  @Input() closable = false;
  @Output() closeNotification = new EventEmitter();

  getVisibility(visible: boolean) {
    if (visible && !this.closable) {
      setTimeout(() => {
        this.onClose();
      }, 4000);
    }
    return visible ? `b2b-notification-floating-wrapper ${this.direction}` : `b2b-notification-floating-wrapper hidden ${this.direction}`;
  }

  getAutoClose(closable: boolean) {
    return closable ? 'b2b-notification-floating-close' : 'b2b-notification-floating-close closable';
  }

  getIcon(state = 'info') {
    if (state === 'ok') {
      return 'icon-check';
    } else {
      return `icon-${state}`;
    }
  }

  onClose() {
    this.closeNotification.emit();
  }
}
