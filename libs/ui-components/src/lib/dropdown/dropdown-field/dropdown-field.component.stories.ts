import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig
} from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { B2bDropDownFieldComponent } from './dropdown-field.component';
import { B2bDropDownInputComponent } from '../components/dropdown-input/dropdown-input.component';
import { DropDownService } from '../services/dropdown.service';
import { B2bHelperTextComponent } from '../../helper-text/helper-text.component';

type StoryType = B2bDropDownFieldComponent & { content?: string; }; 

const createArgs = (type, defaultValue) => ({
  table: {
    category: 'css custom properties',
    defaultValue: { summary: defaultValue },
    type: { summary: type },
  },
});

const meta: Meta<StoryType> = {
  component: B2bDropDownFieldComponent,
  title: 'Design System/Components/Molecules/DropDown/Input',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
        DropDownService
      ],
    }),
    moduleMetadata({
      imports: [
        B2bDropDownInputComponent,
        B2bHelperTextComponent
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  args: {},
  argTypes: {
    '--b2b-dropdown-input-font-family': createArgs('The font family', 'var(--b2b-font-family)'),
    '--b2b-dropdown-input-font-weight': createArgs('The font weight', 'var(--b2b-font-weight-regular)'),
    '--b2b-dropdown-input-font-size': createArgs('The font size', 'var(--b2b-cta-font-size)'),
    '--b2b-dropdown-input-padding-top': createArgs('The padding top', '0.5rem'),
    '--b2b-dropdown-input-padding-right': createArgs('The padding right', '0.5rem'),
    '--b2b-dropdown-input-padding-bottom': createArgs('The padding bottom', '0.5rem'),
    '--b2b-dropdown-input-padding-left': createArgs('The padding left', '0.5rem'),
    '--b2b-dropdown-input-bg-color': createArgs('The background color', 'var(--b2b-gray-scale-05)'),
    '--b2b-dropdown-input-color': createArgs('The text color', 'var(--b2b-brand-blue-01)'),
    '--b2b-dropdown-input-border-color': createArgs('The border color', 'var(--b2b-brand-blue-04)'),
    '--b2b-dropdown-input-border-radius': createArgs('The border radius', '0.125rem'),
    '--b2b-dropdown-input-border-style': createArgs('The border style', 'solid'),
    '--b2b-dropdown-input-border-width': createArgs('The border width', '0.063rem'),
    '--b2b-dropdown-input-width': createArgs('The dropdown-input width', 'auto'),
    '--b2b-dropdown-input-box-shadow': createArgs('The box shadow', null),
    content: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bDropDownFieldComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-dropdown-field\``,
      },
    },
  }
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

// Función para generar historias
function createStory(content: string, inputName: string, label: string, additionalAttributes: string, type = 'text'): Story {
  return {
    args: {
      content,
      inputName,
      label
    },
    render: (args) => {
      const { content, inputName, label, ...props } = args; 
      return {
        props,
        template:
        `
        <b2b-dropdown-field label="${label}" inputName="${inputName}" style="width: fit-content;">
          <input b2b-dropdown-input id="${inputName}" name="${inputName}" type="${type}" value="${content}" ${additionalAttributes}>
        </b2b-dropdown-field>
        `
      };
    }, 
  };
}

export const Default: Story = createStory('', 'my-search-default', 'Label', '');
export const ReadOnly: Story = {
  args: {
    content: 'Content',
    inputName: 'my-search-read-only',
    label: 'Label',
  },
  render: (args) => {
    const { content, inputName, label, ...props } = args; 
    return {
      props,
      template:
      `
      <b2b-dropdown-field label="${label}" inputName="${inputName}" style="width: fit-content;">
        <input b2b-dropdown-input id="${inputName}" name="${inputName}" class="read-only" type="text" value="${content}" readonly>
      </b2b-dropdown-field>
      `
    };
  }, 
};
export const ValidationError: Story = {
  args: {
    content: 'Content',
    inputName: 'my-search-error',
    label: 'Label',
  },
  render: (args) => {
    const { content, inputName, label, ...props } = args; 
    return {
      props,
      template:
      `
      <b2b-dropdown-field label="${label}" inputName="${inputName}" style="width: fit-content;">
        <input b2b-dropdown-input id="${inputName}" name="${inputName}" type="text" value="${content}" class="b2b--invalid" readonly>
      </b2b-dropdown-field>

      <b2b-helper-text [invalid]="true" style="display: block; margin-top: 4px;">Helper text</b2b-helper-text>
      `
    };
  }, 
};
export const Disabled: Story = createStory('', 'my-search-disabled', 'Label', 'disabled');
