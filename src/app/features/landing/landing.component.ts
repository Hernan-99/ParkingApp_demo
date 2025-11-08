import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./sections/services/services.component";
import { FeatsComponent } from "./sections/feats/feats.component";
import { TestimonialsComponent } from "./sections/testimonials/testimonials.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ServicesComponent, FeatsComponent, TestimonialsComponent, FooterComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
