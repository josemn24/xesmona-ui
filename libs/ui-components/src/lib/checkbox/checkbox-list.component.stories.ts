import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bCheckBoxComponent } from './checkbox.component';
import { B2bCheckBoxListComponent } from './checkbox-list.component';
import { B2bIconComponent } from '../icon';
import { B2bLabelComponent } from '../label/label.component';

type StoryType = B2bCheckBoxListComponent & { content?: string }; 

const meta: Meta<StoryType> = {
  component: B2bCheckBoxListComponent,
  title: 'Design System/Components/Atoms/Checkbox/List',
  decorators: [
    moduleMetadata({
      imports: [B2bLabelComponent, B2bIconComponent, B2bCheckBoxComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bCheckBoxListComponent, B2bCheckBoxComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Checkbox list directly with the attribute selector.
  
  **Selector**: \`input[b2b-checkbox-list]\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The label content',
      control: 'text',
    },
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

function createStory(content: string, indeterminate = true, horizontalClass = '', additionalArgs = ''): Story {
  return {
    args: {
      content,
    },
    render: (args) => {
      const { ...props } = args;
      return {
        props,
        template:
        `
        <label b2b-label>
          <input b2b-checkbox type="checkbox" [indeterminate]="${indeterminate}" ${additionalArgs}>${content}
        </label>

        <ul b2b-checkbox-list class="${horizontalClass}">
          <li>
            <label b2b-label>
              <input b2b-checkbox type="checkbox">Apple
            </label>
          </li>
          <li>
            <label b2b-label>
              <input b2b-checkbox type="checkbox" checked>Banana
            </label>
          </li>
          <li>
            <label b2b-label>
              <input b2b-checkbox type="checkbox">Orange
            </label>
          </li>
          <li>
            <label b2b-label>
              <input b2b-checkbox type="checkbox">Pineapple
            </label>
          </li>
        </ul>
        `
      };
    }, 
  };
}

export const Default: Story = createStory('Fruit');

export const Horizontal: Story = createStory('Fruit', true, 'b2b-list-horizontal');
