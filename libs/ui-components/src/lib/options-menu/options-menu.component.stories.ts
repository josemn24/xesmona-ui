import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bOptionsMenuComponent } from './options-menu.component';
import { B2BOptionsMenuTriggerDirective } from './options-menu-trigger.directive';
import { B2bOptionsMenuItemComponent } from './components/options-menu-item/options-menu-item.component';
import { B2bButtonComponent } from '../button';

type StoryType = B2bOptionsMenuComponent & { items: string[], buttonPosition?: 'start' | 'center' | 'end' };

const meta: Meta<B2bOptionsMenuComponent> = {
  component: B2bOptionsMenuComponent,
  title: 'Design System/Components/Molecules/Options Menu',
  decorators: [
    moduleMetadata({
      imports: [
        B2bButtonComponent,
        B2bOptionsMenuItemComponent,
        B2BOptionsMenuTriggerDirective
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bOptionsMenuComponent, B2bOptionsMenuItemComponent, B2BMenuTriggerDirective } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector. You must use B2BMenuTriggerDirective on an element to display the options menu. Also, you must import B2bOptionsMenuItemComponent to render each menu item.
  
  **Selector**: \`[b2b-options-menu]\`,
  **Selector for the trigger**: \`[b2bOptionsMenuTrigger]\`,
  **Selector for menu item**: \`[b2b-options-menu-item]\``,
      },
    },
  },
  argTypes: {
    buttonPosition: {
      description: 'The botton alignment',
      defaultValue: 'start',
      control: 'radio',
      options: ['start', 'center', 'end']
    },
  },
  args: {
    buttonPosition: 'start',
    items: ['Item 1','Item 2', 'Item 3']
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const { xPosition, yPosition, gap, items, buttonPosition, ...props } = args;
  return {
    props,
    template: `
    <div style="display: flex; justify-content: ${buttonPosition}">
      <button b2b-button class="b2b--primary" [b2bOptionsMenuTrigger]="menu">
        Button
      </button>
    </div>

    <ul b2b-options-menu #menu xPosition="${xPosition}" yPosition="${yPosition}" [gap]="${gap}">
      @for (item of ${JSON.stringify(items)}; track $index) {
        <li b2b-options-menu-item (clicked)="onClick(item)">{{ item }}</li>
      }
    <ul>
    `
  };
};

export const Default: Story = {
  args: {
    xPosition: 'after',
    yPosition: 'below',
    gap: 8
  },
  render: (args) => renderStory(args), 
};
