import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

type StoryType = ButtonComponent & { content?: string }; 

export default {
  title: 'UI/Button',
  component: ButtonComponent,
} as Meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
    args: {
      content: 'Button',
    },
};
