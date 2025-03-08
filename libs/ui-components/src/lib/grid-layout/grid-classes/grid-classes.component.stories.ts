import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bGridClassesDocsComponent } from './grid-classes.component';

type StoryType = B2bGridClassesDocsComponent; 
const meta: Meta<StoryType> = {
  component: B2bGridClassesDocsComponent,
  title: 'Design System/Brand Identity/Layout/Grid/Grid Classes',
  tags: ['autodocs'],
  argTypes: {
    classesType: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  args: {
    classesType: 'intro',
  },
  parameters: {
    docs: {
      description: {
        component: `
  This library exposes some classes related to Grid, so you can style your grid layout by applying the following classes directly in your HTML.
  CSS classes naming is based on [TailwindCSS](https://tailwindcss.com/docs).
  `,
      },
    },
  },
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Introduction: Story = {
  parameters: {
    docs: {
      description: {
        story: `For displaying a grid, you can use the <code>b2b-grid</code> class.
        <p>Also, you can define the gap between the columns and rows using the <code>b2b-gap-[gapSize]</code>, <code>b2b-gap-x-[gapSize]</code>,
        <code>b2b-gap-y-[gapSize]</code> classes, where <code>gapSize</code> is the size of the gap in pixels (e.g. <code>b2b-gap-m</code>).
        The available sizes are related to [Spacing](/docs/design-system-brand-identity-spacing--docs).</p>
        Regarding responsive design, it is possible to set classes for different screen sizes. To do that, set one the following values at the end of the class name (e.g. <code>b2b-col-6-md</code>).
        The possible values are the [Breakpoints](/docs/design-system-brand-identity-breakpoints--docs).
        `,
      },
    },
  },
  args: {},
};

export const GridUtilitiesClasses: Story = {
  parameters: {
    docs: {
      description: {
        story: `Some utility classes for the grid layout.
        `,
      },
    },
  },
  args: {
    classesType: 'utilities',
  },
};

export const GridColumnClasses: Story = {
  parameters: {
    docs: {
      description: {
        story: `Classes for specifying the columns in a grid layout.
        `,
      },
    },
  },
  args: {
    classesType: 'column',
  },
};

export const GridRowClasses: Story = {
  parameters: {
    docs: {
      description: {
        story: `Classes for specifying the rows in a grid layout.
        `,
      },
    },
  },
  args: {
    classesType: 'row',
  },
};
