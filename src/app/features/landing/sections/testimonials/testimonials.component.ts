import { Component } from '@angular/core';
import { TitleSectionComponent } from "../../components/title-section/title-section.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

}
