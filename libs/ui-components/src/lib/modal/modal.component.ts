import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  selector: 'b2b-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [NgClass, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bModalComponent {
  @Input() visible = false;
  @Input() iconState = '';
  @Input() title = 'Main title';
  @Input() description = 'Description';
  @Input() custom = false;
  @Output() closeModal = new EventEmitter();

  getVisibility(visible: boolean) {
    return visible ? 'b2b-modal' : 'b2b-modal hidden';
  }

  getIcon(iconState = 'info') {
    if (iconState === 'ok') {
      return 'icon-check';
    } else if (iconState === 'error') {
      return 'icon-delete-circle';
    } else if (iconState === 'alert'){
      return 'icon-warning';
    } else if (!iconState) {
      return 'icon-error';
    } else {
      return `icon-${iconState}`;
    }
  }

  onClose() {
    this.closeModal.emit();
  }
}
