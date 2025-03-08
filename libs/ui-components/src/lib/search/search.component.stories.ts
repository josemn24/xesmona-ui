import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bSearchComponent } from './search.component';

const createArg = (description, defaultValue, type) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<B2bSearchComponent> = {
  component: B2bSearchComponent,
  title: 'Design System/Components/Molecules/Search',
  decorators: [
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bSearchComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-search\``,
      },
    },
  },
  args: {
    options: ['Banana', 'Grape', 'Orange', 'Pear', 'Peach', 'Strawberry'],
    label: 'Label',
    placeHolder: 'Placeholder',
  },
  argTypes: {
    '--b2b-search-autocomplete-width': createArg('The width', 'var(--b2b-input-width, 20ch)', 'The width'),
    '--b2b-autocomplete-option-color': createArg('The color of each option', 'var(--b2b-brand-blue-02)', 'The color of each option'),
    '--b2b-autocomplete-option-bg-color': createArg('The background color of each option', '256px', 'The background color of each option'),
    '--b2b-autocomplete-option-font-size': createArg('The font size of each option', '1rem', 'The font size of each option'),
    '--b2b-autocomplete-option-font-family': createArg('The font family of each option', 'var(--b2b-autocomplete-option-font-family, var(--b2b-font-family))', 'The font family of each option'),
    '--b2b-autocomplete-option-font-weight': createArg('The font weight of each option', 'var(--b2b-autocomplete-option-font-weight, var(--b2b-font-weight-bold))', 'The font weight of each option'),
    '--b2b-search-autocomplete-bg-color': createArg('The background color', 'var(--b2b-gray-scale-05)', 'The background color'),
    '--b2b-autocomplete-max-height': createArg('The maximum height', '256px', 'The maximum height'),
  }
} as Meta;
export default meta;
type Story = StoryObj<B2bSearchComponent>;

export const Default: Story = {
  args: {
    recentOptions: ['Orange', 'Pear'],
  }
};

export const Required: Story = {
  args: {
    recentOptions: ['Orange', 'Pear'],
    required: true,
  }
};

export const Readonly: Story = {
  args: {
    recentOptions: ['Orange', 'Pear'],
    readOnly: true
  }
};

export const Disabled: Story = {
  args: {
    recentOptions: ['Orange', 'Pear'],
    disabled: true
  }
};

const renderSearchWidthFullStory = (args) => {
  const { label, placeHolder, options, recentOptions, ...props } = args; 
  return {
    props,
    template: `
    <b2b-search
      class="b2b-width-full"
      label="${label}"
      placeHolder="${placeHolder}"
      [options]='${JSON.stringify(options)}'
      [recentOptions]='${JSON.stringify(recentOptions)}'
    >
    </b2b-search>
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
    recentOptions: ['Orange', 'Pear'],
    disabled: false
  },
  render: (args) => renderSearchWidthFullStory(args)
};

export const ObjectOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: Use "optionLabel" to specify the property of the object to be used as the option label.`,
      },
    },
  },
  args: {
    label: 'Label',
    placeHolder: 'Placeholder',
    optionLabel: 'name',
    options: [
      { name: 'Anatoly', id: '123250555' },
      { name: 'Alice', id: '987302888' },
      { name: 'Debby', id: '569359445' },
      { name: 'James', id: '222402789' },
      { name: 'Joseph', id: '444452113' },
      { name: 'Nadia', id: '321505123' }
    ],
    recentOptions: [
      { name: 'Anatoly', id: '123250555' },
      { name: 'Debby', id: '569359445' },
    ],
  }
};

const containsFilterFn = (searchValue: string, optionValue: string) => optionValue?.toUpperCase().includes(searchValue?.toUpperCase());

export const MatchFn: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: The matchFn input is used to establish a filtering logic.
        Specifically, matchFn expects a function that returns true or false depending on whether the option should be filtered or not.
        The default matchFn is a case-insensitive startsWith filter, but you can provide your own function to customize the filtering logic.
        The function receives two arguments: the search value and the option value.
        This example shows how to use a function to filter options that contain the search value:`,
      },
    },
  },
  argTypes: {
    matchFn: {
      control: { type: 'object' },
    },
  },
  args: {
    label: 'Label',
    placeHolder: 'Placeholder',
    recentOptions: ['Orange', 'Pear'],
    matchFn: containsFilterFn,
  },
};
