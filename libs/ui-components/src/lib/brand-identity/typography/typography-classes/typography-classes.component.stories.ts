import {
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBrandTypographyClassesComponent } from './typography-classes.component';

type StoryType = B2bBrandTypographyClassesComponent; 
const meta: Meta<StoryType> = {
  component: B2bBrandTypographyClassesComponent,
  title: 'Design System/Brand Identity/Typography/Classes',
  tags: ['autodocs']
} as Meta;
export default meta;
type Story = StoryObj<StoryType>;

export const Titles: Story = {
  args: {}
};

export const Caption: Story = {
  args: { typographyType: 'caption' }
};

export const CTA: Story = {
  args: { typographyType: 'cta' }
};
