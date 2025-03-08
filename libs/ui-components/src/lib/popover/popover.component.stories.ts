import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bPopOverComponent } from './popover.component';
import { B2bPopOverDirective } from './popover.directive';
import { B2bIconComponent } from '../icon';
import { B2bButtonComponent } from '../button';
import { B2bLinkComponent } from '../link/link.component';

const meta: Meta<B2bPopOverComponent> = {
  component: B2bPopOverComponent,
  title: 'Design System/Components/Atoms/Popover',
  decorators: [
    moduleMetadata({
      imports: [
        B2bButtonComponent,
        B2bIconComponent,
        B2bPopOverDirective,
        B2bLinkComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="display: inline-block">${story}</div>`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bPopOverComponent, B2bPopOverDirective } from '@mapfre-tech/b2b-components';

  Use B2bPopOverDirective in the element that is the trigger to display the Popover.
  
  **Selector**: \`[b2b-popover]\``,
      },
    },
  },
  argTypes: {
    popoverPosition: {
      description: 'Determines where the popover will appear.',
      control: 'text'
    },
    '--b2b-popover-background-color': {
      table: {
        category: 'css custom properties',
        type: { summary: 'The background color' },
      },
    },
    '--b2b-popover-border-radius': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: '0.25rem' },
        type: { summary: 'The border radius' },
      },
    },
    '--b2b-popover-arrow-color': {
      table: {
        category: 'css custom properties',
        type: { summary: 'The arrow color' },
      },
    },
    '--b2b-popover-font-family': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-font-family)' },
        type: { summary: 'The font family' },
      },
    },
    '--b2b-popover-font-weight': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-font-weight-regular)' },
        type: { summary: 'The font weight' },
      },
    },
    '--b2b-popover-font-size': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: '0.875rem' },
        type: { summary: 'The font size' },
      },
    },
  },
  args: {
  },
  render: (args) => {
    const { popoverPosition, ...props } = args; 
    return {
      props,
      template: `
        <b2b-icon tabindex="0" name="icon-info" b2b-popover [popoverContent]="popoverHtml" popoverPosition="${popoverPosition}">
        </b2b-icon>

        <ng-template #popoverHtml>
          <div class="popover-content">
            <span class="popover-title">Title</span>
            <p class="popover-description">Lorem ipsum dolor sit amet</p>
            <div class="popover-body">
              <button b2b-button class="b2b--secondary b2b--small">Secondary</button>
              <button b2b-button class="b2b--primary b2b--small">Primary</button>
            </div>
          </div>
        </ng-template>
      `
    }; 
  }, 
} as Meta;
export default meta;
type Story = StoryObj<B2bPopOverComponent>;

// Función para generar historias
function createStory(popoverPosition: 'top' | 'bottom' | 'left' | 'right'): Story {
  return {
    args: {
      popoverPosition
    }
  };
}

export const Top: Story = createStory('top');
export const Right: Story = createStory('right');
export const Bottom: Story = createStory('bottom');
export const Left: Story = createStory('left');

export const ActionLink: Story = {
  args: {
    popoverPosition: 'top',
  },
  render: (args) => {
    const { popoverPosition, ...props } = args; 
    return {
      props,
      template: `
      <b2b-icon tabindex="0" name="icon-info" b2b-popover [popoverContent]="popoverHtmlLink" popoverPosition="${popoverPosition}">
      </b2b-icon>

      <ng-template #popoverHtmlLink>
        <div class="popover-content">
          <span class="popover-title">Title</span>
      
          <p class="popover-description">Lorem ipsum dolor sit amet</p>
      
          <div class="popover-body">
            <a b2b-link>Action link</a>
            <a b2b-link>Action link</a>
          </div>
        </div>
      </ng-template>
      `
    }; 
  }
};

export const Custom: Story = {
  args: {
    popoverPosition: 'top',
  },
  render: (args) => {
    const { popoverPosition, ...props } = args; 
    return {
      props,
      template: `
        <b2b-icon tabindex="0" name="icon-info" b2b-popover [popoverContent]="popoverHtmlReplace" popoverPosition="${popoverPosition}">
        </b2b-icon>

        <ng-template #popoverHtmlReplace>
          <div style="
          width: 250px;
          height: 50px;
          text-transform: uppercase;
          color: #9747FF;
          background: #EADAFF;
          border: 1px #9747FF dotted; 
          display: inline-flex;
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
          font-size: 16px;">
            Replace me
          </div>
        </ng-template>
      `
    }; 
  }
};
