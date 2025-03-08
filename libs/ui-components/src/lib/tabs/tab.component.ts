import { Component, ElementRef, Input } from '@angular/core';
import { B2bIconComponent } from '../icon/icon.component';
import { TabsService } from './services/tabs.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[b2b-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    'tabIndex': '-1',
    '(click)': 'onTab()',
  },
  standalone: true,
  imports: [B2bIconComponent],
})
export class B2bTabComponent {
  @Input() value: string;

  constructor(public elem: ElementRef, private tabsService: TabsService) {}

  onTab() {
    this.tabsService.updateIndex(this.tabsService.tabs().indexOf(this.value));
  }
}
