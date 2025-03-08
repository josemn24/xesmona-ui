import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bSpinnerComponent } from './spinner.component';

const meta: Meta<B2bSpinnerComponent> = {
  component: B2bSpinnerComponent,
  title: 'Design System/Components/Atoms/Spinner',
  decorators: [componentWrapperDecorator((story) => `${story}`)],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bSpinnerComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-spinner\``,
      },
    },
  },
  argTypes: {
    description: {
      description: 'The label text of the spinner.',
      control: 'text',
      color: 'The color of the text',
    },
    '--b2b-spinner-color': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-brand-red-01)' },
        type: { summary: 'The spinner color' },
      },
    },
    '--b2b-spinner-description-color': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-brand-blue-01)' },
        type: { summary: 'The color of the text' },
      },
    },
  },
  args: {
    description: 'Lorem ipsum dolor sit amet',
  },
} as Meta;
export default meta;
type Story = StoryObj<B2bSpinnerComponent>;

export const Basic: Story = {
  args: { description: '' }
};

export const Text: Story = {
  args: { description: 'Lorem ipsum dolor sit amet' }
};
