import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bDropDownMultipleSelectComponent } from './dropdown-multiple-select.component';
import { B2bFieldWrapperComponent } from '../text-field/field-wrapper';
import { B2bHelperTextComponent } from '../helper-text/helper-text.component';

const createArguments = (type, defaultValue) => ({
  table: {
    type: { summary: type },
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
  },
});

const meta: Meta<B2bDropDownMultipleSelectComponent> = {
  component: B2bDropDownMultipleSelectComponent,
  title: 'Design System/Components/Molecules/Dropdown/Dropdown MultiSelect',
  decorators: [
    moduleMetadata({
      imports: [B2bFieldWrapperComponent, B2bHelperTextComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeHolder: 'Placeholder',
    options: ['Banana', 'Grape', 'Orange', 'Pear', 'Peach', 'Strawberry'],
  },
  argTypes: {
    '--b2b-dropdown-multiple-menu-option-font-family': createArguments('The font family of each option', 'var(--b2b-font-family)'),
    '--b2b-dropdown-multiple-menu-option-font-weight': createArguments('The font weight of each option', 'var(--b2b-font-weight-regular)'),
    '--b2b-dropdown-multiple-menu-option-font-size': createArguments('The font size of each option', '1rem'),
    '--b2b-dropdown-multiple-menu-option-bg-color': createArguments('The background color of each option', '256px'),
    '--b2b-dropdown-multiple-menu-option-color': createArguments('The color of each option', 'var(--b2b-brand-blue-02)'),
    '--b2b-dropdown-multiple-menu-max-height': createArguments('The maximum height', '256px'),
    '--b2b-dropdown-multiple-menu-bg-color': createArguments('The background color', 'var(--b2b-gray-scale-05)'),
  },
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bDropDownMultipleSelectComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-dropdown-multiple-select\``,
      },
    },
  }
} as Meta;
export default meta;
type Story = StoryObj<B2bDropDownMultipleSelectComponent>;

export const Default: Story = {
  args: {}
};

export const Required: Story = {
  args: {
    required: true,
    selectedOptions: ['Grape', 'Orange'],
  }
};

export const Readonly: Story = {
  args: {
    readOnly: true,
    selectedOptions: ['Grape', 'Orange'],
  }
};

const renderMultipleDropdownSelectError = (args) => {
  const { label, options, ...props } = args; 
  return {
    props,
    template: `
    <div b2b-field-wrapper>
      <b2b-dropdown-multiple-select
        class="b2b--invalid"
        label="${label}"
        [selectedOptions]="['Grape', 'Orange']"
        [options]='${JSON.stringify(options)}'
      >
      </b2b-dropdown-multiple-select>

      <b2b-helper-text [invalid]="true">Helper text</b2b-helper-text>
    </div>
    `
  }; 
};

export const ValidationError: Story = {
  render: (args) => renderMultipleDropdownSelectError(args)
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

const renderMultipleSelectWidthFullStory = (args) => {
  const { label, placeHolder, options, ...props } = args; 
  return {
    props,
    template: `
    <b2b-dropdown-multiple-select
      class="b2b-width-full"
      label="${label}"
      placeHolder="${placeHolder}"
      [options]='${JSON.stringify(options)}'
    >
    </b2b-dropdown-multiple-select>
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
  render: (args) => renderMultipleSelectWidthFullStory(args)
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
      { name: 'Anna', id: '123250111' },
      { name: 'Alicia', id: '678302666' },
      { name: 'David', id: '345359445' },
      { name: 'George', id: '987402789' },
      { name: 'Jack', id: '654452113' },
      { name: 'Lucas', id: '321505890' }
    ],
  }
};
