import { Component } from '@angular/core';
import { TitleSectionComponent } from '../../components/title-section/title-section.component';
import { ScrollEffectDirective } from '../../../../shared/directives/scrollEffect.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleSectionComponent, ScrollEffectDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
