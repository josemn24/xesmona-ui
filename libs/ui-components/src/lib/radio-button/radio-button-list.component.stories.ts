import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bRadioButtonComponent } from './radio-button.component';
import { B2bRadioButtonListComponent } from './radio-button-list.component';
import { B2bIconComponent } from '../icon';
import { B2bLabelComponent } from '../label/label.component';

type StoryType = B2bRadioButtonListComponent & { radioName?: string }; 

const meta: Meta<StoryType> = {
  component: B2bRadioButtonListComponent,
  title: 'Design System/Components/Atoms/Radio button/List',
  decorators: [
    moduleMetadata({
      imports: [B2bLabelComponent, B2bIconComponent, B2bRadioButtonComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bRadioButtonListComponent, B2bRadioButtonComponent, B2bLabelComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the Radio button list directly with the attribute selector.
  
  **Selector**: \`input[b2b-radio-button-list]\``,
      },
    },
  },
  argTypes: {
    radioName: {
      description: 'The radio group name',
      control: 'text',
    },
  },
  args: {},
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

function createStory(radioName: string, horizontalClass = '', groupDisabled = false): Story {
  return {
    args: {
      radioName,
    },
    render: (args) => {
      const { ...props } = args;
      return {
        props,
        template:
        `
          <label b2b-label [class.b2b--disabled]="${groupDisabled}">Group Label</label>

          <ul b2b-radio-button-list class="${horizontalClass}">
            <li>
              <label b2b-label>
                <input b2b-radio-button type="radio" name="${radioName}" [attr.disabled]="${groupDisabled || null}" value="apple">Apple
              </label>
            </li>
            <li>
              <label b2b-label>
                <input b2b-radio-button type="radio" name="${radioName}" [attr.disabled]="${groupDisabled || null}" value="banana">Banana
              </label>
            </li>
            <li>
              <label b2b-label>
                <input b2b-radio-button type="radio" name="${radioName}" [attr.disabled]="${groupDisabled || null}" value="orange">Orange
              </label>
            </li>
            <li>
              <label b2b-label>
                <input b2b-radio-button type="radio" name="${radioName}" [attr.disabled]="${groupDisabled || null}" value="pineapple">Pineapple
              </label>
            </li>
          </ul>
        `
      };
    }, 
  };
}

export const Default: Story = createStory('fruit');

export const Horizontal: Story = createStory('fruit-horizontal', 'b2b-list-horizontal');

export const Disabled: Story = createStory('fruit-horizontal', 'b2b-list-horizontal', true);
