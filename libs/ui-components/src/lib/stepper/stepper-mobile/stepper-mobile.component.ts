/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { B2bStepMobileComponent } from './step-mobile/step-mobile.component';
import { B2bStepMobileLabelComponent } from './step-mobile-label/step-mobile-label.component';
import { Step } from '../public_api';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
  standalone: true,
  imports: [NgClass, B2bStepMobileComponent, B2bStepMobileLabelComponent],
})
export class B2bStepperMobileComponent {
  /** Whether the validity of previous steps should be checked or not */
  @Input() linear = false;

  /** List of steps */
  @Input() steps: Step[] = [];

  /** Index of the active step */
  @Input() set activeStepIndex(value: number) {
    this._activeStep.set(value);
  }

  /** Event emitted when the active step has changed */
  @Output() activeStepIndexChange = new EventEmitter<number>();

  private _activeStep = signal(0);

  onStepChange(step: Step) {
    if (this.linear && this.getStepState(step) === 'inactive') {
      return;
    }
    const activeIndex = this.steps.indexOf(step);
    this._activeStep.set(activeIndex);
    this.activeStepIndexChange.emit(activeIndex);
  }

  getLabelTitle() {
    if (this._activeStep() < 0 || this._activeStep() >= this.steps.length) {
      return '';
    }
    return this.steps[this._activeStep()].title;
  }

  getLabelSubtitle() {
    if (this._activeStep() < 0 || this._activeStep() >= this.steps.length) {
      return '';
    }
    return this.steps[this._activeStep()].subtitle;
  }

  getStepState(step: any) {
    const stepIndex = this.steps.indexOf(step);
      if (stepIndex === this._activeStep()) {
        return 'active';
      } else if (stepIndex > this._activeStep()) {
        return 'inactive';
      } else {
        return 'filled';
      }
  }
}
