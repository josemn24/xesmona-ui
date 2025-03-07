import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bHeaderUserAvatarComponent } from './header-user-avatar.component';
import { B2bOptionsMenuComponent } from '../../options-menu/options-menu.component';
import { B2bOptionsMenuItemComponent } from '../../options-menu/components/options-menu-item/options-menu-item.component';
import { B2BOptionsMenuTriggerDirective } from '../../options-menu/options-menu-trigger.directive';

type StoryType = B2bHeaderUserAvatarComponent & { content?: string; }; 
const createArgType = (defaultValue, type) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bHeaderUserAvatarComponent,
  title: 'Design System/Components/Organisms/Header/User Avatar',
  decorators: [
    moduleMetadata({
      imports: [
        B2BOptionsMenuTriggerDirective,
        B2bOptionsMenuComponent,
        B2bOptionsMenuItemComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="display: flex; justify-content: center;">${story}</div>`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bHeaderUserAvatarComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-user-avatar\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    '--b2b-user-avatar-font-family': createArgType('var(--b2b-font-family)', 'The font family'),
    '--b2b-user-avatar-font-weight': createArgType('var(--b2b-font-weight-regular)', 'The font weight'),
    '--b2b-user-avatar-font-size': createArgType('0.875rem', 'The font size'),
    '--b2b-user-avatar-width': createArgType('34px', 'The width'),
    '--b2b-user-avatar-height': createArgType('34px', 'The height'),
    '--b2b-user-avatar-bg-color': createArgType('var(--b2b-brand-blue-02)', 'The background color'),
    '--b2b-user-avatar-color': createArgType('var(--b2b-grey-scale-05)', 'The text color'),
  },
  args: {
    content: "Lorem ipsum"
  },
  render: (args) => {
    const { content, ...props } = args; 
    return {
      props,
      template: `
        <button b2b-user-avatar [b2bOptionsMenuTrigger]="userOptions">
          ${content}
        </button>
          
        <ul b2b-options-menu #userOptions xPosition="before" [gap]="8">
          <li b2b-options-menu-item (clicked)="onClick()">
            My profile
          </li>
          <li b2b-options-menu-item (clicked)="onClick()">
            Notifications (100)
          </li>
          <li b2b-options-menu-item (clicked)="onClick()">
            Settings
          </li>
          <li b2b-options-menu-item (clicked)="onClick()">
            Log out
          </li>
        </ul>
      `
    }; 
  }, 
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: { content: 'NA' }
};
