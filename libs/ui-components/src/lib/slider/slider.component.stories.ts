import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bSliderComponent } from './slider.component';
import { B2bSliderFloatingValueDirective } from './slider-floating-value.directive';
import { B2bLabelComponent } from '../label';

type StoryType = B2bSliderComponent & { label: string; step: string; };
const meta: Meta<StoryType> = {
  title: 'Design System/Components/Atoms/Slider',
  component: B2bSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [B2bLabelComponent, B2bSliderFloatingValueDirective],
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bSliderComponent, B2bSliderFloatingValueDirective } from '@mapfre-tech/b2b-components';

  In order to use this component use the input[type="range"] element directly with the attribute selector.

  **Selector**: \`input[b2b-slider]\``,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Label',
    min: 0,
    max: 100,
    value: 50,
    step: 1,
  }
} as Meta;
export default meta;
type Story = StoryObj<B2bSliderComponent>;

const renderStory = (args) => {
  const { min, max, value, step, label, ...props } = args;
  const template =`
    <div b2b-slider-wrapper class="b2b-width-full">
      <label b2b-label for="slider">${label}</label>
      <input b2b-slider id="slider" type="range" min="${min}" max="${max}" value="${value}" step="${step}" />
    </div>
  `;
  return {
    props,
    template
  }; 
};

const renderStoryFloatingValue = (args) => {
  const { min, max, value, step, label, ...props } = args;
  const template =`
    <div b2b-slider-wrapper class="b2b-width-full">
      <label b2b-label for="slider">${label}</label>
      <input b2b-slider b2b-slider-floating-value id="slider" type="range" min="${min}" max="${max}" value="${value}" step="${step}" />
    </div>
  `;
  return {
    props,
    template
  }; 
};

export const Default: Story = {
  render: (args) => renderStory(args),
};


export const FloatingValue: Story = {
  parameters: {
    docs: {
      description: {
        story: 'To display the value of the slider, use the `b2b-slider-floating-value` directive.'
      },
    },
  },
  render: (args) => renderStoryFloatingValue(args),
};
