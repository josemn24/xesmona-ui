import { Injectable, WritableSignal, signal } from '@angular/core';
import { B2bAccordionComponent } from './accordion.component';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  private accordion: WritableSignal<{id: string, groupId: string}> = signal({id: '', groupId: ''});
  private accordions: {[groupId: string]: B2bAccordionComponent[]} = {};

  get accordionState() {
    return this.accordion;
  }

  toggleAccordion(id: string, groupId: string) {
    this.accordion.set({id, groupId});
  }

  registerAccordion(accordion: B2bAccordionComponent, groupId: string) {
    if (!this.accordions[groupId]) {
      this.accordions[groupId] = [];
    }
    this.accordions[groupId].push(accordion);
  }

  unregisterAccordion(accordion: B2bAccordionComponent, groupId: string) {
    const index = this.accordions[groupId]?.indexOf(accordion);
    if (index !== -1) {
      this.accordions[groupId].splice(index, 1);
    }
  }

  changeAccordion(current: B2bAccordionComponent, direction: 'up' | 'down', groupId: string) {
    const index = this.accordions[groupId]?.indexOf(current);
    if (index !== -1) {
      if (direction === 'up' && index > 0) {
        this.accordions[groupId][index - 1].focus();
      } else if (direction === 'down' && index < this.accordions[groupId].length - 1) {
        this.accordions[groupId][index + 1].focus();
      }
    }
  }
}
