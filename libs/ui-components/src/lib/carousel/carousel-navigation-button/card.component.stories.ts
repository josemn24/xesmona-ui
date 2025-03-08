import { B2bIconComponent } from '../../icon/icon.component';
import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';

type StoryType = { arrowIcon: 'left' | 'right', disabled: boolean };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Carousel/Navigation Button',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
  This story shows how to display a navigation button for the carousel without using components, just using CSS classes.
  `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    arrowIcon: 'right',
    disabled: 'false',
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

const renderStory = (args) => {
  const { arrowIcon, disabled, ...props } = args;
  const icon = arrowIcon === 'left' ? 'icon-simple-arrow-left' : 'icon-simple-arrow-right';
  const cssClass = arrowIcon === 'left'
    ? 'b2b-carousel-button b2b-carousel-button-left'
    : 'b2b-carousel-button b2b-carousel-button-right';
  const template = `
    <button class="${cssClass}" [disabled]="${disabled}">
      <b2b-icon name="${icon}" size="lg"></b2b-icon>
    </button>
  `;
  return {
    props,
    template
  }; 
};

export const Default: Story = {
  args: {},
  render: (args) => renderStory(args), 
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => renderStory(args),
};
