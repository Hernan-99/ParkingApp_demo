import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[scrollEffect]',
  standalone: true,
})
export class ScrollEffectDirective implements AfterViewInit {
  @Input() delay: number = 0;
  @Input() once: boolean = false;

  private observer!: IntersectionObserver;
  private elemnentRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    this.renderer.addClass(this.elemnentRef.nativeElement, 'opacity-0');
    this.renderer.addClass(this.elemnentRef.nativeElement, 'translate-y-10');
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // cuando entra al viewport
            setTimeout(() => {
              this.renderer.addClass(
                this.elemnentRef.nativeElement,
                'reveal-visible'
              );
              this.renderer.removeClass(
                this.elemnentRef.nativeElement,
                'opacity-0'
              );
              this.renderer.removeClass(
                this.elemnentRef.nativeElement,
                'translate-y-10'
              );
            }, this.delay);

            if (this.once) {
              this.observer.unobserve(this.elemnentRef.nativeElement);
            }
          } else {
            // cuando sale del viewport (para repetir la animación)
            if (!this.once) {
              this.renderer.removeClass(
                this.elemnentRef.nativeElement,
                'reveal-visible'
              );
              this.renderer.addClass(
                this.elemnentRef.nativeElement,
                'opacity-0'
              );
              this.renderer.addClass(
                this.elemnentRef.nativeElement,
                'translate-y-10'
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.elemnentRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
