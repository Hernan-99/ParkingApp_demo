import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoInstagram, ionLogoLinkedin } from '@ng-icons/ionicons';
import { ScrollEffectDirective } from '../../../../shared/directives/scrollEffect.directive';

interface ISocials {
  id: number;
  icon: string;
  link: string;
}
interface IQuickLinks {
  label: string;
  link: string;
}

interface IServicesLinks {
  label: string;
  link: string;
}

interface IContact {
  city: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, ScrollEffectDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  viewProviders: provideIcons({ ionLogoLinkedin, ionLogoInstagram }),
})
export class FooterComponent {
  socialMediaIcons: ISocials[] = [
    { id: 1, icon: 'ionLogoLinkedin', link: '' },
    { id: 2, icon: 'ionLogoInstagram', link: '' },
  ];
  quickLinks: IQuickLinks[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Servicios', link: '#services' },
    { label: 'Contacto', link: '#contact' },
    { label: 'Iniciar Sesión', link: '/login' },
  ];

  services: IServicesLinks[] = [
    { label: 'Alquiler Mensual', link: '#' },
    { label: 'Alquiler por Horas', link: '#' },
    { label: 'Cocheras Premium', link: '#' },
    { label: 'Sistema de Seguridad', link: '#' },
  ];

  contact: IContact[] = [
    {
      city: 'Av. Principal 123, Ciudad',
      email: 'info@parkingapp.com',
      phone: '+54 1122334455',
    },
  ];
}
