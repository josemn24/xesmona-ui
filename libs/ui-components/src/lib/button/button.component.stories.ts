import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bButtonComponent } from './button.component';
import { B2bIconComponent } from '../icon';

type StoryType = B2bButtonComponent & { content?: string }; 

const createArgType = (type: string, defaultValue: string | null) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<StoryType> = {
  component: B2bButtonComponent,
  title: 'Design System/Components/Atoms/Button',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bButtonComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Button element directly with the attribute selector.
  
  **Selector**: \`button[b2b-button]\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    '--b2b-button-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-button-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-bold)'),
    '--b2b-button-font-size': createArgType('The font size', 'var(--b2b-cta-font-size)'),
    '--b2b-button-padding-top': createArgType('The padding top', '1rem'),
    '--b2b-button-padding-right': createArgType('The padding right', '1rem'),
    '--b2b-button-padding-bottom': createArgType('The padding bottom', '1rem'),
    '--b2b-button-padding-left': createArgType('The padding left', '1rem'),
    '--b2b-button-bg-color': createArgType('The background color', null),
    '--b2b-button-color': createArgType('The text color', null),
    '--b2b-button-border-color': createArgType('The border color', null),
    '--b2b-button-border-radius': createArgType('The border radius', '0.5rem'),
    '--b2b-button-border-style': createArgType('The border style', 'solid'),
    '--b2b-button-border-width': createArgType('The border width', '0'),
    '--b2b-button-box-shadow': createArgType('The box shadow', null)
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const renderStory = (args: { content?: string | undefined; }, buttonClass: string, hasIcon = false, iconPosition = 'right') => {
  const { content, ...props } = args;
  let template = `
    <button b2b-button class="${buttonClass}">
  `;

  if (hasIcon && iconPosition === 'left') {
    template += `<b2b-icon class="b2b-icon-left" name="icon-picture"></b2b-icon>${content}`;
  } else if (hasIcon && iconPosition) {
    template += `${content}<b2b-icon class="b2b-icon-${iconPosition}" name="icon-picture"></b2b-icon>`;
  } else {
    template += `${content}`;
  }

  template += `</button>`;

  return {
    props,
    template
  };
};

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--primary"`'
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--primary'),
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--secondary"`'
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--secondary'),
};

export const Tertiary: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--tertiary"`'
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--tertiary'),
};

export const Auxiliary: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--auxiliary"`'
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--auxiliary'),
};

export const Disabled: Story = {
  args: {
    content: 'Button',
  },
  render: (args) => {
    const { content, ...props } = args;
    return {
      props,
      template: `
      <button b2b-button class="b2b--primary" disabled>
        ${content}
        <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
      </button>
      `
    };
  },
};

export const IconRight: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b-icon-right"`(in the icon component)',
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--primary', true),
};

export const IconLeft: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b-icon-left"`(in the icon component)',
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--primary', true, 'left'),
};

export const IconOnly: Story = {
  args: {
    content: 'Button',
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <button b2b-button class="b2b--primary">
        <b2b-icon name="icon-picture"></b2b-icon>
      </button>
      `
    };
  },
};

export const Small: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--small"`'
      },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => renderStory(args, 'b2b--primary b2b--small'),
};
