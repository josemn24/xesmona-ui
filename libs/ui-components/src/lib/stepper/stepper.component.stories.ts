import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bStepperComponent } from './stepper-desktop/stepper.component';
import { B2bStepComponent } from './stepper-desktop/step/step.component';
import { B2bStepperMobileComponent } from './stepper-mobile/stepper-mobile.component';
import { B2bStepMobileComponent } from './stepper-mobile/step-mobile/step-mobile.component';
import { B2bStepMobileLabelComponent } from './stepper-mobile/step-mobile-label/step-mobile-label.component';

type StoryType = B2bStepperComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Stepper',
  component: B2bStepperComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bStepperComponent, B2bStepperMobileComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector. Add 'vertical' in class to show in vertical orientation. Also, you must import B2bStepperMobileComponent,  if you want to show a mobile stepper.
  
  **Selector for desktop stepper**: \`b2b-stepper\`
  **Selector for mobile stepper**: \`b2b-stepper-mobile\`
  **Note**: Set your device in mobile viewport size to see the mobile stepper.
`,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        B2bStepperComponent,
        B2bStepComponent,
        B2bStepperMobileComponent,
        B2bStepMobileComponent,
        B2bStepMobileLabelComponent,
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {
    activeStepIndex: {
      control: 'number',
      defaultValue: 0,
    },
  },
  args: {
    activeStepIndex: 1,
    orientation: 'horizontal',
    linear: false,
    steps: [
      { title: 'Step 1', subtitle: 'Subtitle 1' },
      { title: 'Step 2', subtitle: 'Subtitle 2' },
      { title: 'Step 3', subtitle: '' },
      { title: 'Step 4', subtitle: 'Subtitle 4' },
    ],
  }
} as Meta;

export default meta;
type Story = StoryObj<B2bStepperComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const desktopStory = (args) => {
  const { steps, orientation, activeStepIndex, linear, ...props } = args;
  return {
    props,
    template: `
    <b2b-stepper [linear]="${linear}" [steps]='${JSON.stringify(steps)}' [activeStepIndex]="${activeStepIndex}" orientation="${orientation}">
    </b2b-stepper>
    `
  }; 
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mobileStory = (args) => {
  const { steps, activeStepIndex, linear, ...props } = args;
  return {
    props,
    template: `
    <b2b-stepper [linear]="${linear}" [steps]='${JSON.stringify(steps)}' [activeStepIndex]="${activeStepIndex}">
    </b2b-stepper>
    <b2b-stepper-mobile [linear]="${linear}" [steps]='${JSON.stringify(steps)}' [activeStepIndex]="${activeStepIndex}">
    </b2b-stepper-mobile>
    `
  };
};

export const Horizontal: Story = {
  render: (args) => desktopStory(args), 
};

export const Linear: Story = {
  args: {
    linear: true,
  },
  render: (args) => desktopStory(args), 
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => desktopStory(args), 
};

export const Mobile: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Note**: `Set your device in mobile viewport size to see the mobile stepper`'
      },
    },
  },
  render: (args) => mobileStory(args), 
};
