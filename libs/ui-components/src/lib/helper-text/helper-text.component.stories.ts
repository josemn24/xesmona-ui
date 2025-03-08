import {
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bHelperTextComponent } from './helper-text.component';

type StoryType = B2bHelperTextComponent & { content?: string }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bHelperTextComponent,
  title: 'Design System/Components/Atoms/Helper text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bHelperTextComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  Selector: \`b2b-helper-text\`

  NOTE: This component is commonly used in forms to give context about a field's input, such as how the input will be used. See further in each field component.
  `,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    '--b2b-helper-text-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-helper-text-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-helper-text-font-size': createArgType('The font size', 'var(--b2b-text-caption-m-font-size)'),
    '--b2b-helper-text-color': createArgType('The text color', 'var(--b2b-brand-blue-02)'),
  },
  args: {
    content: 'Helper text',
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
      <b2b-helper-text>${content}</b2b-helper-text>
      `
    }; 
  }
};

export const Invalid: Story = {
  render: (args) => {
    const { content, ...props } = args; 
    return {
      props,
      template: `
      <b2b-helper-text [invalid]="true">${content}</b2b-helper-text>
      `
    }; 
  }
};
