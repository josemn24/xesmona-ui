import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { B2bNotificationInlineComponent } from './notification-inline.component';
import { B2bIconComponent } from '../../icon';
import { B2bLinkComponent } from '../../link/link.component';

type StoryType = B2bNotificationInlineComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Notifications/Inline',
  component: B2bNotificationInlineComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bNotificationInlineComponent, B2bNotificationFloatingComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-notification-inline\``,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
      ],
    }),
    moduleMetadata({
      imports: [B2bIconComponent,B2bNotificationInlineComponent, B2bLinkComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {
   title: {
      description: 'The title of the content.',
      control: 'text'
    },
   description: {
      description: 'The description of the content.',
      control: 'text'
    },
   state: {
      description: 'The name of the icon to show and status color theme.',
      control: 'text'
    },
    hasActions: {
      description: 'Shows an empty footer to insert custom actions',
      control: 'boolean'
    },
    visible: {
      description: 'Notification visibility.',
      control: 'boolean'
    },
    closable: {
      description: 'Shows an icon to close the notification.',
      control: 'boolean'
    }
  },
  args: {
    visible: true,
    title: 'Title',
    description: 'Description',
    hasActions: true,
    closable: true
  }
} as Meta;

export default meta;
type Inline = StoryObj<B2bNotificationInlineComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const {  visible, state, title, description, hasActions, closable, ...props } = args;
  const template =
    `<b2b-notification-inline 
  (closeNotification)="visible = false" 
  [visible]="${visible}" 
  state="${state}" 
  [closable]="${closable}"
  [hasActions]="${hasActions}"
  title="${title}"
  description="${description}"
  ><div b2b-notification-inline-actions style="display:flex; justify-content: flex-start; gap: .5rem; width: fit-content;">
    <a b2b-link href="https://zeroheight.com/065e288e4/v/latest/p/44e4d3-notifications">Action 1</a>
    <a b2b-link href="https://zeroheight.com/065e288e4/v/latest/p/44e4d3-notifications">Action 2</a>
  </div></b2b-notification-inline>`;
  return {
    props,
    template
  }; 
};

export const InlineInfo: Inline = {
  args: {
    state: 'info',
  },
  render: (args) => renderStory(args), 
};

export const InlineOk: Inline = {
  args: {
    state: 'ok',
  },
  render: (args) => renderStory(args), 
};

export const InlineError: Inline = {
  args: {
    state: 'error',
  },
  render: (args) => renderStory(args), 
};

export const InlineAlert: Inline = {
  args: {
    state: 'alert',
  },
  render: (args) => renderStory(args), 
};
