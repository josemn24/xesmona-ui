import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bOptionsMenuContainerElComponent } from './options-menu-container-el.component';
import { B2bOptionsMenuItemElComponent } from '../options-menu-item/options-menu-item-el.component';

const meta: Meta<B2bOptionsMenuContainerElComponent> = {
  component: B2bOptionsMenuContainerElComponent,
  title: 'Design System/Components/Molecules/Options Menu/Container',
  decorators: [
    moduleMetadata({
      imports: [B2bOptionsMenuItemElComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bOptionsMenuContainerElComponent, B2bOptionsMenuItemElComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector. Also, you must import B2bOptionsMenuItemElComponent to render each menu item option.
  
  **Selector**: \`[b2b-options-menu-container-el]\`,
  **Selector for item**: \`[b2b-options-menu-item-el]\``,
      },
    },
  },
  args: {}
} as Meta;
export default meta;
type Story = StoryObj<B2bOptionsMenuContainerElComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args, items: any[]) => {
  const { ...props } = args; 
  return {
    props,
    template: `
    <ul b2b-options-menu-container-el>
      @for (item of ${JSON.stringify(items)}; track $index) {
        <li b2b-options-menu-item-el [class.b2b--selected]="item.selected" (clicked)="onClick(item)">{{ item.label }}</li>
      }
    </ul>
    `
  };
};

export const Default: Story = {
  args: {},
  render: (args) => renderStory(args, [
    { label: 'Item 1', selected: false },
    { label: 'Item 2', selected: false },
    { label: 'Item 3', selected: false },
  ]), 
};

export const Scroll: Story = {
  args: {},
  render: (args) => renderStory(args, [
    { label: 'Item 1', selected: false },
    { label: 'Item 2', selected: false },
    { label: 'Item 3', selected: false },
    { label: 'Item 4', selected: false },
    { label: 'Item 5', selected: false },
    { label: 'Item 6', selected: false },
    { label: 'Item 7', selected: false },
    { label: 'Item 8', selected: false },
    { label: 'Item 9', selected: false },
    { label: 'Item 10', selected: false }
  ]), 
};
