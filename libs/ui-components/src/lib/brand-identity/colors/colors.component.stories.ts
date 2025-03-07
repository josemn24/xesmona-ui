import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBrandColorsComponent } from './colors.component';

type StoryType = B2bBrandColorsComponent; 
const meta: Meta<StoryType> = {
  component: B2bBrandColorsComponent,
  title: 'Design System/Brand Identity/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  The color palette in the digital world conveys sensations, adds functional experience, and creates patterns and associations.
  Additionally, it provides hierarchies, focal points, and engages in a dialogue with the user.

  NOTE: This color palette is defined in [ZeroHeight](https://zeroheight.com/20cca505f/p/964284-colors).
  `,
      },
    },
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: `Our main color is "Brand red".
        The color "01 Red" is used to highlight important parts and guide the focus towards primary actions.
        However, it should be used with particular care, as it can add a lot of visual weight or have unintended connotations.`,
      },
    },
  },
  args: {}
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: `Our main palette consists of “Brand blue”.
        The color "01 Blue" is equivalent to common black and has widespread general use throughout the platform.
        It is primarily used for body text, headers, and various other elements.
        `,
      },
    },
  },
  args: { colorType: 'secondary' }
};

export const Grey: Story = {
  parameters: {
    docs: {
      description: {
        story: `This color scale has extensive and adaptable complementary use.
        Depending on the range, it helps create spaces, lower or elevate degrees of hierarchy.
        `,
      },
    },
  },
  args: { colorType: 'grey' }
};

export const State: Story = {
  parameters: {
    docs: {
      description: {
        story: `They are associated with their semantic meaning, representing the behavioral values of an element,
        whether related to its identity, context, usage, interaction, etc.
        They can be used for specific functions in places where strongly established conventions exist.
        They are associated with specific meanings such as success, attention, or error.
        `,
      },
    },
  },
  args: { colorType: 'state' }
};

export const Customer: Story = {
  parameters: {
    docs: {
      description: {
        story: `Represents the type of end customer, depending on the contracted products.`,
      },
    },
  },
  args: { colorType: 'customer' }
};

export const Support: Story = {
  parameters: {
    docs: {
      description: {
        story: `They are used solely as a form of support in exceptional cases such as graphics or supplementary elements.
        Although their use is restricted, their opacities can be adjusted as needed.
        `,
      },
    },
  },
  args: { colorType: 'support' }
};

export const Transparency: Story = {
  args: { colorType: 'transparency' }
};
