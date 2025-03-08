import { Component, Input, computed, input, signal } from '@angular/core';
import { B2bIconComponent } from '../icon/icon.component';

@Component({
  selector: 'b2b-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  imports: [B2bIconComponent],
  standalone: true
})
export class B2bContainerComponent {
  /** Title of the container */
  title = input<string>('');

  /** Whether the container is foldable */
  isFoldable = input<boolean>(false);

  /**
   * Whether the container is folded
   * @default true
   */
  @Input() set isFolded (folded: boolean) {
    this.containerFolded.set(folded);
  }

  containerFolded = signal(true);
  tabIndex = computed(() => this.isFoldable() ? 0 : null);
  arrowIcon = computed(() => `icon-simple-${this.containerFolded() ? 'arrow-down' : 'arrow-up'}`);

  toggleCollapse() {
    if (this.isFoldable()) {
      this.containerFolded.set(!this.containerFolded());
    }
  }

  onKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.toggleCollapse();
    }
  }
}
