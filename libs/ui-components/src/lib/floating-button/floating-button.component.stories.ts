import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bFloatingButtonComponent } from './floating-button.component';
import { B2bIconComponent } from '../icon';

type StoryType = B2bFloatingButtonComponent & { state: 'primary' | 'secondary' }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bFloatingButtonComponent,
  title: 'Design System/Components/Atoms/Floating Button',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bFloatingButtonComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the button element directly with the attribute selector.
  
  **Selector**: \`button[b2b-floating-button]\`
  `,
      },
    },
  },
  argTypes: {
    state: {
      defaultValue: 'primary',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    '--b2b-floating-button-padding': createArgType('The padding', '0.75rem'),
    '--b2b-floating-button-bg-color': createArgType('The background color', null),
    '--b2b-floating-button-color': createArgType('The text color', null),
    '--b2b-floating-button-border-color': createArgType('The border color', null),
    '--b2b-floating-button-border-radius': createArgType('The border radius', '50%'),
    '--b2b-floating-button-border-style': createArgType('The border style', 'solid'),
    '--b2b-floating-button-border-width': createArgType('The border width', '0'),
    '--b2b-floating-button-box-shadow': createArgType('The box shadow', '0 0.25rem 0.5rem 0 #2D373D40')
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const floatingButtonStory = (args) => {
  const { state, ...props } = args;
  const cssClass = state === 'primary' ? 'b2b--primary' : 'b2b--secondary';
  return {
    props,
    template: `
      <button b2b-floating-button class="${cssClass}">
        <b2b-icon name="icon-picture" size="lg"></b2b-icon>
      </button>
    `
  }; 
};

export const Primary: Story = {
  args: {
    state: 'primary',
  },
  render: (args) => floatingButtonStory(args), 
};

export const Secondary: Story = {
  args: {
    state: 'secondary',
  },
  render: (args) => floatingButtonStory(args), 
};
