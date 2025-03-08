import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bBottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { B2bButtonComponent } from '../button/button.component';
import { B2bIconComponent } from '../icon/icon.component';
import { B2bLinkComponent } from '../link/link.component';
import { B2bOptionsMenuComponent } from '../options-menu/options-menu.component';
import { B2BOptionsMenuTriggerDirective } from '../options-menu/options-menu-trigger.directive';
import { B2bOptionsMenuItemComponent } from '../options-menu/components/options-menu-item/options-menu-item.component';

type StoryType = B2bBottomBarComponent;

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Organisms/Bottom bar',
  component: B2bBottomBarComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bBottomBarComponent } from '@mapfre-tech/b2b-components';

  In order to use this component use the below component selector.

  **Selector**: \`b2b-bottom-bar\`
  
  NOTE: The bottom position and border top are not included in the component, but you can achieve it as these examples show.
  To facilitate integration into your project, it is recommended to choose the example that best suits your project and use its code directly, modifying what is required later.
  `,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        B2bBottomBarComponent,
        B2bButtonComponent,
        B2bIconComponent,
        B2bLinkComponent,
        B2bOptionsMenuComponent,
        B2BOptionsMenuTriggerDirective,
        B2bOptionsMenuItemComponent,
      ],
    }),
    componentWrapperDecorator((story) => `<div style="height: 4rem;">${story}</div>`)
  ],
  tags: ['autodocs'],
} as Meta;
export default meta;
type Story = StoryObj<B2bBottomBarComponent>;

export const AllActions: Story = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div class="b2b-bottom-bar-wrapper">
          <b2b-bottom-bar>
            <div class="b2b-bottom-bar--main-actions">
              <div class="b2b-bottom-bar--primary">
                <button b2b-button class="b2b--primary b2b-width-full">
                  Primary
                </button>
              </div>
              <div class="b2b-bottom-bar--secondary">
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
              </div>
            </div>
            <div class="b2b-bottom-bar--other-actions">
              <div class="b2b-bottom-bar--icons">
                <div class="b2b-hidden b2b-block-lg">
                  <button class="b2b-hidden b2b-block-lg">
                    <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
                  </button>
                </div>
                <div class="b2b-hidden b2b-block-lg">
                  <button class="b2b-hidden b2b-block-lg">
                    <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
                  </button>
                </div>
                <div class="b2b-hidden b2b-block-lg">
                  <button class="b2b-hidden b2b-block-lg">
                    <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
                  </button>
                </div>
                <div class="b2b-hidden b2b-block-md b2b-hidden-lg">
                  <button [b2bOptionsMenuTrigger]="menuTablet">
                    <b2b-icon class="b2b-icon-right" name="icon-options-menu-alt-fill" size="md"></b2b-icon>
                  </button>
                </div>
              </div>
              <div class="b2b-bottom-bar--tertiary">
                <div class="b2b-hidden b2b-block-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
                <div class="b2b-hidden b2b-block-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
                <div class="b2b-hidden-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full" [b2bOptionsMenuTrigger]="menuMobile">
                    More actions
                    <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-down"></b2b-icon>
                  </button>
                </div>
              </div>
            </div>
          </b2b-bottom-bar>
        </div>
        
        <ul b2b-options-menu #menuTablet class="b2b-bottom-bar-options" [gap]="8">
          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>
          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>
          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>
        </ul>

        <ul b2b-options-menu #menuMobile class="b2b-bottom-bar-options" [gap]="8">
          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>

          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>

          <li b2b-options-menu-item (clicked)="onOptionSelected(item)">
            <b2b-icon class="b2b-icon-right" name="icon-picture" size="md"></b2b-icon>
            Item
          </li>

          <li b2b-options-menu-item>
            Tertiary
          </li>

          <li b2b-options-menu-item>
            Tertiary
          </li>
        </ul>
      `
    }; 
  } 
};

export const Simple: Story = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div class="b2b-bottom-bar-wrapper">
          <b2b-bottom-bar>
            <div class="b2b-bottom-bar--main-actions">
              <div class="b2b-bottom-bar--primary">
                <button b2b-button class="b2b--primary b2b-width-full">
                  Primary
                </button>
              </div>
              <div class="b2b-bottom-bar--secondary">
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
              </div>
            </div>
            <div class="b2b-bottom-bar--other-actions">
              <div class="b2b-bottom-bar--tertiary">
                <div>
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
              </div>
            </div>
          </b2b-bottom-bar>
        </div>
      `
    }; 
  } 
};

export const TwoSecondary: Story = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div class="b2b-bottom-bar-wrapper">
          <b2b-bottom-bar>
            <div class="b2b-bottom-bar--main-actions">
              <div class="b2b-bottom-bar--primary">
                <button b2b-button class="b2b--primary b2b-width-full">
                  Primary
                </button>
              </div>
              <div class="b2b-bottom-bar--secondary-row">
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
              </div>
            </div>
            <div class="b2b-bottom-bar--other-actions">
              <div class="b2b-bottom-bar--tertiary">
                <div>
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
              </div>
            </div>
          </b2b-bottom-bar>
        </div>
      `
    }; 
  } 
};

export const TwoTertiary: Story = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <div class="b2b-bottom-bar-wrapper">
          <b2b-bottom-bar>
            <div class="b2b-bottom-bar--main-actions">
              <div class="b2b-bottom-bar--primary">
                <button b2b-button class="b2b--primary b2b-width-full">
                  Primary
                </button>
              </div>
              <div class="b2b-bottom-bar--secondary-row">
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
                <button b2b-button class="b2b--secondary b2b-width-full">
                  Secondary
                </button>
              </div>
            </div>
            <div class="b2b-bottom-bar--other-actions">
              <div class="b2b-bottom-bar--tertiary">
                <div class="b2b-hidden b2b-block-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
                <div class="b2b-hidden b2b-block-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full b2b-tablet-desktop">
                    Tertiary
                  </button>
                </div>
                <div class="b2b-hidden-md">
                  <button b2b-button class="b2b--tertiary b2b-width-full" [b2bOptionsMenuTrigger]="menuTertiary">
                    More actions
                    <b2b-icon class="b2b-icon-right" name="icon-simple-arrow-down"></b2b-icon>
                  </button>
                </div>
              </div>
            </div>
          </b2b-bottom-bar>
        </div>

        <ul b2b-options-menu #menuTertiary class="b2b-bottom-bar-options" [gap]="8">
          <li b2b-options-menu-item>
            Tertiary
          </li>

          <li b2b-options-menu-item>
            Tertiary
          </li>
        </ul>
      `
    }; 
  } 
};
