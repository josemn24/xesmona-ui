import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bTagComponent } from './tag.component';
import { B2bIconComponent } from '../icon/icon.component';

type StoryType = B2bTagComponent & { content?: string; icon?: string; color?: string; size?: string }; 
const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bTagComponent,
  title: 'Design System/Components/Atoms/Tag',
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
        import { B2bTagComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-tag\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
    color: {
      description: 'The color of the tag.',
      defaultValue: 'blue',
      control: 'radio',
      options: ['blue', 'green', 'orange', 'red', 'grey']
    },
    size: {
      description: 'The size of the tag.',
      defaultValue: 'small',
      control: 'radio',
      options: ['small', 'large']
    },
    '--b2b-tag-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-tag-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-tag-font-size': createArgType('The font size', '0.75rem'),
    '--b2b-tag-padding-top': createArgType('The padding top', '0.25rem'),
    '--b2b-tag-padding-right': createArgType('The padding right', '0.5rem'),
    '--b2b-tag-padding-bottom': createArgType('The padding bottom', '0.25rem'),
    '--b2b-tag-padding-left': createArgType('The padding left', '0.5rem'),
    '--b2b-tag-bg-color': createArgType('The background color', null),
    '--b2b-tag-color': createArgType('The text color', 'var(--b2b-white)'),
    '--b2b-tag-border-radius': createArgType('The border radius', '0.25rem'),
  },
  args: {
    content: "Lorem ipsum"
  },
  render: (args) => {
    const { content, color, size, ...props } = args; 
    return {
      props,
      template: `
      <b2b-tag class="b2b--${color} b2b--${size}">
        ${content}
      </b2b-tag>
      `
    }; 
  }, 
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Blue: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--blue"`'
      },
    },
  },
  args: { 
    color: 'blue',
    size: 'small'
  }
};

export const Green: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--green"`'
      },
    },
  },
  args: { 
    color: 'green',
    size: 'small'
  }
};

export const Orange: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--orange"`'
      },
    },
  },
  args: { 
    color: 'orange',
    size: 'small'
  }
};

export const Red: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--red"`'
      },
    },
  },
  args: { 
    color: 'red',
    size: 'small'
  }
};

export const Grey: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--grey"`'
      },
    },
  },
  args: { 
    color: 'grey',
    size: 'small'
  }
};

export const LeftIcon: Story = {
  args: { 
    icon: 'icon-info',
    color: 'blue',
    size: 'small'
  },
  render: (args) => {
    const { content, icon, color, size, ...props } = args; 
    return {
      props,
      template: `
      <b2b-tag class="b2b--${color} b2b--${size}">
        <b2b-icon class="b2b-icon-left" name="${icon}" size="sm"></b2b-icon>
        ${content}
      </b2b-tag>
      `
    }; 
  }, 
};

export const Large: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--large"`'
      },
    },
  },
  args: { 
    color: 'blue',
    size: 'large'
  },
};
