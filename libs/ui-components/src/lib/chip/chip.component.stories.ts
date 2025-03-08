import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bChipComponent } from './chip.component';

type StoryType = B2bChipComponent & { label?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Atoms/Chip',
  component: B2bChipComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bChipComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following attribute selector.

  **Selector**: \`[b2b-chip]\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
   label: {
      description: 'The label to show.',
      control: 'text'
    },
   size: {
      description: 'The size of the chip.',
      control: 'text',
    },
   type: {
      description: 'The style of the chip.',
      control: 'text',
    },
   selected: {
      description: 'Shows the selected styles.',
      control: 'boolean',
    },
    removable: {
      description: 'Shows an icon to close that chip.',
      control: 'boolean',
    },
  },
  args: {
    label: 'Label',
  }
} as Meta;

export default meta;
type Story = StoryObj<StoryType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const { label, size, type, removable, selected, ...props } = args;
  const template =
    `<button
      b2b-chip
      type="${type ?? ''}"
      size="${size ?? ''}"
      [removable]="${removable ?? false}"
      [selected]=${selected ?? false}
    >
        ${label}
    </button>`;
  return {
    props,
    template
  }; 
};

export const Default: Story = {
  args: {
    label: 'Chip'
  },
  render: (args) => renderStory(args), 
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Chip'
  },
  render: (args) => renderStory(args), 
};

export const Removable: Story = {
  args: {
    removable: true,
    label: 'Chip'
  },
  render: (args) => renderStory(args), 
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    label: 'Chip'
  },
  render: (args) => renderStory(args), 
};

export const Selected: Story = {
  args: {
    selected: true,
    label: 'Chip'
  },
  render: (args) => renderStory(args), 
};
