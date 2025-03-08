/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  signal,
} from '@angular/core';
import { B2bStepComponent } from './step/step.component';

export interface Step {
  title: string;
  subtitle: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  imports: [NgClass, B2bStepComponent],
})
export class B2bStepperComponent {
  /** Whether the validity of previous steps should be checked or not */
  @Input() linear = false;

  /** Orientation of the stepper */
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @HostBinding('class.vertical')
  get stepperOrientation() { return this.orientation === 'vertical'; }

  /** List of steps */
  @Input() steps: Step[] = [];

  /**
   * Index of the active step
   * @default 0
   * */
  @Input() set activeStepIndex(value: number) {
    this._activeStep.set(value);
  }

  /** Event emitted when the active step has changed */
  @Output() activeStepIndexChange = new EventEmitter<number>();

  _activeStep = signal(0);

  onStepChange(step: Step) {
    if (this.linear && this.getStepsState(step) === 'inactive') {
      return;
    }
    const activeIndex = this.steps.indexOf(step);
    this._activeStep.set(activeIndex);
    this.activeStepIndexChange.emit(activeIndex);
  }

  isDisabledStep(step: any) {
    return this.linear && this.getStepsState(step) === 'inactive';
  }

  getStepsState(step: any) {
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
