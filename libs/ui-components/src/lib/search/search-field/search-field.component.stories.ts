import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { B2bFieldWrapperComponent } from '../../text-field/field-wrapper/field-wrapper.component';
import { B2bIconComponent } from '../../icon/icon.component';
import { B2bSearchFieldComponent } from './search-field.component';
import { B2bInputComponent } from '../../text-field/input/input.component';

type StoryType = B2bSearchFieldComponent & { content?: string; }; 

const meta: Meta<StoryType> = {
  component: B2bSearchFieldComponent,
  title: 'Design System/Components/Molecules/Search/Input',
  decorators: [
    moduleMetadata({
      imports: [
        B2bFieldWrapperComponent,
        B2bIconComponent,
        B2bInputComponent,
        B2bSearchFieldComponent,
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bSearchFieldComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.
  
  **Selector**: \`b2b-search-field\``,
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
    }, 
  },
  args: {},
};
export default meta;
type Story = StoryObj<StoryType>;

// Función para generar historias
function createStory(content: string, inputName: string, label: string, additionalAttributes: string): Story {
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
        <b2b-search-field label="${label}" inputName="${inputName}">
          <input b2b-input id="${inputName}" name="${inputName}" type="text" value="${content}" ${additionalAttributes}>
        </b2b-search-field>
        `
      };
    }, 
  };
}

export const Default: Story = createStory('', 'my-search-default', 'Label', '');
export const ReadOnly: Story = createStory('Selection', 'my-search-readonly', 'Label', 'readonly');
export const Disabled: Story = createStory('', 'my-search-disabled', 'Label', 'disabled');
