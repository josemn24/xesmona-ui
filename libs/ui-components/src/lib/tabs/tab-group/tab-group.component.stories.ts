import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bTabGroupComponent } from './tab-group.component';
import { B2bTabComponent } from '../tab.component';

const createTabArgs = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<B2bTabGroupComponent> = {
  component: B2bTabGroupComponent,
  title: 'Design System/Components/Molecules/Tabs',
  decorators: [
    moduleMetadata({
      imports: [B2bTabComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bTabGroupComponent, B2bTabComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector. Also, you must import B2bTabComponent to render each tab option.
  
  **Selector**: \`b2b-tab-group\`,
  **Selector for tab**: \`[b2b-tab]\``,
      },
    },
  },
  argTypes: {
    '--b2b-tab-font-family': createTabArgs('The font family', 'var(--b2b-font-family)'),
    '--b2b-tab-font-weight': createTabArgs('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-tab-font-size': createTabArgs('The font size', '1rem'),
    '--b2b-tab-padding-top': createTabArgs('The padding top', '0.5rem'),
    '--b2b-tab-padding-right': createTabArgs('The padding right', '0'),
    '--b2b-tab-padding-bottom': createTabArgs('The padding bottom', '0.75rem'),
    '--b2b-tab-padding-left': createTabArgs('The padding left', '0'),
    '--b2b-tab-bg-color': createTabArgs('The background color', 'var(--b2b-gray-scale-05)'),
    '--b2b-tab-color': createTabArgs('The text color', 'var(--b2b-brand-blue-01)'),
    '--b2b-tab-border-color': createTabArgs('The border color', null),
    '--b2b-tab-border-radius': createTabArgs('The border radius', '0'),
    '--b2b-tab-border-style': createTabArgs('The border style', 'none'),
    '--b2b-tab-border-width': createTabArgs('The border width', '0'),
  },
  args: {}
} as Meta;
export default meta;
type Story = StoryObj<B2bTabGroupComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args, tabs: any[], className = '') => {
  const { leftArrow, rightArrow, ...props } = args; 
  return {
    props,
    template: `
    <b2b-tab-group class="${className}" [leftArrow]="${leftArrow}" [rightArrow]="${rightArrow}">
      @for (tab of ${JSON.stringify(tabs)}; track tab.value) {
        <button b2b-tab [value]="tab.value">{{ tab.label }}</button>
      }
    </b2b-tab-group>
    `
  }; 
};

export const Left: Story = {
  args: {
    rightArrow: false,
    leftArrow: false,
  },
  render: (args) => renderStory(args, [
    { value: 'tab1', label: 'Tab one' },
    { value: 'tab2', label: 'Tab two' },
    { value: 'tab3', label: 'Tab three' }
  ]), 
};

export const Center: Story = {
  args: {
    rightArrow: false,
    leftArrow: false,
  },
  render: (args) => renderStory(args, [
    { value: 'tab1', label: 'Tab one' },
    { value: 'tab2', label: 'Tab two' },
    { value: 'tab3', label: 'Tab three' }
  ], 'b2b-tab-group--center'), 
};

export const Scroll: Story = {
  args: {
    rightArrow: true,
    leftArrow: true,
  },
  render: (args) => renderStory(args, [
    { value: 'tab1', label: 'Tab one' },
    { value: 'tab2', label: 'Tab two' },
    { value: 'tab3', label: 'Tab three' },
    { value: 'tab4', label: 'Tab four' },
    { value: 'tab5', label: 'Tab five' },
    { value: 'tab6', label: 'Tab six' },
    { value: 'tab7', label: 'Tab seven' },
    { value: 'tab8', label: 'Tab eight' },
    { value: 'tab9', label: 'Tab nine' },
    { value: 'tab10', label: 'Tab ten' },
  ]), 
};
