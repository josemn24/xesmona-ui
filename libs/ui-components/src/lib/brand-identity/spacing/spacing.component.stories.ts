import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBrandSpacingComponent } from './spacing.component';

type StoryType = B2bBrandSpacingComponent; 
const meta: Meta<StoryType> = {
  component: B2bBrandSpacingComponent,
  title: 'Design System/Brand Identity/Spacing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  The space between elements is a fundamental aspect within the design system. It is based on the grid and is used to indicate how elements relate to each other.
  The spacing system is built on a geometric progression scale.

  NOTE: Spacing tokens are also defined in [ZeroHeight](https://zeroheight.com/20cca505f/p/29cf4b-grid-space-and-layout/t/page-0968b8-46836470-0).
  `,
      },
    },
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: {}
};
