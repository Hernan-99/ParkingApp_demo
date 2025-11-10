import { Component } from '@angular/core';
import { ScrollEffectDirective } from '../../../../shared/directives/scrollEffect.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollEffectDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
