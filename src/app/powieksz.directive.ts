import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPowieksz]',
  standalone: false
})
export class PowiekszDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.display = 'inline-block';
    this.el.nativeElement.style.transformOrigin = 'left';
    this.el.nativeElement.style.transform = 'scale(1.5)';
    this.el.nativeElement.style.transition = '0.3s';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}
