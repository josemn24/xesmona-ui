import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bAccordionComponent } from './accordion.component';
import { B2bIconComponent } from '../icon';
import { ReplaceMeComponent } from '../../shared/components/replace-me.component';

type StoryType = B2bAccordionComponent & { content?: string };

const meta: Meta<StoryType> = {
  component: B2bAccordionComponent,
  title: 'Design System/Components/Atoms/Accordion',
  decorators: [
    moduleMetadata({
      imports: [B2bIconComponent, ReplaceMeComponent],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bAccordionComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector.

  **Selector**: \`b2b-accordion\``,
      },
    },
  },
  argTypes: {
    content: {
      description: 'The text content.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<StoryType>;

export const Default: Story = (args) => ({
  template: `
  <b2b-accordion id="accordion1" title="${args.title}" groupId="group1">
    <div accordion-content>
      ${args.content}
    </div>
  </b2b-accordion>
  <b2b-accordion id="accordion2" title="${args.title}" groupId="group1">
    <div accordion-content>
      ${args.content}
    </div>
  </b2b-accordion>
  `,
  props: args,
});

Default.args = {
  title: 'Title',
  content: 'Accordeon content',
};

export const Expanded: Story = (args) => ({
  template: `
  <b2b-accordion id="expandedAccordion1" title="${args.title}" groupId="groupExpanded" [expanded]="true">
    <div accordion-content>
      ${args.content}
    </div>
  </b2b-accordion>
  `,
  props: args,
});

Expanded.args = {
  title: 'Title',
  content: 'Accordeon content',
};

export const Large: Story = (args) => ({
  template: `
  <b2b-accordion id="largeAccordion1" title="${args.title}" class="b2b--large" groupId="group2">
    <div accordion-content>
      ${args.content}
    </div>
  </b2b-accordion>
  <b2b-accordion id="largeAccordion2" title="${args.title}" class="b2b--large" groupId="group2">
    <div accordion-content>
      ${args.content}
    </div>
  </b2b-accordion>
  `,
  props: args,
});

Large.args = {
  title: 'Title',
  content: 'Accordion content',
};

export const WithIcons: Story = (args) => ({
  template: `
  <!-- The 'marginLeft' class is used to add margin to the left of the accordion content when using icons. -->

  <b2b-accordion class="marginLeft" id="withIconsAccordion1" groupId="group3" title="${args.title}">
    <div accordion-header>
      <b2b-icon  class="b2b-icon-left" name="icon-picture"></b2b-icon>
    </div>
    <div accordion-content>
      Accordion content 1
    </div>
  </b2b-accordion>

  <b2b-accordion class="marginLeft" id="withIconsAccordion2" groupId="group3" title="${args.title}">
    <div accordion-header>
      <b2b-icon  class="b2b-icon-left" name="icon-picture"></b2b-icon>
    </div>
    <div accordion-content>
      Accordion content 2
    </div>
  </b2b-accordion>
  `,
  props: args,
});

WithIcons.args = {
  title: 'Title',
  content: 'Accordion content',
};

WithIcons.storyName = 'With Icons';
WithIcons.parameters = {
  docs: {
    description: {
      story: `
        Note: The 'marginLeft' class is used to add margin to the left of the accordion content when using icons.
      `,
    },
  },
};

export const ReplaceMe: Story = (args) => ({
  template: `
  <b2b-accordion id="replaceMeAccordion1" title="${args.title}" groupId="group4">
    <div accordion-content style="width: 100%;">
      <div replace-me style="width: 100%; height: 100px;">Replace me</div>
    </div>
  </b2b-accordion>
  <b2b-accordion id="replaceMeAccordion2" title="${args.title}" groupId="group4">
    <div accordion-content style="width: 100%">
      <div replace-me style="width: 100%; height: 100px;">Replace me</div>
    </div>
  </b2b-accordion>
  `,
  props: args,
});

ReplaceMe.args = {
  title: 'Title',
  content: 'Accordion content',
};

export const ReplaceMeWithIcons: Story = (args) => ({
  template: `
  <b2b-accordion class="marginLeft" id="replaceMeAccordion3" title="${args.title}" groupId="group5">
    <div accordion-header>
      <b2b-icon class="b2b-icon-left" name="icon-picture"></b2b-icon>
    </div>
    <div accordion-content style="width: 100%;">
      <div replace-me style="width: 100%; height: 100px;">Replace me</div>
    </div>
  </b2b-accordion>
  <b2b-accordion class="marginLeft" id="replaceMeAccordion4" title="${args.title}" groupId="group5">
    <div accordion-header>
      <b2b-icon class="b2b-icon-left" name="icon-picture"></b2b-icon>
    </div>
    <div accordion-content style="width: 100%">
      <div replace-me style="width: 100%; height: 100px;">Replace me</div>
    </div>
  </b2b-accordion>
  `,
  props: args,
});

ReplaceMeWithIcons.args = {
  title: 'Title',
  content: 'Accordion content',
};
