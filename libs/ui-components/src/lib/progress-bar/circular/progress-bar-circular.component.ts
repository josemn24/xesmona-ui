import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { B2bIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'b2b-progress-bar-circular',
  templateUrl: './progress-bar-circular.component.html',
  styleUrls: ['./progress-bar-circular.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle, B2bIconComponent],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class B2bProgressBarCircularComponent implements AfterViewInit {
  /**
   * The progress value of the progress bar. This value should be between 0 and 100
  */
  @Input() progress = 0;

  @ViewChild('text') text: ElementRef;

  fontSize = 14;
  size = 64;
  circumference = 3.14 * this.circleRadius * 2;
  circleWidth = 8;
  progressWidth = this.circleWidth;
  textHeight = 0;

  ngAfterViewInit(): void {
    this.textHeight = this.text.nativeElement.getBoundingClientRect().height;
    this.text.nativeElement.style.transform = this.getTextTransform(this.size, this.textHeight);
  }

  get viewBox() {
    return `0 0 ${this.size} ${this.size}`;
  }

  get circleRadius() {
    return (this.size / 2) - 4;
  }

  get circleXY() {
    return this.size / 2;
  }

  get textX() {
    const x = Math.round((this.size / 2) + 4);
    return `${x}px`;
  }

  get textY() {
    const y = Math.round((this.size / 2) + 4);
    return `${y}px`;
  }
  
  get dashOffset() {
    if (this.progress === 0) {
      return this.circumference;
    }
    return this.circumference * (1 - this.progress / 100) + 2;
  }

  private getTextTransform(size: number, textHeight: number) {
    return `rotate(90deg) translate(-${(textHeight / 2) + 4}px, -${size}px)`;
  }
}
