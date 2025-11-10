import { Component } from '@angular/core';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import {
  heroLockClosed,
  heroMapPin,
  heroVideoCamera,
} from '@ng-icons/heroicons/outline';

import { ScrollEffectDirective } from '../../../../shared/directives/scrollEffect.directive';
interface IFeatures {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-feats',
  standalone: true,
  imports: [TitleSectionComponent, NgIconComponent, ScrollEffectDirective],
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css',
  viewProviders: provideIcons({ heroLockClosed, heroVideoCamera, heroMapPin }),
})
export class FeatsComponent {
  features: IFeatures[] = [
    {
      icon: 'heroLockClosed',
      title: 'Acceso Seguro',
      description:
        'Control de acceso mediante app con verificación en tiempo real.',
    },
    {
      icon: 'heroVideoCamera',
      title: 'Vigilancia 24/7',
      description:
        'Sistema de cámaras con grabación continua y monitoreo profesional.',
    },
    {
      icon: 'heroMapPin',
      title: ' Ubicaciones Estratégicas',
      description:
        'Cocheras en puntos clave de la ciudad para tu conveniencia.',
    },
  ];
}
