import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PROJECTS } from '../../core/data/portfolio.data';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  allProjects: Project[] = PROJECTS;
  showAll = false;

  get displayedProjects(): Project[] {
    return this.showAll ? this.allProjects : this.allProjects.filter(p => p.featured);
  }

  getStatusColor(status: string): 'cyan' | 'purple' | 'green' | 'pink' | 'default' {
    const map: Record<string, 'cyan' | 'purple' | 'green' | 'pink' | 'default'> = {
      completed: 'green',
      'in-progress': 'cyan',
      planned: 'purple',
    };
    return map[status] ?? 'default';
  }
}
