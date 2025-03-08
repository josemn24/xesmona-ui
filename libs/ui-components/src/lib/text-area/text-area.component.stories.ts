import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bTextAreaComponent } from './text-area/text-area.component';
import { B2bTextAreaWrapperComponent } from './text-area-wrapper/text-area-wrapper.component';
import { B2bLabelComponent } from '../label/label.component';
import { B2bTextCounterComponent } from '../text-counter/text-counter.component';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';

type StoryType = B2bTextAreaComponent & {
  value?: string;
  name?: string;
  label?: string;
  rows?: string;
  placeholder?: string;
  required?: boolean;
};
const createArg = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bTextAreaComponent,
  title: 'Design System/Components/Atoms/Text area',
  decorators: [
    moduleMetadata({
      imports: [
        B2bTextAreaWrapperComponent,
        B2bLabelComponent,
        B2bTextCounterComponent,
        B2bHelperTextComponent,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div b2b-text-area-wrapper>${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bTextAreaComponent, B2bTextAreaWrapperComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Text area element directly with the attribute selector. Optionally, you must import B2bTextAreaWrapperComponent and B2bLabelComponent if you want to add a label.
  
  **Selector**: \`textarea[b2b-text-area]\`
  **Selector for label**: \`label[b2b-label]\`
  **Selector for wrapper**: \`[b2b-text-area-wrapper]\``,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
    '--b2b-text-area-font-family': createArg('The font family', 'var(--b2b-font-family)'),
    '--b2b-text-area-font-weight': createArg('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-text-area-font-size': createArg('The font size', 'var(--b2b-cta-font-size)'),
    '--b2b-text-area-padding-top': createArg('The padding top', '0.5rem'),
    '--b2b-text-area-padding-right': createArg('The padding right', '0.5rem'),
    '--b2b-text-area-padding-bottom': createArg('The padding bottom', '0.5rem'),
    '--b2b-text-area-padding-left': createArg('The padding left', '0.5rem'),
    '--b2b-text-area-bg-color': createArg('The background color', 'var(--b2b-gray-scale-05)'),
    '--b2b-text-area-color': createArg('The text color', '--b2b-text-area-color'),
    '--b2b-text-area-border-color': createArg('The border color', 'var(--b2b-brand-blue-04)'),
    '--b2b-text-area-border-radius': createArg('The border radius', '0.125rem'),
    '--b2b-text-area-border-style': createArg('The border style', 'solid'),
    '--b2b-text-area-border-width': createArg('The border width','0.063rem'),
    '--b2b-text-area-width': createArg('The text-area width', 'auto'),
    '--b2b-text-area-box-shadow': createArg('The box shadow', null),
  },
  args: {
    placeholder: "Placeholder",
    required: false
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;
const renderStory = (args, readonly = false, disabled = false, helper = false, invalid = false) => {
  const { value, name: inputName, label, rows, placeholder, required, ...props } = args; 
  return {
    props,
    template:
    `
      <label b2b-label [class.b2b--required]="${required}" for="${inputName}">${label}</label>
      <textarea
        b2b-text-area
        id="${inputName}"
        name="${inputName}"
        cols="30"
        rows="${rows}"
        placeholder="${placeholder}"
        [ngClass]="{'b2b--invalid': ${invalid}}"
        ${readonly ? 'readonly' : ''} ${disabled ? 'disabled' : ''}
      >${value}</textarea>
      @if (${helper}) {
        <b2b-helper-text [invalid]="${invalid}">Helper text</b2b-helper-text>
      }
    `
  }; 
};

export const Default: Story = {
  args: {
    value: '',
    name: 'my-text-area-default',
    label: 'Label',
    rows: '2'
  },
  render: (args) => renderStory(args, false, false, true), 
};

export const Required: Story = {
  args: {
    value: '',
    name: 'my-text-area-default',
    label: 'Label',
    required: true
  },
  render: (args) => renderStory(args, false, false, true), 
};

export const ReadOnly: Story = {
  args: {
    value: 'Readonly',
    name: 'my-text-area-readonly',
    label: 'Label',
    rows: '2'
  },
  render: (args) => renderStory(args, true), 
};

export const ValidationError: Story = {
  args: {
    value: '',
    name: 'my-text-area-error',
    label: 'Label',
    rows: '2'
  },
  render: (args) => renderStory(args, false, false, true, true), 
};

export const Disabled: Story = {
  args: {
    value: '',
    name: 'my-text-area-disabled',
    label: 'Label',
    rows: '2'
  },
  render: (args) => renderStory(args, false, true), 
};

export const Counter: Story = {
  args: {
    value: '',
    name: 'my-text-area-counter',
    label: 'Label',
    rows: '2'
  },
  render: (args) => {
    const { value, name: inputName, label, rows, ...props } = args; 
    return {
      props,
      template:
      `
        <label b2b-label for="${inputName}">${label}</label>
        <textarea
          #textarea
          b2b-text-area
          class="no-resize"
          id="${inputName}"
          name="${inputName}"
          cols="30"
          rows="${rows}"
        >
          ${value}
        </textarea>
        <div class="b2b-text-counter-only">
          <b2b-text-counter [value]="${value}" maxLength="100"></b2b-text-counter>
        </div>
      `
    };
  }
};

export const CounterWithHelper: Story = {
  args: {
    value: '',
    name: 'my-text-area-counter',
    label: 'Label',
    rows: '2'
  },
  render: (args) => {
    const { value, name: inputName, label, rows, ...props } = args; 
    return {
      props,
      template:
      `
        <label b2b-label for="${inputName}">${label}</label>
        <textarea
          #textarea
          b2b-text-area
          class="no-resize"
          id="${inputName}"
          name="${inputName}"
          cols="30"
          rows="${rows}"
        >
          ${value}
        </textarea>
        <div class="b2b-text-helper-counter">
          <b2b-helper-text>Helper text</b2b-helper-text>
          <b2b-text-counter [value]="${value}" maxLength="100"></b2b-text-counter>
        </div>
      `
    };
  }
};
