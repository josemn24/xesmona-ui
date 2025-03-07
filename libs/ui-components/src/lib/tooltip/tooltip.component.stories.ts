import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bTooltipComponent } from './tooltip.component';
import { B2bTooltipDirective } from './tooltip.directive';
import { B2bIconComponent } from '../icon';

const meta: Meta<B2bTooltipComponent> = {
  component: B2bTooltipComponent,
  title: 'Design System/Components/Atoms/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [
        B2bIconComponent,
        B2bTooltipDirective,
      ],
    }),
    componentWrapperDecorator((story) => `<div style="display: inline-block">${story}</div>`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bTooltipComponent, B2bTooltipDirective } from '@mapfre-tech/b2b-components';

  Use B2bTooltipDirective in the element that is the trigger to display the Tooltip.
  
  **Selector**: \`[b2b-tooltip]\``,
      },
    },
  },
  argTypes: {
    tooltip: {
      description: 'The label text of the tooltip.',
      control: 'text'
    },
    tooltipPosition: {
      description: 'Determines where the tooltip will appear.',
      control: 'text'
    },
    tooltipColor: {
      description: 'Determines the theme color of the tooltip.',
      control: 'text'
    },
    '--b2b-tooltip-font-family': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-font-family)' },
        type: { summary: 'The font family' },
      },
    },
    '--b2b-tooltip-font-weight': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: 'var(--b2b-font-weight-regular)' },
        type: { summary: 'The font weight' },
      },
    },
    '--b2b-tooltip-font-size': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: '0.875rem' },
        type: { summary: 'The font size' },
      },
    },
    '--b2b-tooltip-background-color': {
      table: {
        category: 'css custom properties',
        type: { summary: 'The background color' },
      },
    },
    '--b2b-tooltip-color': {
      table: {
        category: 'css custom properties',
        type: { summary: 'The text color' },
      },
    },
    '--b2b-tooltip-border-radius': {
      table: {
        category: 'css custom properties',
        defaultValue: { summary: '0.25rem' },
        type: { summary: 'The border radius' },
      },
    },
    '--b2b-tooltip-arrow-color': {
      table: {
        category: 'css custom properties',
        type: { summary: 'The arrow color' },
      },
    },
  },
  args: {
  },
  render: (args) => {
    const { tooltip, tooltipPosition, tooltipColor, ...props } = args; 
    return {
      props,
      template: `
      <b2b-icon tabindex="0" name="icon-info" b2b-tooltip tooltip="${tooltip}" tooltipPosition="${tooltipPosition}" tooltipColor="${tooltipColor}">
      </b2b-icon>
      `
    }; 
  }, 
} as Meta;
export default meta;
type Story = StoryObj<B2bTooltipComponent>;

// Función para generar historias
function createStory(tooltip: string, tooltipPosition: 'top' | 'bottom' | 'left' | 'right', tooltipColor: 'dark' | 'light'): Story {
  return {
    args: {
      tooltip,
      tooltipPosition,
      tooltipColor
    }
  };
}
export const Top: Story = createStory('Lorem ipsum dolor', 'top', 'dark');
export const Right: Story = createStory('Lorem ipsum dolor', 'right', 'dark');
export const Bottom: Story = createStory('Lorem ipsum dolor', 'bottom', 'dark');
export const Left: Story = createStory('Lorem ipsum dolor', 'left', 'dark');
export const Light: Story = createStory('Lorem ipsum dolor', 'top', 'light');