import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBreadcrumbsComponent } from './breadcrumbs.component';
import { B2bBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { B2BOptionsMenuTriggerDirective } from '../options-menu/options-menu-trigger.directive';
import { B2bOptionsMenuComponent } from '../options-menu/options-menu.component';
import { B2bOptionsMenuItemComponent } from '../options-menu/components/options-menu-item/options-menu-item.component';

type StoryType = B2bBreadcrumbsComponent & { label?: string,url?: string, active?: boolean }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Breadcrumbs',
  component: B2bBreadcrumbsComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bBreadcrumbsComponent, B2bBreadcrumbItemComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the following component selectors to wrap the items.

  **Selector**: \`b2b-breadcrumbs\`, \`b2b-breadcrumb-item\`

  NOTE: In mobile version you need [the options menu component](/docs/b2b-components-design-system-components-molecules-options-menu--docs) to show all the items.
  `,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        B2bBreadcrumbsComponent,
        B2bBreadcrumbItemComponent,
        B2BOptionsMenuTriggerDirective,
        B2bOptionsMenuComponent,
        B2bOptionsMenuItemComponent
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
   url: {
      description: 'The path to navigate.',
      control: 'text'
    }
  },
  args: {
    url: '../',
  }
} as Meta;

export default meta;
type Story = StoryObj<StoryType>;

export const Basic: Story = {
  render: (args) => {
    const { url, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumbs>
        <b2b-breadcrumb-item>
          <a href="${url}">Home</a>
        </b2b-breadcrumb-item>
        <b2b-breadcrumb-item>
          <a href="${url}">Level 2</a>
        </b2b-breadcrumb-item>
        <b2b-breadcrumb-item>
          <a href="${url}">Level 3</a>
        </b2b-breadcrumb-item>
        <b2b-breadcrumb-item>
          <a href="${url}">Level 4</a>
        </b2b-breadcrumb-item>
        <b2b-breadcrumb-item>
          <a class="b2b--selected" href="">Current</a>
        </b2b-breadcrumb-item>
      </b2b-breadcrumbs>
      `
    }; 
  }
};

export const Bar: Story = {
  render: (args) => {
    const { url, ...props } = args; 
    return {
      props,
      template: `
      <div style="background-color: var(--b2b-gray-scale-04); padding: 0.25rem 0 0.25rem 0;">
        <b2b-breadcrumbs class="b2b-breadcrumbs-bar">
          <b2b-breadcrumb-item>
            <a href="${url}">Home</a>
          </b2b-breadcrumb-item>
          <b2b-breadcrumb-item>
            <a href="${url}">Level 2</a>
          </b2b-breadcrumb-item>
          <b2b-breadcrumb-item>
            <a href="${url}">Level 3</a>
          </b2b-breadcrumb-item>
          <b2b-breadcrumb-item>
            <a href="${url}">Level 4</a>
          </b2b-breadcrumb-item>
          <b2b-breadcrumb-item>
            <a class="b2b--selected" href="${url}">Current</a>
          </b2b-breadcrumb-item>
        </b2b-breadcrumbs>
      </div>
      `
    }; 
  }
};

export const Multiple: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `B2BMenuTriggerDirective` to display the `B2bOptionsMenuComponent`.'
      },
    },
  },
  render: (args) => {
    const { url, ...props } = args; 
    return {
      props,
      template: `
      <b2b-breadcrumbs>
        <b2b-breadcrumb-item><a href="${url}">Home</a></b2b-breadcrumb-item>
        <b2b-breadcrumb-item>
          <button [b2bOptionsMenuTrigger]="menu">...</button>
        </b2b-breadcrumb-item>
        <b2b-breadcrumb-item><a class="b2b--selected" href="${url}">Level 5</a></b2b-breadcrumb-item>
      </b2b-breadcrumbs>
  
      <ul b2b-options-menu #menu [gap]="8">
        <li>
          <b2b-breadcrumb-item>
            <a b2b-options-menu-item href="${url}">Level 2</a>
          </b2b-breadcrumb-item>
        </li>
        <li>
          <b2b-breadcrumb-item>
            <a b2b-options-menu-item href="${url}">Level 3</a>
          </b2b-breadcrumb-item>
        </li>
        <li>
          <b2b-breadcrumb-item>
            <a b2b-options-menu-item href="${url}">Level 4</a>
          </b2b-breadcrumb-item>
        </li>
      </ul>
      `
    }; 
  }
};
