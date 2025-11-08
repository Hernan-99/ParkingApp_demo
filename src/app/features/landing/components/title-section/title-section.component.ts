import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [],
  template:
    '<h2 class="text-white text-4xl font-bold mb-16">{{titleSection}} <span class="text-blue-500">{{spanTitle}}</span></h2>',
})
export class TitleSectionComponent {
  @Input() titleSection: string = '';
  @Input() spanTitle: string = '';
}
