import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'bold',
  standalone: true,
})
export class B2bBoldTextPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, boldPart: string = text) {
    return this.sanitize(text.replace(new RegExp(`^(${boldPart})`, 'gi'), '<b>$1</b>'));
  }

  sanitize(str: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}
