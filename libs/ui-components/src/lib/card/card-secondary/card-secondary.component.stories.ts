import {
    componentWrapperDecorator,
    moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCardSecondaryComponent } from './card-secondary.component';
import { B2bIconComponent } from '../../icon/icon.component';
import { ReplaceMeComponent } from '../../../shared/components/replace-me.component';
import { B2bLinkComponent } from '../../link/link.component';

type StoryType = B2bCardSecondaryComponent & { labelTop?: string, labelBottom?: string, placeholder?: string };

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Card/Card Secondary',
  component: B2bCardSecondaryComponent,
  decorators: [
    moduleMetadata({
      imports: [B2bLinkComponent, B2bIconComponent, ReplaceMeComponent],
    }),
    componentWrapperDecorator((story) => `<div style="max-width: 400px;">${story}</div>`)
  ],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCardSecondaryComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below attribute selector.
  
  **Selector**: \`[b2b-card-secondary]\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    labelTop: {
        description: 'The top label content.',
        control: 'text',
    },
    labelBottom: {
        description: 'The bottom label content.',
        control: 'text',
    },
    placeholder: {
        description: 'The position of the placeholder.',
        control: 'radio',
        options: ['upper', 'lower'],
    },
    contentAlign: {
        description: 'The alignment of the content.',
        control: 'radio',
        options: ['center', 'left'],
    },
  },
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales a justo et lobortis. Integer interdum eros.',
    contentAlign: 'left',
    placeholder: 'upper',
    labelTop: '',
    labelBottom: '',
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Playground: Story = {
    args: {},
    render: (args) => {
      const { title, description, contentAlign, labelTop, labelBottom, placeholder, ...props } = args; 
      return {
        props,
        template: `
          <div b2b-card-secondary title="${title}" description="${description}" contentAlign="${contentAlign}">
            @if (${labelTop !== ''}) {
                <ng-container b2b-card-label-top>${labelTop}</ng-container>
            }
    
            @if (${placeholder === 'upper'}) {
                <ng-container b2b-card-placeholder-upper>
                  <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
                </ng-container>
            }

            @if (${placeholder === 'lower'}) {
                <ng-container b2b-card-placeholder-lower>
                  <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
                </ng-container>
            }
    
            <ng-container b2b-card-footer>
              <a b2b-link href="">
                Action link
                <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
              </a>
            </ng-container>
    
           @if (${labelBottom !== ''}) {
                <ng-container b2b-card-label-bottom>${labelBottom}</ng-container>
            }
          </div>
        `,
      }
    },
};

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-secondary [title]="title" [description]="description" tabIndex="0">
        <ng-container b2b-card-placeholder-upper>
          <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
        </ng-container>

        <ng-container b2b-card-footer>
          <a b2b-link href="">
            Action link
            <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
          </a>
        </ng-container>
      </div>
    `,
  }),
};

export const PlaceholderLower: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-secondary [title]="title" [description]="description">
        <ng-container b2b-card-placeholder-lower>
          <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
        </ng-container>
  
        <ng-container b2b-card-footer>
          <a b2b-link href="">
            Action link
            <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
          </a>
        </ng-container>
      </div>
    `,
  }),
};

export const AlignCenter: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-secondary contentAlign="center" [title]="title" [description]="description">
        <ng-container b2b-card-placeholder-upper>
          <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
        </ng-container>
  
        <ng-container b2b-card-footer>
          <a b2b-link href="">
            Action link
            <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
          </a>
        </ng-container>
      </div>
    `,
  }),
};

export const Label: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div b2b-card-secondary [title]="title" [description]="description">
        <ng-container b2b-card-label-top>LABEL</ng-container>
  
        <ng-container b2b-card-placeholder-upper>
          <div replace-me style="width: 100%; height: 4rem;">Replace me</div>
        </ng-container>
  
        <ng-container b2b-card-footer>
          <a b2b-link href="">
            Action link
            <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-right"></b2b-icon>
          </a>
        </ng-container>
  
        <ng-container b2b-card-label-bottom>LABEL</ng-container>
      </div>
    `,
  }),
};
