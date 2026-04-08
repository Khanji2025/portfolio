import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { skillsData } from '../../data/skills.data';
import { SkillsData } from '../../models/skills.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  standalone: true
})
export class SkillsComponent implements OnInit {
  skillsData: SkillsData = skillsData;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.setupSkillStaggerAnimation();
  }

  private setupSkillStaggerAnimation(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const skillItems = document.querySelectorAll('.skill-item');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 50); // 50ms stagger delay
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px'
      });

      skillItems.forEach(item => observer.observe(item));
    }, 100);
  }
}
