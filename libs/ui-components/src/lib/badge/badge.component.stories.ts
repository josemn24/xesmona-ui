import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBadgeComponent } from './badge.component';
import { B2bIconComponent } from '../icon/icon.component';

type StoryType = B2bBadgeComponent; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Atoms/Badge',
  component: B2bBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent],
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bBadgeComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.

  **Selector**: \`b2b-badge\``,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    content: '',
  },
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<B2bBadgeComponent>;

const renderStory = (args) => {
  const { content, disabled, ...props } = args;
  const template =`
    <b2b-badge content="${content}" [disabled]="${disabled}">
      <button class="b2b-badge-button" [attr.disabled]="${disabled ?? null}">
        <b2b-icon name="icon-notification"></b2b-icon>
      </button>
    </b2b-badge>
  `;
  return {
    props,
    template
  }; 
};

export const Default: Story = {
  render: (args) => renderStory(args),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => renderStory(args),
};
