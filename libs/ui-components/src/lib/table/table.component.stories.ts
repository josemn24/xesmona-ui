import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bTableContainerComponent } from './table-container.component';
import { B2bIconComponent } from '../icon';
import { B2bButtonComponent } from '../button/button.component';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';

type StoryType = B2bTableContainerComponent & { content?: string };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Table',
  component: B2bTableContainerComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bTableContainerComponent } from '@mapfre-tech/b2b-components';

  The current library does not provide a table component. To display a table, you can use another library such as Angular Material or AG Grid.
  B2bTableContainerComponent is a wrapper for a table component. It provides a header, footer bar, and a body to display a table.
  In order to use this component, use the following component selector.

  **Selector**: \`b2b-table-container\`

  NOTE: You can read our guide on integrating [Angular Material](https://material.angular.io/) and interacting with the Angular Material table in [this example documentation](https://b2b-spa.mar.mapfre.com/components/table).
  `,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReplaceMeComponent, B2bIconComponent, B2bButtonComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The title of the container.',
      control: 'text'
    }
  },
  args: {
    title: 'Lorem ipsum',
  }
} as Meta;

export default meta;
type Story = StoryObj<StoryType>;

const renderStory = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, ...props } = args;
  const template = `
    <b2b-table-container title="${title}">
      <div b2b-table-container-body>
        <div replace-me style="width: 100%; height: 300px;">Table</div>
      </div>
    </b2b-table-container>
  `;

  return {
    props,
    template
  };
};

export const Default:Story = {
  args: {
    title: 'Lorem ipsum',
  },
  render: (args) => renderStory(args),
};

export const WithHeaderFunctions: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: In order to show custom icon functions you have to use [b2b-table-container-header]`,
      },
    },
  },
  args: {
    title: 'Lorem ipsum',
  },
  render: (args) => {
    const { title, ...props } = args;
    const template = `
    <b2b-table-container title="${title}">
      <div b2b-table-container-header style="display: flex; gap: 24px;">
        <b2b-icon name="icon-picture"></b2b-icon>
        <b2b-icon name="icon-picture"></b2b-icon>
        <b2b-icon name="icon-picture"></b2b-icon>
      </div>

      <div b2b-table-container-body>
        <div replace-me style="width: 100%; height: 300px;">Table</div>
      </div>
    </b2b-table-container>
    `;

    return {
      props,
      template
    };
  }
};

export const WithFooterButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: In order to show a bottom bar you have to use [b2b-table-container-footer]`,
      },
    },
  },
  args: {
    title: 'Lorem ipsum',
  },
  render: (args) => {
    const { title, ...props } = args;
    const template = `
    <b2b-table-container title="${title}">
      <div b2b-table-container-header style="display: flex; gap: 24px;">
        <b2b-icon name="icon-picture"></b2b-icon>
        <b2b-icon name="icon-picture"></b2b-icon>
        <b2b-icon name="icon-picture"></b2b-icon>
      </div>

      <div b2b-table-container-body>
        <div replace-me class="no-border-bottom" style="width: 100%; height: 300px;">Table</div>
      </div>

      <div b2b-table-container-footer class="b2b-bottom-bar">
          <button b2b-button class="b2b--tertiary">
            Tertiary
          </button>
          <div class="b2b-buttons-right">
              <button b2b-button class="b2b--secondary">
                Secondary
              </button>
              <button b2b-button class="b2b--primary">
                Primary
              </button>
          </div>
      </div>
    </b2b-table-container>
    `;

    return {
      props,
      template
    };
  }
};
