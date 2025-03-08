import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { B2bNotificationFloatingComponent } from '../floating/notification-floating.component';
import { B2bIconComponent } from '../../icon';
import { B2bLinkComponent } from '../../link/link.component';

type StoryType = B2bNotificationFloatingComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Notifications/Floating',
  component: B2bNotificationFloatingComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bNotificationFloatingComponent, B2bNotificationFloatingComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-notification-floating\``,
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
      imports: [B2bNotificationFloatingComponent,B2bIconComponent, B2bLinkComponent],
    }),
    componentWrapperDecorator((story) => `<div style="height: 500px">${story}</div>`)
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
    size: {
      description: 'Determines the notification size',
      control: 'text'
    },
    direction: {
      description: 'Determines the notification direction',
      control: 'text'
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
} as Meta;

export default meta;
type Floating = StoryObj<B2bNotificationFloatingComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const {  visible, state, title, description, direction, closable, ...props } = args;
  const template =
    `<b2b-notification-floating 
  (closeNotification)="visible = false" 
  [visible]="${visible}" 
  state="${state}" 
  [closable]="${closable}"
  direction="${direction}"
  title="${title}"
  description="${description}"
  ></b2b-notification-floating>`;
  return {
    props,
    template
  }; 
};

export const Floating: Floating = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: You must change the visibility of the notification by the input visible to show/hide the notification.`,
      },
    },
  },
  args: {
    visible: true,
    state: 'info',
    title: 'Title',
    description: 'Description',
    direction: 'bottom',
    closable: true
  },
  render: (args) => renderStory(args), 
};
