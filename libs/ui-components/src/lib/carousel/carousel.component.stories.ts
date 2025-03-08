/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCarouselComponent } from './carousel.component';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';
import { signal } from '@angular/core';
import { B2bCardPrimaryComponent } from '../card/card-primary/card-primary.component';

type StoryType = B2bCarouselComponent & { carouselItems: any[] };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Carousel',
  component: B2bCarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [ReplaceMeComponent, B2bCardPrimaryComponent],
    })
  ],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCarouselComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.
  
  **Selector**: \`b2b-carousel\`

  NOTE: You can render a carousel with any kind of content. Use ng-template#carouselItem for each carousel item.
  `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    itemsPerView: signal(3)(),
    buttonsOffset: signal(false)(),
    carouselItems: [
      { title: 'Card 1', description: 'Description for card 1' },
      { title: 'Card 2', description: 'Description for card 2' },
      { title: 'Card 3', description: 'Description for card 3' },
      { title: 'Card 4', description: 'Description for card 4' },
      { title: 'Card 5', description: 'Description for card 5' },
    ],
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Playground: Story = {
  render: (args) => {
    const { itemsPerView, buttonsOffset, carouselItems, ...props } = args; 
    return {
      props,
      template: `
        <b2b-carousel itemsPerView="${itemsPerView}" [buttonsOffset]="${buttonsOffset}">
          @for (item of ${JSON.stringify(carouselItems)}; track $index) {
            <ng-template #carouselItem>
              <div replace-me style="box-sizing: border-box; border-radius: 0.5rem; width: 100%; height: 15rem;">Replace me</div>
            </ng-template>
          }
        </b2b-carousel>
      `,
    }
  },
};

export const CarouselCards: Story = {
  args: {
    itemsPerView: signal(2)(),
    buttonsOffset: signal(true)(),
  },
  render: (args) => {
    const { itemsPerView, buttonsOffset, carouselItems, ...props } = args; 
    return {
      props,
      template: `
        <b2b-carousel itemsPerView="${itemsPerView}" [buttonsOffset]="${buttonsOffset}">
          @for (item of ${JSON.stringify(carouselItems)}; track $index) {
            <ng-template #carouselItem>
              <div b2b-card-primary [title]="item.title" [description]="item.description" imageSrc="assets/b2b-components/img/card_img_placeholder.png" [elevated]="true">
              </div>
            </ng-template>
          }
        </b2b-carousel>
      `,
    }
  },
};

export const CarouselImages: Story = {
  args: {
    itemsPerView: signal(2)(),
    buttonsOffset: signal(false)(),
    carouselItems: [
      'assets/b2b-components/img/card_img_placeholder.png',
      'assets/b2b-components/img/zeroHeight.png',
      'assets/b2b-components/img/card_img_placeholder.png',
      'assets/b2b-components/img/zeroHeight.png',
      'assets/b2b-components/img/card_img_placeholder.png',
    ],
  },
  render: (args) => {
    const { itemsPerView, buttonsOffset, carouselItems, ...props } = args; 
    return {
      props,
      template: `
        <b2b-carousel itemsPerView="${itemsPerView}" [buttonsOffset]="${buttonsOffset}">
          @for (item of ${JSON.stringify(carouselItems)}; track $index) {
            <ng-template #carouselItem>
              <img
                class="b2b-carrousel-image-wrapper b2b-carrousel-image-widescreen b2b-carrousel-image-cover"
                [src]="item"
                alt="Image"
              >
            </ng-template>
          }
        </b2b-carousel>
      `,
    }
  },
};
