import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnDestroy {
  socialLinks = SOCIAL_LINKS;
  roles = ['Frontend Developer', 'Angular Specialist', 'UI/UX Enthusiast', 'TypeScript Expert'];
  currentRoleIndex = 0;
  private roleInterval: ReturnType<typeof setInterval>;

  constructor() {
    this.roleInterval = setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    }, 2500);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    clearInterval(this.roleInterval);
  }
}
