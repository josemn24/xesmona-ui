import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, computed, effect, signal } from '@angular/core';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'b2b-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
})
export class B2bIconComponent {
  @ViewChild('svgIcon', {static: true}) svgDivElement: ElementRef;

  @Input() set name(value: string) {
    this.iconName.set(value);
  }

  @Input() set size(value: 'sm' | 'md' | 'lg' | 'xl') {
    this.iconSize.set(value);
  }

  iconName = signal('');
  iconSize = signal<IconSize>('md');
  private _path = computed(() => `url(/assets/b2b-components/icons/${this.iconName()}_${this.getIconSize(this.iconSize())}.svg)`);

  constructor(private cdr: ChangeDetectorRef,) {
    effect(() => {
      this.svgDivElement.nativeElement.style.webkitMaskImage = this._path();
      this.cdr.markForCheck();
    });
  }

  getDimension() {
    return `${this.getIconSize(this.iconSize())}px`;
  }

  private getIconSize(iconSize: IconSize) {
    switch (iconSize) {
      case 'sm':
        return 16;
      case 'md':
        return 24;
      case 'lg':
        return 32;
      case 'xl':
        return 64;
    }
  }
}
