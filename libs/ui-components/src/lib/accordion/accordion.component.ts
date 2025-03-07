import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild, effect, signal, computed } from '@angular/core';
import { AccordionService } from './accordion.service';
import { CommonModule } from '@angular/common';
import { B2bIconComponent } from '../icon';

@Component({
  selector: 'b2b-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [CommonModule,B2bIconComponent],
  standalone: true,
})
export class B2bAccordionComponent implements OnInit, OnDestroy {
  /** Unique identifier for the accordion */
  @Input() id: string;

  /** Title of the accordion */
  @Input() title: string;

  /** Group identifier for the accordion */
  @Input() groupId: string;

  /** Whether the accordion is expanded */
  @Input() set expanded (expanded: boolean) {
    if (expanded) {
      this.isOpen.set(true);
    }
  }

  @ViewChild('accordion') accordion: ElementRef;

  isOpen = signal(false);
  arrowIcon = computed(() => `icon-simple-${this.isOpen() ? 'arrow-up' : 'arrow-down'}`);

  constructor(private accordionService: AccordionService) {
    effect(() => {
      const { id, groupId } = this.accordionService.accordionState();
      if (id !== this.id && groupId === this.groupId) {
        this.isOpen.set(false);
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.accordionService.registerAccordion(this, this.groupId);
  }

  ngOnDestroy() {
    this.accordionService.unregisterAccordion(this, this.groupId);
  }

  toggle() {
    this.isOpen.set(!this.isOpen());
    if (this.isOpen()) {
      this.accordionService.toggleAccordion(this.id, this.groupId);
    }
  }

  focus() {
    this.accordion.nativeElement.focus();
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.accordionService.changeAccordion(this, 'up', this.groupId);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.accordionService.changeAccordion(this, 'down', this.groupId);
    }
  }
}
