import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Animación de título
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // Animación de párrafo
    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });
  }
}
