import { Component, ContentChildren, ElementRef, HostListener, Input, QueryList, effect } from '@angular/core';
import { B2bIconComponent } from '../../icon';
import { B2bDropDownComponent } from "../components/dropdown/dropdown.component";
import { DropDownService } from '../services/dropdown.service';
import { B2bDropDownInputComponent } from '../public_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  standalone: true,
  imports: [B2bIconComponent, B2bDropDownComponent]
})
export class B2bDropDownFieldComponent {
  @Input() label = '';
  @Input() inputName = '';
  @Input() required = false;

  @ContentChildren(B2bDropDownInputComponent, { read: ElementRef }) dropdownInput: QueryList<B2bDropDownInputComponent>;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      this.el.nativeElement.contains(document.activeElement)
      && event.key === 'Enter'
    ) {
      if (this.dropDownService.menuExpanded()) {
        this.updateArrow('arrow-up');
      }
    }
  }

  activeArrow = 'arrow-down';

  constructor(private el: ElementRef, private dropDownService: DropDownService) {
    effect(() => {
      if (!this.dropDownService.menuExpanded()) {
        this.updateArrow('arrow-down');
      }
    });
  }

  onClick(event: MouseEvent) {
    const isReadOnlyInput = (this.dropdownInput.first as ElementRef)?.nativeElement?.classList?.contains('read-only');
    const isDisabledInput = (this.dropdownInput.first as ElementRef)?.nativeElement?.disabled;
    if (isReadOnlyInput || isDisabledInput) {
      return;
    }
    event.stopPropagation();
    this.toggleDropDownMenu();
  }

  private toggleDropDownMenu() {
    if (this.dropDownService.menuExpanded()) {
      this.dropDownService.closeMenu();
      this.updateArrow('arrow-down');
    } else {
      this.dropDownService.openMenu();
      this.updateArrow('arrow-up');
    }
  }

  private updateArrow(arrow: string) {
    this.activeArrow = `icon-simple-${arrow}`;
  }
}
