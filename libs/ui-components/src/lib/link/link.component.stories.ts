import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bAnchorDisabledDirective } from './disable-anchor.directive';
import { B2bLinkComponent } from './link.component';
import { B2bIconComponent } from '../icon';

type StoryType = B2bLinkComponent & { content?: string, linkUrl?: string }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bLinkComponent,
  title: 'Design System/Components/Atoms/Action Link',
  decorators: [
    moduleMetadata({
      imports: [B2bAnchorDisabledDirective, B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bLinkComponent, B2bAnchorDisabledDirective } from '@mapfre-tech/b2b-components';

  In order to use this component use the Anchor element directly with the attribute selector.
  
  **Selector**: \`a[b2b-link]\`
  **Selector for disabled**: \`a[b2b-link b2b-anchor-disabled]\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    linkUrl: {
      description: 'The href of the anchor.',
      control: 'text',
    },
    '--b2b-link-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-link-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-medium)'),
    '--b2b-link-font-size': createArgType('The font size', 'var(--b2b-cta-font-size)'),
    '--b2b-link-color': createArgType('The text color', 'var(--b2b-brand-red-01)'),
  },
  args: {
    content: 'Action link',
    linkUrl: 'https://www.google.es',
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  render: (args) => {
    const { content, linkUrl, ...props } = args; 
    return {
      props,
      template: `
      <a b2b-link href="${linkUrl}">
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
      </a>
      `
    }; 
  }
};

export const Decorated: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--decorated"`'
      },
    },
  },
  render: (args) => {
    const { content, linkUrl, ...props } = args; 
    return {
      props,
      template: `
      <a b2b-link class="b2b--decorated" href="${linkUrl}">
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
      </a>
      `
    }; 
  }
};

export const IconOnly: Story = {
  render: (args) => {
    const { linkUrl, ...props } = args; 
    return {
      props,
      template: `
        <a b2b-link href="${linkUrl}">
          <b2b-icon name="icon-picture"></b2b-icon>
        </a>
      `
    }; 
  }
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--secondary"`'
      },
    },
  },
  render: (args) => {
    const { content, linkUrl, ...props } = args; 
    return {
      props,
      template: `
      <a b2b-link class="b2b--secondary" href="${linkUrl}">
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
      </a>
      `
    }; 
  }
};

export const Small: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--small"`'
      },
    },
  },
  render: (args) => {
    const { content, linkUrl, ...props } = args; 
    return {
      props,
      template: `
      <a b2b-link class="b2b--small" href="${linkUrl}">
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
      </a>
      `
    }; 
  }
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'You must import <code>B2bAnchorDisabledDirective</code> to disable the anchor tag'
      },
    },
  },
  render: (args) => {
    const { content, linkUrl, ...props } = args; 
    return {
      props,
      template: `
      <a b2b-link b2b-anchor-disabled href="${linkUrl}">
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
      </a>
      `
    }; 
  }
};
