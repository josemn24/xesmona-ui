import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bProgressBarCircularComponent } from './progress-bar-circular.component';

const meta: Meta<B2bProgressBarCircularComponent> = {
  component: B2bProgressBarCircularComponent,
  title: 'Design System/Components/Atoms/Progress bar/Circular',
  decorators: [componentWrapperDecorator((story) => `${story}`)],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bProgressBarCircularComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the following component selector.
  
  **Selector**: \`b2b-progress-bar-circular\``,
      },
    },
  },
  argTypes: {},
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<B2bProgressBarCircularComponent>;

export const Cicular: Story = {
  args: { progress: 25 }
};
