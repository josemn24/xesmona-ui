import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bInputComponent } from './input.component';
import { B2bFieldWrapperComponent } from '../field-wrapper/field-wrapper.component';
import { B2bLabelComponent } from '../../label/label.component';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';
import { NgClass } from '@angular/common';

type StoryType = B2bInputComponent & { value?: string; name?: string; label?: string; }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bInputComponent,
  title: 'Design System/Components/Atoms/Text field/Input',
  decorators: [
    moduleMetadata({
      imports: [NgClass, B2bFieldWrapperComponent, B2bLabelComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bInputComponent, B2bFieldWrapperComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Input element directly with the attribute selector. Optionally, you must import B2bFieldWrapperComponent and B2bLabelComponent if you want to add a label.
  
  **Selector**: \`input[b2b-input]\`
  **Selector for label**: \`label[b2b-label]\`
  **Selector for wrapper**: \`[b2b-field-wrapper]\``,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
  '--b2b-input-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
  '--b2b-input-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-regular)'),
  '--b2b-input-font-size': createArgType('The font size', 'var(--b2b-cta-font-size)'),
  '--b2b-input-padding-top': createArgType('The padding top', '0.5rem'),
  '--b2b-input-padding-right': createArgType('The padding right', '0.5rem'),
  '--b2b-input-padding-bottom': createArgType('The padding bottom', '0.5rem'),
  '--b2b-input-padding-left': createArgType('The padding left', '0.5rem'),
  '--b2b-input-bg-color': createArgType('The background color', 'var(--b2b-gray-scale-05)'),
  '--b2b-input-color': createArgType('The text color', 'var(--b2b-brand-blue-01)'),
  '--b2b-input-border-color': createArgType('The border color', 'var(--b2b-brand-blue-04)'),
  '--b2b-input-border-radius': createArgType('The border radius', '0.125rem'),
  '--b2b-input-border-style': createArgType('The border style', 'solid'),
  '--b2b-input-border-width': createArgType('The border width', '0.063rem'),
  '--b2b-input-width': createArgType('The input width', 'auto'),
  '--b2b-input-box-shadow': createArgType('The box shadow', null),
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;
const renderStory = (args, type = 'text', readonly = false, disabled = false, helper = false, invalid = false, required = false) => {
  const { value, name: inputName, label, ...props } = args; 
  return {
    props,
    template:
    `
      <div b2b-field-wrapper>
        <label b2b-label for="${inputName}" [ngClass]="{'b2b--required': ${required}}">
          ${label}
        </label>
        <input
          b2b-input
          type="${type}"
          id="${inputName}"
          name="${inputName}"
          value="${value}"
          [ngClass]="{'b2b--invalid': ${invalid}}"
          ${readonly ? 'readonly' : ''}
          ${disabled ? 'disabled' : ''}
        >
        @if (${helper}) {
          <b2b-helper-text [invalid]="${invalid}">Helper text</b2b-helper-text>
        }
      </div>
    `
  }; 
};

export const Default: Story = {
  args: {
    value: '',
    name: 'my-input-default',
    label: 'Label'
  },
  render: (args) => renderStory(args), 
};

export const Required: Story = {
  args: {
    value: 'Input text',
    name: 'my-input-error',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, false, true, false, true),
};

export const ReadOnly: Story = {
  args: {
    value: 'Input text',
    name: 'my-input-readonly',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', true, false, true), 
};

export const ValidationError: Story = {
  args: {
    value: 'Input text',
    name: 'my-input-error',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, false, true, true),
};

export const Disabled: Story = {
  args: {
    value: 'Input text',
    name: 'my-input-disabled',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, true), 
};

const renderWidthFullStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper class="b2b-width-full">
      <label b2b-label for="b2b-input-full-width">
        ${label}
      </label>
      <input
        b2b-input
        type="text"
        id="b2b-input-full-width"
        name="b2b-input-full-width"
      >
    </div>
    `
  }; 
};

export const WidthFull: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: Setting class="b2b-width-full" is useful for grid and flex layouts.
        Alternatively, you can use "--b2b-input-width" css variable to set an specific width.`,
      },
    },
  },
  args: {
    label: 'Label',
  },
  render: (args) => renderWidthFullStory(args)
};
