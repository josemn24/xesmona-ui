import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bPasswordFieldComponent } from './password-field.component';
import { B2bFieldWrapperComponent } from '../field-wrapper';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';

type StoryType = B2bPasswordFieldComponent & { content?: string; }; 

const meta: Meta<StoryType> = {
  component: B2bPasswordFieldComponent,
  title: 'Design System/Components/Atoms/Text field/Password',
  decorators: [
    moduleMetadata({
      imports: [B2bFieldWrapperComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bPasswordFieldComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-password-field\``,
      },
    },
  },
  argTypes: {},
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
  },
};
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: {
    inputName: 'password-default',
  }
};

export const Required: Story = {
  args: {
    inputName: 'password-required',
    required: true,
  }
};

const renderValidationErrorStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper>
      <b2b-password-field
        class="b2b--invalid"
        placeholder="Placeholder"
        label="${label}"
      ></b2b-password-field>

      <b2b-helper-text [invalid]="true">Helper text</b2b-helper-text>
    </div>
    `
  }; 
};

export const ValidationError: Story = {
  args: {
    label: 'Label',
    disabled: false
  },
  render: (args) => renderValidationErrorStory(args)
};


export const Readonly: Story = {
  args: {
    inputName: 'password-readonly',
    readOnly: true,
  }
};

export const Disabled: Story = {
  args: {
    inputName: 'password-disabled',
    disabled: true,
  }
};

const renderWidthFullStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <b2b-password-field
      class="b2b-width-full"
      placeholder="Placeholder"
      label="${label}"
    ></b2b-password-field>
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
    disabled: false
  },
  render: (args) => renderWidthFullStory(args)
};
