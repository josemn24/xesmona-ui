import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';
import { B2bLinkComponent } from '../link/link.component';
import { B2bIconComponent } from '../icon/icon.component';

type StoryType = { title: string, description: string, imageSrc: string };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Card/Card',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent, B2bLinkComponent, ReplaceMeComponent],
    }),
    componentWrapperDecorator((story) => `<div style="max-width: 400px;">${story}</div>`)
  ],
  parameters: {
    docs: {
      description: {
        component: `
  This story shows how to display a **Card** without using components, just using CSS classes.
  This is useful when you want to show a card that doesn't match the existing card variations components (Card Primary and Card Secondary).
  It is preferred to use the Card Primary and Card Secondary components when possible.
  `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    imageSrc: 'assets/b2b-components/img/card_img_placeholder.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales a justo et lobortis. Integer interdum eros.',
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
  render: (args) => {
    const { imageSrc, title, description, ...props } = args; 
    return {
      props,
      template: `
        <div class="b2b-card b2b-card-primary b2b-card-elevated" tabindex="0">
          <div class="b2b-card-image b2b-card-image-widescreen">
            <img src="${imageSrc}" alt="Card Image" />
          </div>

          <div class="b2b-card-body">
            <div>
              <div class="b2b-card-title b2b-titles-size-09">${title}</div>
              <p>${description}</p>
            </div>

            <div replace-me style="height: 4rem;">Replace me</div>
          </div>
        </div>
    `,
    }
  },
};

export const Secondary: Story = {
  render: (args) => {
    const { title, description, ...props } = args; 
    return {
      props,
      template: `
        <div class="b2b-card b2b-card-secondary b2b-card-content-center" tabindex="0">
          <div class="b2b-card-label b2b-card-label-top">
            LABEL
          </div>

          <div class="b2b-card-container">
            <div class="b2b-card-body">
              <div class="b2b-card-title b2b-titles-size-09">${title}</div>
              <p>${description}</p>
            </div>

            <div>
              <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
            </div>
    
            <div style="display: flex; justify-content: center; align-items: center;">
              <a b2b-link href="">
                Action link
                <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
              </a>
            </div>
          </div>

          <div class="b2b-card-label b2b-card-label-bottom">
            LABEL
          </div>
        </div>
      `,
    }
  }
};
