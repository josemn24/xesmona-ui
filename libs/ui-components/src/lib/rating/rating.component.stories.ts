import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bRatingComponent } from './rating.component';
import { signal } from '@angular/core';

type StoryType = B2bRatingComponent;

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Atoms/Rating',
  component: B2bRatingComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bRatingComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.
  
  **Selector**: \`b2b-rating\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;
export default meta;
type Story = StoryObj<B2bRatingComponent>;

export const Interactive: Story = {
  args: {
    stars: signal(5)(),
    readOnly: signal(false)(),
    rate: signal(0)(),
  },
};

export const ReadOnly: Story = {
  args: {
    stars: signal(5)(),
    readOnly: signal(true)(),
    rate: signal(3)(),
  },
};
