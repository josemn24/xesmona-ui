import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bNumberPickerComponent } from './number-picker.component';
import { B2bFieldWrapperComponent } from '../text-field/field-wrapper/field-wrapper.component';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';
import { signal } from '@angular/core';

type StoryType = B2bNumberPickerComponent; 

const meta: Meta<StoryType> = {
  component: B2bNumberPickerComponent,
  title: 'Design System/Components/Atoms/Number picker',
  decorators: [
    moduleMetadata({
      imports: [B2bFieldWrapperComponent, B2bHelperTextComponent],
    })
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bNumberPickerComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-number-picker\``,
      },
    },
  },
  argTypes: {},
  args: {
    label: signal('Number picker')(),
    placeholder: signal('Placeholder')(),
  },
};
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: {
    inputId: signal('number-picker-default')(),
  }
};

export const Required: Story = {
  args: {
    inputId: signal('number-picker-required')(),
    required: signal(true)(),
    value: signal('10')(),
  }
};

const renderValidationErrorStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper>
      <b2b-number-picker
        class="b2b--invalid"
        placeholder="Placeholder"
        label="${label}"
      ></b2b-number-picker>

      <b2b-helper-text [invalid]="true">Helper text</b2b-helper-text>
    </div>
    `
  }; 
};

export const ValidationError: Story = {
  args: {
    inputId: signal('number-picker-error')(),
  },
  render: (args) => renderValidationErrorStory(args)
};

export const Readonly: Story = {
  args: {
    inputId: signal('number-picker-readonly')(),
    required: signal(true)(),
    value: signal('10')(),
  }
};

export const Disabled: Story = {
  args: {
    inputId: signal('number-picker-disabled')(),
    required: signal(true)(),
    value: signal('10')(),
  }
};

const renderWidthFullStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <b2b-number-picker
      class="b2b-width-full"
      placeholder="Placeholder"
      label="${label}"
    ></b2b-number-picker>
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
    inputId: signal('number-picker-width-full')(),
  },
  render: (args) => renderWidthFullStory(args)
};
