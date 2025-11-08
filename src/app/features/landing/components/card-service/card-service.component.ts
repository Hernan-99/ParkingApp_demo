import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import {
  heroHome,
  heroClock,
  heroShieldCheck,
  heroArrowRight,
} from '@ng-icons/heroicons/outline';
interface ICardService {
  id: number;
  icon: string;
  title: string;
  description: string;
  moreInfo: () => void;
}
@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css',
  viewProviders: provideIcons({
    heroHome,
    heroClock,
    heroShieldCheck,
    heroArrowRight,
  }),
})
export class CardServiceComponent {
  cardServices: ICardService[] = [
    {
      id: 1,
      icon: 'heroHome',
      title: 'Alquiler Mensual',
      description:
        'Espacios seguros para tu vehículo con acceso 24/7 y vigilancia constante.',
      moreInfo: () => this.showMoreInfo(),
    },
    {
      id: 2,
      icon: 'heroClock',
      title: 'Alquiler por Horas',
      description:
        'Perfecto para visitas rápidas. Reserva solo el tiempo que necesites.',
      moreInfo: () => this.showMoreInfo(),
    },
    {
      id: 3,
      icon: 'heroShieldCheck',
      title: 'Cocheras Premium',
      description:
        'Espacios exclusivos con servicios adicionales como carga eléctrica y lavado.',
      moreInfo: () => this.showMoreInfo(),
    },
  ];
  showMoreInfo(): void {
    console.log('Hola');
  }
}
