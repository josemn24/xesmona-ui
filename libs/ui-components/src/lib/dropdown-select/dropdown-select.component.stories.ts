import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bDropDownSelectComponent } from './dropdown-select.component';
import { B2bFieldWrapperComponent } from '../text-field/field-wrapper';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';

const createArguments = (defaultValue, type) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<B2bDropDownSelectComponent> = {
  component: B2bDropDownSelectComponent,
  title: 'Design System/Components/Molecules/Dropdown/Dropdown Select',
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
        import { B2bDropDownSelectComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-dropdown-select\``,
      },
    },
  },
  argTypes: {
    '--b2b-dropdown-menu-max-height': createArguments('256px', 'The maximum height'),
    '--b2b-dropdown-menu-bg-color': createArguments('var(--b2b-gray-scale-05)', 'The background color'),
    '--b2b-dropdown-menu-option-font-family': createArguments('var(--b2b-font-family)', 'The font family of each option'),
    '--b2b-dropdown-menu-option-font-weight': createArguments('var(--b2b-font-weight-regular)', 'The font weight of each option'),
    '--b2b-dropdown-menu-option-font-size': createArguments('1rem', 'The font size of each option'),
    '--b2b-dropdown-menu-option-bg-color': createArguments('256px', 'The background color of each option'),
    '--b2b-dropdown-menu-option-color': createArguments('var(--b2b-brand-blue-02)', 'The color of each option'),
  },
  args: {
    placeHolder: 'Placeholder',
    label: 'Label',
    options: ['Apple', 'Banana', 'Grape', 'Pear', 'Peach', 'Strawberry'],
  }
} as Meta;
export default meta;
type Story = StoryObj<B2bDropDownSelectComponent>;

export const Default: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true,
    selectedOption: 'Banana'
  }
};

export const Readonly: Story = {
  args: {
    readOnly: true,
    selectedOption: 'Banana'
  }
};

const renderDropdownSelectError = (args) => {
  const { label, placeHolder, options, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper>
      <b2b-dropdown-select
        class="b2b--invalid"
        label="${label}"
        placeHolder="${placeHolder}"
        [options]='${JSON.stringify(options)}'
      >
      </b2b-dropdown-select>

      <b2b-helper-text [invalid]="true">Helper text</b2b-helper-text>
    </div>
    `
  }; 
};

export const ValidationError: Story = {
  args: {
    placeHolder: 'Placeholder'
  },
  render: (args) => renderDropdownSelectError(args)
};

export const Disabled: Story = {
  args: { disabled: true }
};

const renderDropdownSelectWidthFullStory = (args) => {
  const { label, placeHolder, options, ...props } = args; 
  return {
    props,
    template: `
    <b2b-dropdown-select
      class="b2b-width-full"
      label="${label}"
      placeHolder="${placeHolder}"
      [options]='${JSON.stringify(options)}'
    >
    </b2b-dropdown-select>
    `
  }; 
};

export const WidthFull: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: Setting class="b2b-width-full" is useful for grid and flex layouts.
        Alternatively, you can use "--b2b-dropdown-input-width" css variable to set an specific width.`,
      },
    },
  },
  args: {},
  render: (args) => renderDropdownSelectWidthFullStory(args)
};

export const ObjectOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: Use "optionLabel" to specify the property of the object to be used as the option label.
        Also, optionally use "optionValue" to specify the property of the object to be used as the option value, if not specified the object itself will be used as the value.`,
      },
    },
  },
  args: {
    optionLabel: 'name',
    options: [
      { name: 'Alba', id: '978250111' },
      { name: 'Arnold', id: '256302666' },
      { name: 'Dani', id: '789359774' },
      { name: 'Hector', id: '690102789' },
      { name: 'Jules', id: '528952113' },
      { name: 'Leticia', id: '32150589111' }
    ],
  }
};
