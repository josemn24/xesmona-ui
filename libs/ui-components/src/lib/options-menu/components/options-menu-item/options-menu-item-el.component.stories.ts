import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bOptionsMenuItemElComponent } from './options-menu-item-el.component';
import { B2bIconComponent } from '../../../icon';

type StoryType = B2bOptionsMenuItemElComponent & { label: string, selected?: boolean, disabled?: boolean, icon?: boolean };

const meta: Meta<StoryType> = {
  component: B2bOptionsMenuItemElComponent,
  title: 'Design System/Components/Molecules/Options Menu/Item',
  decorators: [
    moduleMetadata({
      imports: [B2bOptionsMenuItemElComponent, B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bOptionsMenuItemElComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`[b2b-options-menu-item-el]\``,
      },
    },
  },
  args: {
    selected: false,
    disabled: false,
    icon: false,
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const { label, selected, disabled, icon, ...props } = args; 
  return {
    props,
    template: `
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li
        b2b-options-menu-item-el
        [tabindex]="${disabled ? -1 : 0}"
        [class.b2b--selected]="${selected}"
        [attr.disabled]="${disabled || null}"
        (clicked)="onClick()"
      >
        <b2b-icon name="icon-picture" *ngIf="${icon}"></b2b-icon>
        ${label}
      </li>
    </ul>
    `
  };
};

export const Default: Story = {
  args: {
    label: 'Item',
  },
  render: (args) => renderStory(args), 
};

export const ItemSelected: Story = {
  args: {
    label: 'Item selected',
    selected: true,
  },
  render: (args) => renderStory(args),
};

export const Disabled: Story = {
  args: {
    label: 'Item disabled',
    disabled: true,
  },
  render: (args) => renderStory(args),
};

export const ItemWithIcon: Story = {
  args: {
    label: 'Item',
    icon: true,
  },
  render: (args) => renderStory(args),
};
