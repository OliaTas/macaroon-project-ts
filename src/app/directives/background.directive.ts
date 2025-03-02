import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Background]'
})
export class BackgroundDirective implements OnInit {
  @Input() defaultBackgroundColor: string = 'rgb(164, 40, 61)';
  @Input() hoverBackgroundColor: string = 'rgb(138 79 89)'; 

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBackgroundColor;

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.hoverBackgroundColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
