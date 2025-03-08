import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bFieldBankWrapperComponent } from './field-bank-wrapper.component';
import { B2bInputComponent } from '../input/input.component';
import { B2bLabelComponent } from '../../label/label.component';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';
import { NgClass } from '@angular/common';
import { B2bFieldWrapperComponent } from '../field-wrapper';

type StoryType = B2bFieldBankWrapperComponent & { label?: string; country?: string; entity?: string; office?: string; controlDigit?: string; number?: string;}; 
const createArgType = (description, defaultValue, type) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bFieldBankWrapperComponent,
  title: 'Design System/Components/Atoms/Text field/Bank account',
  decorators: [
    moduleMetadata({
      imports: [NgClass, B2bFieldWrapperComponent, B2bInputComponent, B2bLabelComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `<div b2b-field-wrapper>${story}</div>`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bFieldBankWrapperComponent, B2bFieldWrapperComponent, B2bInputComponent, B2bLabelComponent, B2bHelperTextComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use a div as a wrapper (for the input elements) directly with the attribute selector. Optionally, you must import B2bFieldWrapperComponent and B2bLabelComponent if you want to add a label and B2bHelperTextComponent for the helper text.
  
  **Selector**: \`div[b2b-field-bank-wrapper]\`
  **Selector for input**: \`input[b2b-input]\`
  **Selector for label**: \`label[b2b-label]\`
  **Selector for helper**: \`b2b-helper-text\`
  **Selector for wrapper**: \`[b2b-field-wrapper]\``,
      },
    },
  },
  argTypes: {
    country: { control: 'text' },
    entity: { control: 'text' },
    office: { control: 'text' },
    controlDigit: { control: 'text' },
    number: { control: 'text' },
  '--b2b-field-bank-wrapper-gap': createArgType('The gap between inputs', '0.5rem', 'The gap between inputs'),
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;
const renderStory = (args, type = 'text', helper = false, invalid = false, required = false, additionalArgs = '') => {
  const { country, entity, office, controlDigit, number, label, ...props } = args; 
  return {
    props,
    template:
    `
      <label b2b-label for="country" [ngClass]="{'b2b--required': ${required}}">
        ${label}
      </label>
      <div b2b-field-bank-wrapper>
        <input b2b-input type="${type}" id="country" placeholder="ES00" value="${country || ''}" style="--b2b-input-width: 4ch" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>
        <input b2b-input type="${type}" id="entity" placeholder="0000" value="${entity || ''}" style="--b2b-input-width: 4ch" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>
        <input b2b-input type="${type}" id="office" placeholder="0000" value="${office || ''}" style="--b2b-input-width: 4ch" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>
        <input b2b-input type="${type}" id="controlDigit" placeholder="00" value="${controlDigit || ''}" style="--b2b-input-width: 2ch" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>
        <input b2b-input type="${type}" id="number" placeholder="0000000000" value="${number || ''}" style="--b2b-input-width: 10ch" [ngClass]="{'b2b--invalid': ${invalid}}" ${additionalArgs}>
      </div>
      @if (${helper}) {
        <b2b-helper-text [invalid]="${invalid}">Helper text</b2b-helper-text>
      }
    `
  }; 
};

export const Default: Story = {
  args: {
    label: 'Label'
  },
  render: (args) => renderStory(args), 
};

export const Filled: Story = {
  args: {
    country: 'ES12',
    entity: '1234',
    office: '5678',
    controlDigit: '90',
    number: '1234567890',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, false, true), 
};

export const ReadOnly: Story = {
  args: {
    country: 'ES12',
    entity: '1234',
    office: '5678',
    controlDigit: '90',
    number: '1234567890',
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, false, false, 'readonly'), 
};

export const ValidationError: Story = {
  args: {
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', true, true),
};

export const Disabled: Story = {
  args: {
    label: 'Label'
  },
  render: (args) => renderStory(args, 'text', false, false, false, 'disabled'), 
};
