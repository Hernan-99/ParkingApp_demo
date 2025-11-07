import { Component } from '@angular/core';
interface MenuLinks {
  label: string;
  link: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navMenu: MenuLinks[] = [
    { label: 'Home', link: '/' },
    { label: 'Servicios', link: '#services' },
    { label: 'Contacto', link: '#contact' },
    { label: 'Login', link: '#login' },
    { label: 'Registrarse', link: '#register' },
  ];

  handleMenuShow() {
    console.log('hola');
  }
}
