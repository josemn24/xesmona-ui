import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { B2bFooterComponent } from './footer.component';
import { B2bLinkComponent } from '../link/link.component';
import { B2bIconComponent } from '../icon/icon.component';

type StoryType = B2bFooterComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Footer',
  component: B2bFooterComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bFooterComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-footer\``,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
      ],
    }),
    moduleMetadata({
      imports: [B2bFooterComponent, B2bLinkComponent, B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {
   content: {
      description: 'The text content.',
      control: 'text'
    },
    hasActions: {
      description: 'Shows an empty footer to insert custom items',
      control: 'boolean'
    },
    hasExternalActions: {
      description: 'Shows another empty footer to insert custom items',
      control: 'boolean'
    },
  },
  args: {
    content: 'MAPFRE © 2024 Lorem ipsum dolor sit amet'
  },
} as Meta;

export default meta;
type Footer = StoryObj<B2bFooterComponent>;

export const Copyright: Footer = {
  args: {
    hasActions: false,
    hasExternalActions: false
  },
  render: (args) => {
    const { content, hasActions, hasExternalActions, ...props } = args;
    return {
      props,
      template: `
      <b2b-footer content="${content}" [hasActions]="${hasActions}" [hasExternalActions]="${hasExternalActions}">
      </b2b-footer>
      `
    }; 
  }
};

export const Basic: Footer = {
  args: {
    hasActions: true,
    hasExternalActions: false
  },
  render: (args) => {
    const { content, hasActions, hasExternalActions, ...props } = args;
    return {
      props,
      template: `
      <b2b-footer content="${content}" [hasActions]="${hasActions}" [hasExternalActions]="${hasExternalActions}">
        <ng-container b2b-footer-links>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 1</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 2</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 3</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 4</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 5</a>
        </ng-container>
      </b2b-footer>
      `
    }; 
  }
};

export const WithLinks: Footer = {
  args: {
    hasExternalActions: true,
    hasActions: true
  },
  render: (args) => {
    const { content, hasActions, hasExternalActions, ...props } = args;
    return {
      props,
      template: `
      <b2b-footer content="${content}" [hasActions]="${hasActions}" [hasExternalActions]="${hasExternalActions}">
        <ng-container b2b-footer-links>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 1</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 2</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 3</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 4</a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">Basic 5</a>
        </ng-container>

        <ng-container b2b-footer-external-links>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">
            Link 1
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
          </a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">
            Link 2
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
          </a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">
            Link 3
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
          </a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">
            Link 4
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
          </a>
          <a b2b-link class="b2b--secondary b2b--small" href="https://zeroheight.com/065e288e4/v/latest/p/871867-footer/b/1746c9">
            Link 5
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="sm"></b2b-icon>
          </a>
        </ng-container>
      </b2b-footer>
      `
    }; 
  }
};
