import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bStepperComponent, Step } from './stepper-desktop/stepper.component';

describe('B2bStepperComponent', () => {
  let component: B2bStepperComponent;
  let fixture: ComponentFixture<B2bStepperComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the steps correctly', () => {
    const steps: Step[] = [
      { title: 'Step 1', subtitle: 'Subtitle 1' },
      { title: 'Step 2', subtitle: 'Subtitle 2' },
      { title: 'Step 3', subtitle: 'Subtitle 3' },
    ];

    component.steps = steps;
    fixture.detectChanges();

    expect(component.steps).toEqual(steps);
  });

  it('should set the active step correctly', () => {
    const activeStep = 1;

    component.activeStepIndex = activeStep;
    fixture.detectChanges();

    expect(component._activeStep()).toEqual(activeStep);
  });

  it('should emit activeStepIndexChange event when step index changes', () => {
    const steps: Step[] = [
      { title: 'Step 1', subtitle: 'Subtitle 1' },
      { title: 'Step 2', subtitle: 'Subtitle 2' },
      { title: 'Step 3', subtitle: 'Subtitle 3' },
    ];
    const activeStep = 1;
    const newActiveStep = 2;
    let emittedStepIndex: number | undefined;

    component.steps = steps;
    component.activeStepIndex = activeStep;
    fixture.detectChanges();

    component.activeStepIndexChange.subscribe((stepIndex) => {
      emittedStepIndex = stepIndex;
    });

    component.onStepChange(steps[newActiveStep]);
    fixture.detectChanges();

    expect(emittedStepIndex).toEqual(newActiveStep);
  });

  it('should return the correct steps state', () => {
    const steps: Step[] = [
      { title: 'Step 1', subtitle: 'Subtitle 1' },
      { title: 'Step 2', subtitle: 'Subtitle 2' },
      { title: 'Step 3', subtitle: 'Subtitle 3' },
    ];
    const activeStep = 0;
    const expectedState = 'active';

    component.steps = steps;
    component.activeStepIndex = activeStep;
    fixture.detectChanges();

    const state = component.getStepsState(steps[0]);

    expect(state).toEqual(expectedState);
  });
});
