import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bPaginationComponent } from './pagination.component';
import { InputSignal, ModelSignal, signal } from '@angular/core';

type StoryType = B2bPaginationComponent; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Pagination/Pagination',
  component: B2bPaginationComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bPaginationComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.

  **Selector**: \`b2b-pagination\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<B2bPaginationComponent>;

export const Default: Story = {
  args: {
    activePageIndex: signal(0)(),
    totalPages: signal(10)(),
  },
};
