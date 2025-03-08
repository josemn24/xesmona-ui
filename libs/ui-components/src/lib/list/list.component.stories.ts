import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bListComponent } from './list.component';
import { B2bListFunctionComponent } from './function/list-function.component';
import { B2bListBasicComponent } from './basic/list-basic.component';
import { B2bIconComponent } from '../icon';
import { B2bLinkComponent } from '../link/link.component';

type StoryType = B2bListComponent & { description?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/List',
  component: B2bListComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bListComponent, B2bListFunctionComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-list\``,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent, B2bListFunctionComponent, B2bListBasicComponent, B2bLinkComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<StoryType>;

const renderFunctionStory = (args) => {
  const { size, description, ...props } = args;
  const template =
  `<ul b2b-list size="${size}">
    <li b2b-list-function title="Title 1" description="${description}">
      <ng-container b2b-list-function-icon>
        <a b2b-link href="../">
          <b2b-icon name="icon-picture"></b2b-icon>
        </a>
      </ng-container>
    </li>
    <li b2b-list-function title="Title 2" description="${description}">
      <ng-container b2b-list-function-icon>
        <a b2b-link href="../">
          <b2b-icon name="icon-picture"></b2b-icon>
        </a>
      </ng-container>
    </li>
    <li b2b-list-function title="Title 3" description="${description}">
      <ng-container b2b-list-function-icon>
        <a b2b-link href="../">
          <b2b-icon name="icon-picture"></b2b-icon>
        </a>
      </ng-container>
    </li>
    <li b2b-list-function title="Title 4" description="${description}">
      <ng-container b2b-list-function-icon>
        <a b2b-link href="../">
          <b2b-icon name="icon-picture"></b2b-icon>
        </a>
      </ng-container>
    </li>
  </ul>`;
  return {
    props,
    template
  }; 
};

export const FunctionS: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: (args) => renderFunctionStory(args), 
};

export const FunctionM: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'md',
  },
  render: (args) => renderFunctionStory(args), 
};

const renderBasicStory = (args) => {
  const { size, ...props } = args;
  const template =
  `<ul b2b-list size="${size}">
    <li b2b-list-basic title="Title 1">
      <ng-container b2b-list-basic-icon>
        <b2b-icon name="icon-picture" size="${size ? 'lg' : 'md'}"></b2b-icon>
      </ng-container>
    </li>
    <li b2b-list-basic title="Title 2">
      <ng-container b2b-list-basic-icon>
        <b2b-icon name="icon-picture" size="${size ? 'lg' : 'md'}"></b2b-icon>
      </ng-container>
    </li>
    <li b2b-list-basic title="Title 3">
      <ng-container b2b-list-basic-icon>
        <b2b-icon name="icon-picture" size="${size ? 'lg' : 'md'}"></b2b-icon>
      </ng-container>
    </li>
    <li b2b-list-basic title="Title 4">
      <ng-container b2b-list-basic-icon>
        <b2b-icon name="icon-picture" size="${size ? 'lg' : 'md'}"></b2b-icon>
      </ng-container>
    </li>
  </ul>`;
  return {
    props,
    template
  }; 
};

export const BasicS: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  render: (args) => renderBasicStory(args)
};

export const BasicM: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'md',
  },
  render: (args) => renderBasicStory(args)
};
