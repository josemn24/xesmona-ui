import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBrandTypographyComponent } from './typography.component';

type StoryType = B2bBrandTypographyComponent; 
const meta: Meta<StoryType> = {
  component: B2bBrandTypographyComponent,
  title: 'Design System/Brand Identity/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  Typography, in addition to communicating, serves to create clear hierarchies
  and useful organizations that guide the user through content and the experience.

  NOTE: The typography identity is defined in [ZeroHeight](https://zeroheight.com/20cca505f/p/974348-typography).
  `,
      },
    },
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const FontFamily: Story = {
  parameters: {
    docs: {
      description: {
        story: `DM Sans is a low-contrast geometric sans-serif typeface suitable for any content element.
        To guide implementation, a series of styles and sizes have been established to regulate its usage.
        DM Sans is available on [Google Fonts](https://fonts.google.com/specimen/DM+Sans).
        `,
      },
    },
  },
  args: { typographyProperty: 'fontFamily' }
};

export const FontWeight: Story = {
  args: { typographyProperty: 'fontWeight' }
};

export const FontSize: Story = {
  parameters: {
    docs: {
      description: {
        story: `The typography is based on a modular scale that, starting from a base number of 16px,
        establishes proportions to determine typographic sizes and ensure they have harmonic values.
        `,
      },
    },
  },
  args: { typographyProperty: 'fontSize' }
};

export const LineHeight: Story = {
  args: { typographyProperty: 'lineHeight' }
};
