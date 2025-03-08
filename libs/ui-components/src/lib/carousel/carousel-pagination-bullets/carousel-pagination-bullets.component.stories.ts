import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCarouselBulletsComponent } from './carousel-pagination-bullets.component';
import { signal } from '@angular/core';

type StoryType = B2bCarouselBulletsComponent;

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Carousel/Pagination Bullets',
  component: B2bCarouselBulletsComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCarouselBulletsComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.
  
  **Selector**: \`b2b-carousel-pagination-bullets\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;
export default meta;
type Story = StoryObj<B2bCarouselBulletsComponent>;

export const Default: Story = {
  args: {
    bullets: signal(5)(),
    currentIndex: signal(0)(),
  },
};
