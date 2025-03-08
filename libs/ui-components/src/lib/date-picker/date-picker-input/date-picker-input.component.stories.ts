import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bDatePickerInputComponent } from './date-picker-input.component';
import { B2bInputComponent } from '../../text-field/input/input.component';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';
import { B2bFieldWrapperComponent } from '../../text-field/field-wrapper';

type StoryType = B2bDatePickerInputComponent & { content?: string; }; 

const meta: Meta<StoryType> = {
  component: B2bDatePickerInputComponent,
  title: 'Design System/Components/Molecules/Date Picker/Input',
  decorators: [
    moduleMetadata({
      imports: [
        B2bInputComponent,
        B2bIconComponent,
        B2bDatePickerInputComponent,
        B2bFieldWrapperComponent,
        B2bHelperTextComponent
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bDatePickerInputComponent } from '@mapfre-tech/b2b-components';

  The current library does not provide a date picker component. To display a date picker, you can use another library such as Angular Material.
  B2bDatePickerInputComponent is an input that you can bind with the material date picker component.
  In order to use the input component for the date picker, use the following component selector.
  
  **Selector**: \`b2b-date-picker-input\`

  NOTE: You can read our guide on integrating Angular Material and interacting with the Angular Material date picker component in [this example documentation](https://b2b-spa.mar.mapfre.com/components/date-picker).
  `,
      },
    },
  },
  args: {},
  argTypes: {
    content: {
      control: 'text',
    }, 
  },
};
export default meta;
type Story = StoryObj<StoryType>;

function createDatePickerStory(content: string, inputName: string, label: string, required: boolean, additionalAttributes: string): Story {
  return {
    args: {
      label,
      content,
      inputName
    },
    render: (args) => {
      const { label, content, inputName, ...props } = args; 
      return {
        props,
        template:
        `
        <b2b-date-picker-input label="${label}" inputName="${inputName}" [required]="${required}">
          <input b2b-input id="${inputName}" name="${inputName}" value="${content}" placeholder="dd/mm/yyyy" ${additionalAttributes}>
          <button type="button" ${additionalAttributes}>
            <b2b-icon name="icon-calendar"></b2b-icon>
          </button>
        </b2b-date-picker-input>
        `
      };
    }, 
  };
}

export const Default: Story = createDatePickerStory('', 'date-picker-input', 'Label', false, '');
export const Required: Story = createDatePickerStory('', 'date-picker-input-readonly', 'Label', true, '');
export const ReadOnly: Story = createDatePickerStory('ReadOnly', 'date-picker-input-readonly', 'Label', false, 'readonly');

const renderValidationErrorStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper>
      <b2b-date-picker-input
        label="${label}"
        inputName="date-picker-input-validation"
      >
        <input
          b2b-input
          class="b2b--invalid"
          id="date-picker-input-validation"
          name="date-picker-input-validation"
          placeholder="dd/mm/yyyy"
        />
        <button type="button">
          <b2b-icon name="icon-calendar"></b2b-icon>
        </button>
      </b2b-date-picker-input>

      <b2b-helper-text [invalid]="true">Helper text</b2b-helper-text>
    </div>
    `
  }; 
};

export const ValidationError: Story = {
  args: {
    label: 'Label',
  },
  render: (args) => renderValidationErrorStory(args)
};

export const Disabled: Story = createDatePickerStory('', 'date-picker-input-disabled', 'Label', false, 'disabled');

const renderWidthFullStory = (args) => {
  const { label, ...props } = args; 
  return {
    props,
    template: `
    <b2b-date-picker-input
      class="b2b-width-full"
      label="${label}"
      inputName="date-picker-input-width-full"
    >
      <input
        b2b-input
        id="date-picker-input-width-full"
        name="date-picker-input-width-full"
        placeholder="dd/mm/yyyy"
      />
      <button type="button">
        <b2b-icon name="icon-calendar"></b2b-icon>
      </button>
    </b2b-date-picker-input>
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
