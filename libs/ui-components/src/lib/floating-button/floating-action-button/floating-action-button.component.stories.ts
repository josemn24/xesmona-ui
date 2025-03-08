import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bFloatingButtonComponent } from '../floating-button.component';
import { B2bIconComponent } from '../../icon';
import { B2bOptionsMenuComponent } from '../../options-menu/options-menu.component';
import { B2bOptionsMenuItemComponent } from '../../options-menu/components/options-menu-item/options-menu-item.component';
import { B2BOptionsMenuTriggerDirective } from '../../options-menu/options-menu-trigger.directive';

type StoryType = B2bFloatingButtonComponent & { state: 'primary' | 'secondary' }; 

const meta: Meta<StoryType> = {
  component: B2bFloatingButtonComponent,
  title: 'Design System/Components/Atoms/Floating Button/Action',
  decorators: [
    moduleMetadata({
      imports: [
        B2bFloatingButtonComponent,
        B2bIconComponent,
        B2bOptionsMenuComponent,
        B2bOptionsMenuItemComponent,
        B2BOptionsMenuTriggerDirective,
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bFloatingButtonComponent, B2bOptionsMenuComponent, B2bOptionsMenuItemComponent, B2BOptionsMenuTriggerDirective } from '@mapfre-tech/b2b-components';

  In order to get a floating action button, use the floating button component together with the options menu component.
  
  **Selector for floating button**: \`button[b2b-floating-button]\`
  **Selector for options menu**: \`[b2b-options-menu]\`,
  **Selector for the trigger**: \`[b2bOptionsMenuTrigger]\`,
  **Selector for menu item**: \`[b2b-options-menu-item]\``,
      },
    },
  },
  argTypes: {
    state: {
      defaultValue: 'primary',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    items: ['Item 1','Item 2', 'Item 3']
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const floatingActionButtonStory = (args) => {
  const { items, state, ...props } = args;
  const cssClass = state === 'primary' ? 'b2b--primary' : 'b2b--secondary';
  return {
    props,
    template: `
      <div class="b2b-floating-action-button-story-example">
        <button b2b-floating-button class="${cssClass}" [b2bOptionsMenuTrigger]="floatingButtonMenu">
          @if (floatingButtonMenu.isOpen()) {
            <b2b-icon name="icon-close" size="lg"></b2b-icon>
          } @else {
            <b2b-icon name="icon-picture" size="lg"></b2b-icon>
          }
        </button>
      </div>

      <ul b2b-options-menu class="b2b-floating-action-list" #floatingButtonMenu [gap]="8">
        @for (item of ${JSON.stringify(items)}; track $index) {
          <li b2b-options-menu-item>{{ item }}</li>
        }
      </ul>
    `
  }; 
};

export const ActionButton: Story = {
  args: {
    state: 'primary',
  },
  render: (args) => floatingActionButtonStory(args), 
};
