import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bToggleSwitchComponent } from './toggle-switch.component';
import { B2bToggleSwitchWrapperComponent } from './components/label/toggle-switch-wrapper.component';
import { B2bLabelComponent } from '../label/label.component';

const createArgType = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<B2bToggleSwitchComponent> = {
  component: B2bToggleSwitchComponent,
  title: 'Design System/Components/Atoms/Toggle Switch',
  decorators: [
    moduleMetadata({
      imports: [B2bLabelComponent, B2bToggleSwitchWrapperComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bToggleSwitchComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-toggle-switch\``,
      },
    },
  },
  argTypes: {
    '--b2b-toggle-switch-width': createArgType('The width', '2.5rem'),
    '--b2b-toggle-switch-height': createArgType('The height', '1.25rem'),
    '--b2b-toggle-switch-border-radius': createArgType('The border radius', '3.125rem'),
    '--b2b-toggle-switch-padding': createArgType('The padding', '2px'),
    '--b2b-toggle-switch-bg-color-checked': createArgType('The color when checked', 'var(--b2b-brand-blue-01)'),
    '--b2b-toggle-switch-bg-color-no-checked': createArgType('The color when no checked', 'var(--b2b-brand-blue-04)'),
  },
  args: {}
} as Meta;
export default meta;
type Story = StoryObj<B2bToggleSwitchComponent>;

export const Default: Story = {
  args: {
    inputId: 'toggle-switch-default',
  }
};

export const Disabled: Story = {
  args: {
    inputId: 'toggle-switch-disabled',
    disabled: true
  }
};

const renderTemplate = (args) => {
  const { template, ...props } = args; 
  return {
    props,
    template: template
  };
};

export const Required: Story = {
  args: {
    inputId: 'toggle-switch-label-required',
  },
  render: (args) => renderTemplate({
    args,
    template:`
    <div b2b-toggle-switch-wrapper>
      <label b2b-label class="b2b--required">Label</label>
      <b2b-toggle-switch></b2b-toggle-switch>
    </div>
    `
  })
};

export const LabelLeft: Story = {
  args: {
    inputId: 'toggle-switch-label-left',
  },
  render: (args) => renderTemplate({
    args,
    template:`
    <div b2b-toggle-switch-wrapper>
      <label b2b-label>Label</label>
      <b2b-toggle-switch></b2b-toggle-switch>
    </div>
    `
  })
};

export const LabelRight: Story = {
  args: {
    inputId: 'toggle-switch-label-right',
  },
  render: (args) => renderTemplate({
    args,
    template:`
    <div b2b-toggle-switch-wrapper>
      <b2b-toggle-switch></b2b-toggle-switch>
      <label b2b-label>Label</label>
    </div>
    `
  })
};
