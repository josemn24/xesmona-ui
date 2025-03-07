import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bPaginatorComponent } from './paginator.component';
import { InputSignal, ModelSignal, signal } from '@angular/core';

type StoryType = B2bPaginatorComponent; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Molecules/Pagination/Paginator',
  component: B2bPaginatorComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bPaginatorComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.

  **Selector**: \`b2b-paginator\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<B2bPaginatorComponent>;

export const Filter: Story = {
  args: {
    length: signal(120)(),
    pageSizeOptions: signal([10, 20, 30])(),
    pageIndex: signal(0)(),
    pageSize: signal(10)(),
  },
};
