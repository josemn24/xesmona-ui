import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bGridLayoutComponent } from './grid-layout.component';
import { B2bFieldWrapperComponent } from '../text-field/field-wrapper';
import { B2bLabelComponent } from '../label';
import { B2bInputComponent } from '../text-field/input/input.component';
import { B2bDropDownSelectComponent } from '../dropdown-select/dropdown-select.component';
import { B2bSearchComponent } from '../search/search.component';

type StoryType = B2bGridLayoutComponent; 
const meta: Meta<StoryType> = {
  component: B2bGridLayoutComponent,
  title: 'Design System/Brand Identity/Layout/Grid/Grid Layout',
  decorators: [
    moduleMetadata({
      imports: [
        B2bFieldWrapperComponent,
        B2bLabelComponent,
        B2bInputComponent,
        B2bDropDownSelectComponent,
        B2bSearchComponent
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bGridLayoutComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-grid-layout\`
  `,
      },
    },
  },
  argTypes: {},
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const renderStory = (args, cssClass: string, cssInputClasses: string []) => {
    const { ...props } = args;
    const dropdownOptions = ['Apple', 'Banana', 'Grape', 'Pear', 'Peach', 'Strawberry'];
    const searchOptions = [
      { name: 'Anatoly', id: '123250555' },
      { name: 'Alice', id: '987302888' },
      { name: 'Debby', id: '569359445' },
      { name: 'James', id: '222402789' },
      { name: 'Joseph', id: '444452113' },
      { name: 'Nadia', id: '321505123' }
    ];
    const searchRecentOptions = [{ name: 'Anatoly', id: '123250555' }, { name: 'Debby', id: '569359445' }];
    return {
      props,
      template: `
        <b2b-grid-layout class="${cssClass}">
          <div b2b-field-wrapper class="b2b-width-full ${cssInputClasses[0]}">
            <label b2b-label for="input-1" class="b2b--required">Input 1</label>
            <input b2b-input type="text" id="input-1">
          </div>
          <div b2b-field-wrapper class="b2b-width-full ${cssInputClasses[1]}">
            <label b2b-label for="input-2" class="b2b--required">Input 2</label>
            <input b2b-input type="text" id="input-2">
          </div>
          <b2b-search
            class="b2b-width-full ${cssInputClasses[2]}"
            label="Search"
            placeHolder="Buscar"
            optionLabel="name"
            [options]='${JSON.stringify(searchOptions)}'
            [recentOptions]='${JSON.stringify(searchRecentOptions)}'
          >
          </b2b-search>
          <div b2b-field-wrapper class="b2b-width-full ${cssInputClasses[3]}">
            <label b2b-label for="input-4">Input 4</label>
            <input b2b-input type="text" id="input-4">
          </div>
          <b2b-dropdown-select
            class="b2b-width-full ${cssInputClasses[4]}"
            label="Dropdown"
            placeHolder="Select"
            [options]='${JSON.stringify(dropdownOptions)}'
          >
          </b2b-dropdown-select>
          <div b2b-field-wrapper class="b2b-width-full ${cssInputClasses[5]}">
            <label b2b-label for="input-6">Input 6</label>
            <input b2b-input type="text" id="input-6">
          </div>
        </b2b-grid-layout>
      `
    }; 
};

export const TwelveColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: `This is the default grid layout system to tie elements together in order to create visual hierarchy and alignment based on [Bootstrap CSS grid](https://getbootstrap.com/docs/5.3/layout/css-grid).
        The grid is made up of a series of vertical lines that break the screen into 12 separate columns (class="b2b-grid b2b-grid-twelve-columns").
        The number of columns an element will span is determined by the class name used and it can be adjusted for different screen sizes (e.g. class="b2b-col-12 b2b-col-6-md")
        Also, the grid can use a default gap between columns (class="b2b-gap-default").
        `,
      },
    },
  },
  args: {},
  render: (args) => renderStory(
    args,
    'b2b-grid b2b-grid-twelve-columns b2b-gap-default',
    [
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md',
      'b2b-col-12 b2b-col-6-md',
    ]
  ), 
};

export const TwelveColumnsWithCustomGaps: Story = {
  parameters: {
    docs: {
      description: {
        story: `This example shows how to use custom gaps between columns.
        In this case, the gaps are set to medium (class="b2b-gap-x-m b2b-gap-y-m") and large (class="b2b-gap-l-lg b2b-gap-xl-3xl") in different screen sizes.
        `,
      },
    },
  },
  args: {},
  render: (args) => renderStory(
    args,
    'b2b-grid b2b-grid-twelve-columns b2b-gap-x-m b2b-gap-y-m b2b-gap-l-lg b2b-gap-xl-3xl',
    [
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md b2b-col-4-lg',
      'b2b-col-12 b2b-col-6-md',
      'b2b-col-12 b2b-col-6-md',
    ]
  ), 
};

export const ResponsiveColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: `This is an alternative grid layout system based on [Material Responsive layout grid](https://m2.material.io/design/layout/responsive-layout-grid.html).
        It is based on 4-column(mobile), 8-column(tablet), and 12-column(desktop) grids, available for use across different screens, devices, and orientations (class="b2b-grid b2b-grid-responsive-columns").
        The number of columns an element will span is determined by the class name used and it can be adjusted for different screen sizes (e.g. class="b2b-col-4 b2b-col-6-lg").
        Also, the grid can use a default gap between columns (class="b2b-gap-default") or custom gaps (e.g. class="b2b-gap-x-m b2b-gap-y-m").
        `,
      },
    },
  },
  args: {},
  render: (args) => renderStory(
    args,
    'b2b-grid b2b-grid-responsive-columns b2b-gap-default',
    [
      'b2b-col-4',
      'b2b-col-4',
      'b2b-col-4',
      'b2b-col-4',
      'b2b-col-4 b2b-col-6-lg',
      'b2b-col-4 b2b-col-6-lg',
    ]
  ), 
};
