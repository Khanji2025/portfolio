import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { EXPERIENCES } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, BadgeComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences = EXPERIENCES;

  getTypeBadgeVariant(type: string): 'cyan' | 'purple' | 'green' | 'pink' | 'default' {
    const map: Record<string, 'cyan' | 'purple' | 'green' | 'pink' | 'default'> = {
      'full-time': 'green',
      'part-time': 'cyan',
      freelance: 'purple',
      internship: 'pink',
    };
    return map[type] ?? 'default';
  }
}
