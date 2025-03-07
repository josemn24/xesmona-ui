import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bRadioButtonComponent } from './radio-button.component';
import { B2bIconComponent } from '../icon';
import { B2bLabelComponent } from '../label/label.component';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';

type StoryType = B2bRadioButtonComponent & { 
  content?: string;
  required: boolean;
  name: string;
  value: any;
  helper: boolean;
  invalid: boolean;
}; 

const createArgType = (description, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: description },
  },
});

const meta: Meta<StoryType> = {
  component: B2bRadioButtonComponent,
  title: 'Design System/Components/Atoms/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [B2bLabelComponent, B2bIconComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bRadioButtonComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Radio button element directly with the attribute selector. Also, you must import B2bLabelComponent and use it as a wrapper.
  
  **Selector**: \`input[b2b-radio-button]\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The label content',
      control: 'text',
    },
    '--b2b-radio-button-bg-color': createArgType('The background color', 'var(--b2b-gray-scale-05)'),
    '--b2b-radio-button-border-color': createArgType('The border color', 'var(--b2b-brand-blue-04'),
    '--b2b-radio-button-border-radius': createArgType('The border radius', '50%'),
    '--b2b-radio-button-border-style': createArgType('The border style', 'solid'),
    '--b2b-radio-button-border-width': createArgType('The border width', '2px'),
    '--b2b-radio-button-width': createArgType('The width', '1rem'),
    '--b2b-radio-button-height': createArgType('The height', '1rem'),
  },
  args: {
    content: 'Label'
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const createRadioStory = (args, additionalArgs?: string) => {
  const { content, name, required, value, helper, invalid, ...props } = args; 
  return {
    props,
    template:
    `
        <label b2b-label [ngClass]="{'b2b--required': ${required}}">
          <input b2b-radio-button type="radio" name="${name}" value="${value}" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>${content}
        </label>
        @if (${helper}) {
          <b2b-helper-text [invalid]="${invalid}" style="display: block; margin-top: 4px; margin-left: 24px;">Helper text</b2b-helper-text>
        }
    `
  };
}

export const Default: Story = {
  args: {},
  render: (args) => createRadioStory(args)
};
export const Required: Story = {
  args: {
    required: true,
  },
  render: (args) => createRadioStory(args)
};
export const ValidationError: Story = {
  args: {
    invalid: true,
    helper: true
  },
  render: (args) => createRadioStory(args)
};
export const Disabled: Story = {
  args: {
    helper: true
  },
  render: (args) => createRadioStory(args, 'disabled')
};

