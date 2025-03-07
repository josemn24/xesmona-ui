import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { B2bProgressBarInlineComponent } from './progress-bar-inline.component';

type StoryType = B2bProgressBarInlineComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Atoms/Progress bar/Inline',
  component: B2bProgressBarInlineComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bProgressBarInlineComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-progress-bar-inline\``,
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
      imports: [B2bProgressBarInlineComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;
type Inline = StoryObj<B2bProgressBarInlineComponent>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderStory = (args) => {
  const { title, progress, max, ...props } = args;
  const template =
    `<b2b-progress-bar-inline title="${title}" [progress]="${progress}" [max]="${max}"></b2b-progress-bar-inline>`;
  return {
    props,
    template
  }; 
};

export const Inline: Inline = {
  args: {
    title: 'Title',
    progress: 25,
    max: 100, 
  },
  render: (args) => renderStory(args), 
};
