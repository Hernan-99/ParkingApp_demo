import { Component } from '@angular/core';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';
import { TestimonialCardComponent } from '../../components/testimonial-card/testimonial-card.component';
import { ScrollEffectDirective } from '../../../../shared/directives/scrollEffect.directive';
interface ITestimonials {
  id: number;
  image: string;
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    TitleSectionComponent,
    TestimonialCardComponent,
    ScrollEffectDirective,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  clientTestimonial: ITestimonials[] = [
    {
      id: 1,
      image: 'http://static.photos/people/200x200/1',
      name: 'María González',
      icon: 'heroStarSolid',
      description:
        '"Nunca más tuve que dar vueltas buscando estacionamiento. ParkingApp me salvó la vida en el centro de la ciudad."',
    },
    {
      id: 2,
      image: 'http://static.photos/people/200x200/3',
      name: 'Carlos Ruiz',
      icon: 'heroStarSolid',
      description:
        '"La app es súper intuitiva y el servicio premium vale cada centavo. Mi auto está más seguro que en casa."',
    },
    {
      id: 3,
      image: 'http://static.photos/people/200x200/2',
      name: 'Ana Martínez',
      icon: 'heroStarSolid',
      description:
        '"Por fin encontré una solución para mi coche cuando viajo. Reservo desde el aeropuerto y todo listo al llegar."',
    },
  ];
}
