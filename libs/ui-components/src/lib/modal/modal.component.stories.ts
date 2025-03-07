import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bModalComponent } from './modal.component';
import { B2bIconComponent } from '../icon';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';
import { B2bButtonComponent } from '../button/button.component';

type StoryType = B2bModalComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Modal',
  component: B2bModalComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bModalComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-modal\``,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReplaceMeComponent,B2bIconComponent,B2bButtonComponent, B2bModalComponent],
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
   iconState: {
      description: 'The name of the icon to show in Basic mode.',
      control: 'text'
    },
    custom: {
      description: 'Allows custom content in the body.',
      control: 'boolean'
    },
    visible: {
      description: 'Modal visibility.',
      control: 'boolean'
    }
  },
  args: {
    visible: true,
    title: 'Main Title',
    description: 'Description',
    custom: false
  }
} as Meta;

export default meta;
type Story = StoryObj<B2bModalComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const {  visible, iconState, title, description, custom, ...props } = args;
  const template =
    `
    <b2b-modal [visible]="${visible}" iconState="${iconState}" title="${title}" description="${description}" [custom]="${custom}" (closeModal)="${visible}">
      <div b2b-modal-content-custom>
        <div replace-me style="width: 100%; height: 151px;">Replace me</div>
      </div>
      <div b2b-modal-footer>
        <div class="buttons-container">
          <div class="buttons">
            <button b2b-button class="b2b--primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    </b2b-modal>`;
  return {
    props,
    template
  }; 
};

export const BasicOk: Story = {
  args: {
    iconState: 'ok',
  },
  render: (args) => renderStory(args), 
};

export const BasicInfo: Story = {
  args: {
    iconState: 'info',
  },
  render: (args) => renderStory(args), 
};

export const BasicAlert: Story = {
  args: {
    iconState: 'alert',
  },
  render: (args) => renderStory(args), 
};

export const BasicError: Story = {
  args: {
    iconState: 'error',
  },
  render: (args) => renderStory(args), 
};

export const Custom: Story = {
  args: {
    visible: true,
    title: 'Main Title',
    description: 'Description',
    custom: true
  },
  render: (args) => renderStory(args), 
};
