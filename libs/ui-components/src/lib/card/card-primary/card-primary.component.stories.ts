import {
    componentWrapperDecorator,
    moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCardPrimaryComponent } from './card-primary.component';
import { ReplaceMeComponent } from '../../../shared/components/replace-me.component';
import { InputSignal, signal } from '@angular/core';
import { sign } from 'crypto';

type StoryType = B2bCardPrimaryComponent & { placeholder?: string };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Card/Card Primary',
  component: B2bCardPrimaryComponent,
  decorators: [
    moduleMetadata({
      imports: [ReplaceMeComponent],
    }),
    componentWrapperDecorator((story) => `<div style="max-width: 400px;">${story}</div>`)
  ],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCardPrimaryComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below attribute selector.
  
  **Selector**: \`[b2b-card-primary]\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'The position of the placeholder.',
      control: 'radio',
      options: ['upper', 'lower'],
    },
  },
  args: {
    placeholder: 'lower',
    title: signal('Title')(),
    description: signal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales a justo et lobortis. Integer interdum eros.')(),
    imageAspectRatio: signal('widescreen')(),
    imageSrc: signal('assets/b2b-components/img/card_img_placeholder.png')(),
    elevated: signal(false)(),
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Playground: Story = {
  render: (args) => {
    const { imageAspectRatio, imageSrc, title, description, elevated, placeholder, ...props } = args; 
    return {
      props,
      template: `
        <div b2b-card-primary imageAspectRatio="${imageAspectRatio}" imageSrc="${imageSrc}" title="${title}" description="${description}" [elevated]="${elevated}">
          @if (${placeholder === 'upper'}) {
            <ng-container b2b-card-placeholder-upper>
              <div replace-me style="height: 4rem;">Replace me</div>
            </ng-container>
          }
            
          @if (${placeholder === 'lower'}) {
            <ng-container b2b-card-placeholder-lower>
              <div replace-me style="border-radius: 0 0 0.5rem 0.5rem; height: 4rem;">Replace me</div>
            </ng-container>
          }
        </div>
      `,
    }
  },
};

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-primary [imageSrc]="imageSrc" [title]="title" [description]="description" tabIndex="0">
        <ng-container b2b-card-placeholder-lower>
          <div replace-me style="border-radius: 0 0 0.5rem 0.5rem; height: 4rem;">Replace me</div>
        </ng-container>
      </div>
    `,
  }),
};

export const Elevated: Story = {
  parameters: {
    docs: {
      description: {
        story: `The card is not elevated by default. To add an elevated shadow, set the \`elevated\` input to \`true\`.`,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-primary [imageSrc]="imageSrc" [title]="title" [description]="description" [elevated]="true" tabIndex="0">
        <ng-container b2b-card-placeholder-lower>
          <div replace-me style="height: 4rem;">Replace me</div>
        </ng-container>
      </div>
    `,
  }),
};

export const Square: Story = {
  parameters: {
    docs: {
      description: {
        story: `The default aspect ratio of the card image is widescreen. To change the aspect ratio to square, set the \`imageAspectRatio\` input to \`square\`.`,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-primary imageAspectRatio="square" [imageSrc]="imageSrc" [title]="title" [description]="description" tabIndex="0">
        <ng-container b2b-card-placeholder-lower>
          <div replace-me style="border-radius: 0 0 0.5rem 0.5rem; height: 4rem;">Replace me</div>
        </ng-container>
      </div>
    `,
  }),
};

export const PlaceholderUpper: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-primary [imageSrc]="imageSrc" [title]="title" [description]="description">
        <ng-container b2b-card-placeholder-upper>
          <div replace-me style="height: 4rem;">Replace me</div>
        </ng-container>
      </div>
    `,
  }),
};
