import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bFloatingScrollTopButtonComponent } from './floating-scroll-top-button.component';
import { B2bIconComponent } from '../../icon';

type StoryType = B2bFloatingScrollTopButtonComponent; 

const meta: Meta<StoryType> = {
  component: B2bFloatingScrollTopButtonComponent,
  title: 'Design System/Components/Atoms/Floating Button/Scroll top',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bFloatingScrollTopButtonComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-floating-scroll-top-button\`
  `,
      },
    },
  },
  args: {},
  render: (args) => {
    const { ...props } = args; 
    return {
      props,
      template: `
      <b2b-floating-scroll-top-button>
        <b2b-icon name="icon-simple-arrow-up" size="lg"></b2b-icon>
      </b2b-floating-scroll-top-button>
      `
    }; 
  }, 
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const ScrollTop: Story = {
  parameters: {
    docs: {
      description: {
        story: `**Note**: This component will scroll to the top of the page when clicked.`,
      },
    },
  },
  args: {},
};
