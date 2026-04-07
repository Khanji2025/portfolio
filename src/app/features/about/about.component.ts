import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  highlights = [
    { icon: '🚀', title: 'Performance First', description: 'Every line of code is optimized for speed and efficiency.' },
    { icon: '🎨', title: 'Design Focused', description: 'I bridge the gap between stunning design and clean code.' },
    { icon: '🔧', title: 'Clean Architecture', description: 'Scalable, maintainable code following best practices.' },
    { icon: '📱', title: 'Responsive by Default', description: 'Mobile-first approach ensuring great UX on all devices.' },
  ];
}
