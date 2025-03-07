import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBrandBreakpointsComponent } from './breakpoints.component';

type StoryType = B2bBrandBreakpointsComponent; 
const meta: Meta<StoryType> = {
  component: B2bBrandBreakpointsComponent,
  title: 'Design System/Brand Identity/Breakpoints',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes.

  NOTE: The breakpoints are also defined in [ZeroHeight](https://zeroheight.com/20cca505f/p/29cf4b-grid-space-and-layout/t/page-29cf4b-82822951-299131-10).
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
