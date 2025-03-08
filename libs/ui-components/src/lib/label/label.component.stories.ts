import {
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bLabelComponent } from './label.component';

type StoryType = B2bLabelComponent & { content?: string }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bLabelComponent,
  title: 'Design System/Components/Atoms/Label',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Label element directly with the attribute selector.
  
  Selector: \`label[b2b-label]\`

  NOTE: This component is commonly used in forms to label the input fields. See further in each field component.
  `,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    '--b2b-label-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-label-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-label-font-size': createArgType('The font size', '0.875rem'),
    '--b2b-label-color': createArgType('The text color', 'var(--b2b-brand-blue-02)'),
  },
  args: {
    content: 'Label',
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  render: (args) => {
    const { content, ...props } = args; 
    return {
      props,
      template: `
      <label b2b-label>${content}</label>
      `
    }; 
  }
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--disabled"`'
      },
    },
  },
  render: (args) => {
    const { content, ...props } = args; 
    return {
      props,
      template: `
      <label b2b-label class="b2b--disabled">${content}</label>
      `
    }; 
  }
};
