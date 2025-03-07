import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bDatePickerRangeInputComponent } from './date-picker-range-input.component';
import { B2bInputComponent } from '../../text-field/input/input.component';

type StoryType = B2bDatePickerRangeInputComponent;

const meta: Meta<StoryType> = {
  component: B2bDatePickerRangeInputComponent,
  title: 'Design System/Components/Molecules/Date Picker/Range Input',
  decorators: [
    moduleMetadata({
      imports: [
        B2bIconComponent,
        B2bInputComponent,
        B2bDatePickerRangeInputComponent,
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bDatePickerRangeInputComponent } from '@mapfre-tech/b2b-components';

  The current library does not provide a range date picker component. To display a range date picker, you can use another library such as Angular Material.
  B2bDatePickerRangeInputComponent is an input that you can bind with the material date picker component.
  In order to use the input component for the range date picker, use the following component selector.

  **Selector**: \`b2b-date-picker-range-input\`

  NOTE: You can read our guide on integrating Angular Material and interacting with the Angular Material date picker component in [this example documentation](https://b2b-spa.mar.mapfre.com/components/date-picker).
  `,
      },
    },
  },
  args: {},
};
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: {
    inputName: 'date-picker-input',
    label: 'Label',
  },
  render: (args) => {
    const { inputName, label, ...props } = args;
    return {
      props,
      template:
      `
      <b2b-date-picker-range-input label="${label}" inputName="${inputName}" style="--b2b-input-range-width: max-content;">
        <mat-date-range-input>
          <input b2b-input matStartDate placeholder="dd/mm/yyyy" id="${inputName}" style="all: unset; width: 110px;">
          <input b2b-input matEndDate placeholder="dd/mm/yyyy" style="all: unset; width: 110px;">
        </mat-date-range-input>

        <button type="button">
          <b2b-icon name="icon-calendar"></b2b-icon>
        </button>
      </b2b-date-picker-range-input>
      `
    };
  },
};
