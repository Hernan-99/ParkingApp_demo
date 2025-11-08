import { Component } from '@angular/core';
import { TitleSectionComponent } from "../../components/title-section/title-section.component";

@Component({
  selector: 'app-feats',
  standalone: true,
  imports: [TitleSectionComponent],
  templateUrl: './feats.component.html',
  styleUrl: './feats.component.css'
})
export class FeatsComponent {

}
