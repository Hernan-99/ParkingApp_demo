import { Component } from '@angular/core';
import { TitleSectionComponent } from "../../components/title-section/title-section.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
