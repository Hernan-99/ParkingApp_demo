import { Component, Input } from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
  viewProviders: provideIcons({ heroStarSolid }),
})
export class TestimonialCardComponent {
  @Input() id: number | undefined;
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';
}
