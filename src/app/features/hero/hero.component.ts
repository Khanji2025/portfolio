import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroData } from '../../data/hero.data';
import { HeroData } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  standalone: true
})
export class HeroComponent {
  heroData: HeroData = heroData;

  handleButtonClick(action: string, url?: string): void {
    switch (action) {
      case 'scrollToProjects':
        this.scrollToProjects();
        break;
      case 'scrollToContact':
        this.scrollToContact();
        break;
      case 'external':
        if (url) {
          window.open(url, '_blank');
        }
        break;
    }
  }

  private scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }

  private scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
