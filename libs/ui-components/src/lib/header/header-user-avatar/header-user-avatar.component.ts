import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[b2b-user-avatar],div[b2b-user-avatar]',
  templateUrl: './header-user-avatar.component.html',
  styleUrls: ['./header-user-avatar.component.scss'],
  standalone: true,
})
export class B2bHeaderUserAvatarComponent {}
