import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type StoryObj
} from '@storybook/angular';
import { B2bHeaderDesktopComponent } from './header-desktop/header-desktop.component';
import { B2bHeaderMobileComponent } from './header-mobile/header-mobile.component';
import { B2bHeaderMenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { B2bHeaderMenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { B2bMapfreLogoComponent } from './mapfre-logo/mapfre-logo.component';
import { B2bHeaderBurgerButtonComponent } from './header-burger-button/header-burger-button.component';
import { B2bHeaderMenuOptionButtonComponent } from './header-menu-option-button/header-menu-option-button.component';
import { B2bIconComponent } from '../icon';
import { B2bHeaderUserAvatarComponent } from './header-user-avatar/header-user-avatar.component';
import { B2bOptionsMenuComponent } from '../options-menu/options-menu.component';
import { B2bOptionsMenuItemComponent } from '../options-menu/components/options-menu-item/options-menu-item.component';
import { B2BOptionsMenuTriggerDirective } from '../options-menu/options-menu-trigger.directive';

type StoryType = B2bHeaderDesktopComponent & { appName?: string }; 

const meta: Meta<StoryType> = {
  title: 'Design System/Components/Organisms/Header',
  component: B2bHeaderDesktopComponent,
  parameters: {
    docs: {
      description: {
        component: `
        import { B2bHeaderDesktopComponent, B2bHeaderMobileComponent, B2bHeaderMenuDesktopComponent, B2bHeaderMenuMobileComponent, B2bMapfreLogoComponent, B2bHeaderBurgerButtonComponent, B2bHeaderMenuOptionButtonComponent } from '@mapfre-tech/b2b-components';

  In order to use this component, use the following component selector. Also, you must import B2bHeaderMobileComponent, B2bHeaderMenuDesktopComponent, B2bHeaderMenuMobileComponent, B2bMapfreLogoComponent, B2bHeaderBurgerButtonComponent, B2bHeaderMenuOptionButtonComponent if you want to add a logo, menu, burger button, etc.
  
  **Selector for desktop header**: \`b2b-header-desktop\`
  **Selector for mobile header**: \`b2b-header-mobile\`
  **Selector for desktop menu**: \`b2b-header-menu-desktop\`
  **Selector for mobile menu**: \`b2b-header-menu-mobile\`
  **Selector for menu option**: \`b2b-header-menu-option-button\`
  **Selector for burger button**: \`b2b-header-burger-button\`
  **Selector for mapfre logo**: \`b2b-mapfre-logo\``,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        B2bIconComponent,
        B2bHeaderMobileComponent,
        B2bHeaderMenuDesktopComponent,
        B2bHeaderMenuMobileComponent,
        B2bMapfreLogoComponent,
        B2bHeaderBurgerButtonComponent,
        B2bHeaderMenuOptionButtonComponent,
        B2bHeaderUserAvatarComponent,
        B2BOptionsMenuTriggerDirective,
        B2bOptionsMenuComponent,
        B2bOptionsMenuItemComponent
      ],
    }),
    componentWrapperDecorator((story) => `${story}`)
  ],
  tags: ['autodocs'],
  argTypes: {},
  args: {
    appName: 'APPLICATION'
  }
} as Meta;

export default meta;
type Story = StoryObj<StoryType>;

export const Basic: Story = (args) => ({
  template: `
  <header>
    <b2b-header-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button class="header-icon">
          <b2b-icon name="icon-search"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-settings"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-user"></b2b-icon>
        </button>
      </ng-container>
    </b2b-header-desktop>

    <b2b-header-mobile>
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo class="sm"></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button class="header-icon">
          <b2b-icon name="icon-user"></b2b-icon>
        </button>
      </ng-container>
    </b2b-header-mobile>
  </header>
  `,
  props: args,
});
Basic.args = {};

export const Menu: Story = (args) => ({
  template: `
  <header>
    <b2b-header-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button class="header-icon">
          <b2b-icon name="icon-search"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-settings"></b2b-icon>
        </button>
        <button b2b-user-avatar [b2bOptionsMenuTrigger]="userOptions">
          NA
        </button>
      </ng-container>
    </b2b-header-desktop>

    <b2b-header-mobile>
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo class="sm"></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button b2b-header-burger-button [open]="false"></button>
      </ng-container>
    </b2b-header-mobile>

    <b2b-header-menu-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container *ngTemplateOutlet="menuOptions"></ng-container>
    </b2b-header-menu-desktop>
  </header>

  <ng-template #menuOptions>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option active">
      Option 1
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 2
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 3
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 4
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 5
    </button>
  </ng-template>


  <ul b2b-options-menu #userOptions xPosition="after" yPosition="below" [gap]="8">
    <li>
      <a b2b-options-menu-item href="../">My profile</a>
    </li>
    <li>
      <a b2b-options-menu-item href="../">Notifications (100)</a>
    </li>
    <li>
      <a b2b-options-menu-item href="../">Settings</a>
    </li>
    <li>
      <a b2b-options-menu-item href="../">Log out</a>
    </li>
  </ul>
  `,
  props: args,
});
Menu.args = {};

export const MobileMenuOpen: Story = (args) => ({
  template: `
  <header>
    <b2b-header-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button class="header-icon">
          <b2b-icon name="icon-search"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-settings"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-user"></b2b-icon>
        </button>
      </ng-container>
    </b2b-header-desktop>

    <b2b-header-mobile class="b2b-header-mobile-padding">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo class="sm"></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button b2b-header-burger-button [open]="true"></button>
      </ng-container>
    </b2b-header-mobile>

    <b2b-header-menu-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container *ngTemplateOutlet="menuOptions"></ng-container>
    </b2b-header-menu-desktop>

    <b2b-header-menu-mobile [ngClass]="{'hidden': false}">
      <div class="b2b-mobile-menu-section">
        <div class="b2b-mobile-menu-option" style="display: flex; justify-content: flex-end;">
          <b2b-icon  name="icon-search"></b2b-icon>
        </div>
      </div>

      <div class="b2b-options b2b-bottom-divider">
        <ng-container *ngTemplateOutlet="menuOptions"></ng-container>
      </div>

      <div class="b2b-mobile-menu-section b2b-bottom-divider">
        <div class="b2b-mobile-menu-option" style="display: flex; column-gap: 0.25rem; align-items: center;">
          EN
          <b2b-icon name="icon-simple-arrow-down"></b2b-icon>
        </div>
      </div>

      <div class="b2b-mobile-menu-section">
        <div class="b2b-mobile-menu-option" style="display: flex; column-gap: 1rem; align-items: center; padding-top: 1rem; padding-bottom: 1rem;">
          <b2b-icon name="icon-user"></b2b-icon>
          My profile
        </div>
        <div class="b2b-mobile-menu-option" style="display: flex; column-gap: 1rem; align-items: center; padding-top: 1rem; padding-bottom: 1rem;">
          <b2b-icon name="icon-notification"></b2b-icon>
          Notificaciones
        </div>
        <div class="b2b-mobile-menu-option" style="display: flex; column-gap: 1rem; align-items: center; padding-top: 1rem; padding-bottom: 1rem;">
          <b2b-icon name="icon-settings"></b2b-icon>
          Settings
        </div>
        <div class="b2b-mobile-menu-option" style="display: flex; column-gap: 1rem; align-items: center; padding-top: 1rem; padding-bottom: 1rem;">
          <b2b-icon name="icon-log-out"></b2b-icon>
          Logout
        </div>
      </div>
    </b2b-header-menu-mobile>
  </header>

  <ng-template #menuOptions>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option active">
      Option 1
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 2
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 3
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 4
    </button>
    <button b2b-header-menu-option-button class="b2b-mobile-menu-option">
      Option 5
    </button>
  </ng-template>
  `,
  props: args,
});
MobileMenuOpen.args = {};
MobileMenuOpen.parameters = {
  docs: {
    description: {
      story: '**Note**: `Set your device in mobile viewport size to see the mobile menu`'
    },
  },
};

export const MobileSubHeader: Story = (args) => ({
  template: `
  <header>
    <b2b-header-desktop style="padding-left: 1.5rem; padding-right: 1.5rem;">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo></b2b-mapfre-logo>
        <span class="logo-app-title">${args.appName}</span>
      </ng-container>

      <ng-container b2b-header-functions>
        <button class="header-icon">
          <b2b-icon name="icon-search"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-settings"></b2b-icon>
        </button>
        <button class="header-icon">
          <b2b-icon name="icon-user"></b2b-icon>
        </button>
      </ng-container>
    </b2b-header-desktop>

    <b2b-header-mobile class="b2b-header-mobile-padding">
      <ng-container b2b-header-logo>
        <b2b-mapfre-logo class="xs"></b2b-mapfre-logo>
      </ng-container>

      <ng-container b2b-sub-header>
        <span class="logo-app-title-mobile">${args.appName}</span>
        <button b2b-header-burger-button [open]="menuOpen"></button>
      </ng-container>
    </b2b-header-mobile>
  </header>
  `,
  props: args,
});
MobileSubHeader.args = {};
MobileSubHeader.parameters = {
  docs: {
    description: {
      story: '**Note**: `Set your device in mobile viewport size to see the mobile subheader`'
    },
  },
};
