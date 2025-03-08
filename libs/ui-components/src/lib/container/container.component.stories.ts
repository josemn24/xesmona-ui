// container.component.stories.ts
import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bContainerComponent } from './container.component';
import { B2bIconComponent } from '../icon';
import { B2bButtonComponent } from '../button/button.component';
import { signal } from '@angular/core';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';

type StoryType = B2bContainerComponent & { content?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Container',
  component: B2bContainerComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bContainerComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-container\``,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReplaceMeComponent,B2bIconComponent,B2bButtonComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {
    isFolded: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Lorem ipsum',
    isFoldable: false,
    isFolded: true,
  }
};

export default meta;
type Story = StoryObj<StoryType>;

const renderStory = (args, containerClass) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, isFoldable, isFolded, ...props } = args;
  const template = `
    <b2b-container [isFoldable]="${isFoldable}" title="${title}" class="${containerClass}">
      <div b2b-container-body>
        <div replace-me style="width: 100%; height: 300px;">Replace me</div>
      </div>
      <div b2b-container-footer style="display: flex; justify-content: space-between;">
        <div replace-me style="width: 100%; height: 100px;">Replace me</div>
      </div>
    </b2b-container>
  `;

  return {
    props,
    template
  };
};

export const Default:Story = {
  args: {
    title: signal('Lorem ipsum')(),
    isFoldable: signal(false)(),
  },
  render: (args) => renderStory(args, 'b2b--primary'),
};

export const WithHeaderFunctions: Story = {
  args: {
    title: signal('Lorem ipsum')(),
    isFoldable: signal(false)(),
  },
  render: (args) => {
    const { title, isFoldable, ...props } = args;
    const template = `
      <b2b-container [isFoldable]="${isFoldable}" title="${title}" class="b2b--primary">
        <div b2b-container-header style="display: flex; justify-content: space-between; gap: 24px;">
            <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
            <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
            <b2b-icon class="b2b-icon-right" name="icon-picture"></b2b-icon>
        </div>
        <div b2b-container-body>
          <div replace-me style="width: 100%; height: 300px;">Replace me</div>
        </div>
        <div b2b-container-footer style="display: flex; justify-content: space-between;">
          <div replace-me style="width: 100%; height: 100px;">Replace me</div>
        </div>
      </b2b-container>
    `;

    return {
      props,
      template
    };
  }
};


export const WithHeaderFoldable: Story = {
  args: {
    title: signal('Lorem ipsum')(),
    isFoldable: signal(true)(),
  },
  render: (args) => {
    const { title, isFoldable, ...props } = args;
    const template = `
      <b2b-container [isFoldable]="${isFoldable}" title="${title}" class="b2b--primary">
        <div b2b-container-body>
          <div replace-me style="width: 100%; height: 300px;">Replace me</div>
        </div>
        <div b2b-container-footer style="display: flex; justify-content: space-between;">
          <div replace-me style="width: 100%; height: 100px;">Replace me</div>
        </div>
      </b2b-container>
    `;

    return {
      props,
      template
    };
  }
};


export const WithHeaderFoldableAndFooterButtons: Story = {
  args: {
    title: signal('Lorem ipsum')(),
    isFoldable: signal(true)(),
  },
  render: (args) => {
    const { title, isFoldable, ...props } = args;
    const template = `
      <b2b-container [isFoldable]="${isFoldable}" title="${title}" class="b2b--primary">
        <div b2b-container-body>
          <div replace-me style="width: 100%; height: 300px;">Replace me</div>
        </div>
        <div b2b-container-footer class="b2b-container-footer-display">
          <button b2b-button class="b2b--tertiary b2b--small" >
            Tertiary
          </button>

          <div class="b2b-container-footer-display">
            <button b2b-button class="b2b--secondary b2b--small">
              Button 2
            </button>
            <button b2b-button class="b2b--primary b2b--small">
              Button 1
            </button>
          </div>
        </div>
      </b2b-container>
    `;

    return {
      props,
      template
    };
  }
};

export const Unfolded: Story = {
  args: {
    title: signal('Lorem ipsum')(),
    isFoldable: signal(true)(),
    isFolded: false
  },
  render: (args) => {
    const { title, isFoldable, isFolded, ...props } = args;
    const template = `
    <b2b-container [isFoldable]="${isFoldable}" [isFolded]="${isFolded}" title="${title}">
      <div b2b-container-body>
        <div replace-me style="width: 100%; height: 300px;">Replace me</div>
      </div>
      <div b2b-container-footer style="display: flex; justify-content: space-between;">
        <div replace-me style="width: 100%; height: 100px;">Replace me</div>
      </div>
    </b2b-container>
  `;

    return {
      props,
      template
    };
  }
};
