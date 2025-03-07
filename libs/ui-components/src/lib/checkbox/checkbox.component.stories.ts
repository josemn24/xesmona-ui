import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCheckBoxComponent } from './checkbox.component';
import { B2bIconComponent } from '../icon';
import { B2bLabelComponent } from '../label/label.component';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';

type StoryType = B2bCheckBoxComponent & {
  content?: string;
  required: boolean;
  indeterminate: boolean;
  helper: boolean;
  invalid: boolean;
}; 

const createArg = (description, defaultValue) => ({
  table: {
    defaultValue: { summary: defaultValue },
    category: 'css custom properties',
    type: { summary: description },
  },
});

const meta: Meta<StoryType> = {
  component: B2bCheckBoxComponent,
  title: 'Design System/Components/Atoms/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent, B2bLabelComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCheckBoxComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the input type checkbox element directly with the attribute selector. Also, you must import B2bLabelComponent and use it as a wrapper.
  
  **Selector**: \`input[b2b-checkbox]\``,
      },
    },
  },
  args: {
    content: 'Label',
    required: false
  },
  argTypes: {
    content: {
      description: 'The label content',
      control: 'text',
    },
    '--b2b-checkbox-width': createArg('The width', '1rem'),
    '--b2b-checkbox-height': createArg('The height', '1rem'),
    '--b2b-checkbox-bg-color': createArg('The background color', 'var(--b2b-gray-scale-05)'),
    '--b2b-checkbox-border-color': createArg('The border color', 'var(--b2b-brand-blue-04'),
    '--b2b-checkbox-border-radius': createArg('The border radius', '2px'),
    '--b2b-checkbox-border-style': createArg('The border style', 'solid'),
    '--b2b-checkbox-border-width': createArg('The border width', '2px'),
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const createCheckboxStory = (args, additionalArgs?: string) => {
  const { content, required, indeterminate, helper, invalid, ...props } = args; 
  return {
    props,
    template:
    `
    <label b2b-label [ngClass]="{'b2b--required': ${required}}">
      <input b2b-checkbox type="checkbox" [indeterminate]="${indeterminate}" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>${content}
    </label>
    @if (${helper}) {
      <b2b-helper-text [invalid]="${invalid}" style="display: block; margin-top: 4px; margin-left: 24px;">Helper text</b2b-helper-text>
    }
    `
  };
}

export const Default: Story = {
  args: {},
  render: (args) => createCheckboxStory(args)
};
export const Indeterminated: Story = {
  args: {
    indeterminate: true,
  },
  render: (args) => createCheckboxStory(args)
};
export const Required: Story = {
  args: {
    required: true,
  },
  render: (args) => createCheckboxStory(args)
};
export const ValidationError: Story = {
  args: {
    invalid: true,
    helper: true
  },
  render: (args) => createCheckboxStory(args)
};
export const Disabled: Story = {
  args: {
    helper: true
  },
  render: (args) => createCheckboxStory(args, 'disabled')
};
