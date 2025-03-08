import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBreadcrumbItemComponent } from './breadcrumb-item.component';

type StoryType = B2bBreadcrumbItemComponent & { label: string, url: string; };

const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<StoryType> = {
  component: B2bBreadcrumbItemComponent,
  title: 'Design System/Components/Molecules/Breadcrumbs/Item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bBreadcrumbItemComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-breadcrumb-item\``,
      },
    },
  },
  argTypes: {
    '--b2b-breadcrumb-item-font-family': createArgType('The font family', 'var(--b2b-font-family)'),
    '--b2b-breadcrumb-item-font-weight': createArgType('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-breadcrumb-item-font-size': createArgType('The font size', 'var(--b2b-text-caption-m-font-size)'),
    '--b2b-breadcrumb-item-color': createArgType('The text color', 'var(--b2b-brand-red-01)'),
  },
  args: {
    label: 'Item',
    url: '../',
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  render: (args) => {
    const { label, url, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumb-item>
        <a href="${url}">${label}</a>
      </b2b-breadcrumb-item>
      `
    }; 
  }
};

export const Selected: Story = {
  render: (args) => {
    const { label, url, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumb-item>
        <a class="b2b--selected" href="${url}">${label}</a>
      </b2b-breadcrumb-item>
      `
    }; 
  }
};

export const Readonly: Story = {
  parameters: {
    docs: {
      description: {
        story: '**Style**: `class="b2b--readonly"` \n\n To get a no focusable link, do not provide a url or use tabindex="-1".'
      },
    },
  },
  render: (args) => {
    const { label, url, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumb-item>
        <a class="b2b--readonly" href="${url}">${label}</a>
      </b2b-breadcrumb-item>
      `
    }; 
  }
};

export const NoLinkItem: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use this alternative approach if you want to use breadcrumbs without links or buttons.'
      },
    },
  },
  render: (args) => {
    const { label, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumb-item>
        ${label}
      </b2b-breadcrumb-item>
      `
    }; 
  }
};

export const MultipleItem: Story = {
  render: (args) => {
    const { ...props } = args; 
    return {
      props,
      template: `
    <b2b-breadcrumb-item>
      <button>...</button>
    </b2b-breadcrumb-item>
      `
    }; 
  }
};
