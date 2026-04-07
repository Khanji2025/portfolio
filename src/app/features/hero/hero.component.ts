import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  socialLinks = SOCIAL_LINKS;
  roles = ['Frontend Developer', 'Angular Specialist', 'UI/UX Enthusiast', 'TypeScript Expert'];
  currentRoleIndex = 0;

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
