import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { projectsData } from '../../data/projects.data';
import { ProjectsData, Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  standalone: true
})
export class ProjectsComponent implements OnInit {
  projectsData: ProjectsData = projectsData;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.setupCardStaggerAnimation();
  }

  private setupCardStaggerAnimation(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 100); // 100ms stagger delay
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      cards.forEach(card => observer.observe(card));
    }, 100);
  }

  openLink(url?: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}
