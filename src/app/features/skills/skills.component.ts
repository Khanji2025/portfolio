import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SKILLS } from '../../core/data/portfolio.data';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  allSkills: Skill[] = SKILLS;
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
  ];

  get filteredSkills(): Skill[] {
    if (this.selectedCategory === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === this.selectedCategory);
  }

  getBarColor(level: number): string {
    if (level >= 85) return 'bg-accent-cyan';
    if (level >= 70) return 'bg-accent-purple';
    return 'bg-accent-green';
  }
}
