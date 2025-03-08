import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bIconComponent } from './icon.component';

type StoryType = B2bIconComponent; 
const createArgType = (defaultValue, type) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});
const meta: Meta<StoryType> = {
  component: B2bIconComponent,
  title: 'Design System/Components/Atoms/Icon',
  decorators: [
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bIconComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-icon\`
  
  NOTE: You can read the icon specification and names in the [Iconography section](https://zeroheight.com/20cca505f/p/5955b7-iconography).
  `,
      },
    },
  },
  argTypes: {
    name: {
      description: 'The icon name.',
      control: 'text',
    },
    size: {
      description: 'The icon size.',
      control: 'text',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    '--b2b-icon-color': createArgType('', 'The icon color'),
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: { name: 'icon-picture' }
};

export const Small: Story = {
  args: { name: 'icon-picture', size: 'sm' }
};

export const Large: Story = {
  args: { name: 'icon-picture', size: 'lg' }
};

export const ExtraLarge: Story = {
  args: { name: 'icon-picture', size: 'xl' }
};

export const CustomColor: Story = {
  args: { name: 'icon-picture', size: 'md' },
  render: (args) => {
    const { name, size, ...props } = args; 
    return {
      props,
      template:
      `
        <b2b-icon name="${name}" size="${size}" style="--b2b-icon-color: var(--b2b-brand-red-01)">
        </b2b-icon>
      `
    };
  }
};
