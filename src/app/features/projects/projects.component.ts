import { Component, OnInit, Inject, PLATFORM_ID, signal, computed } from '@angular/core';
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
  activeFilter = signal<string>('All');
  selectedProject = signal<Project | null>(null);

  categories = ['All', 'Full-Stack', 'Backend & DB', 'AI & Cloud'];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.projectsData.projects;

    return this.projectsData.projects.filter(p => {
      if (filter === 'Full-Stack') return p.techStack.includes('Angular') && p.techStack.includes('ASP.NET Core');
      if (filter === 'Backend & DB') return p.techStack.includes('PostgreSQL') || p.techStack.includes('Multi-tenancy') || p.techStack.includes('EF Core');
      if (filter === 'AI & Cloud') return p.techStack.includes('AI/LLM') || p.techStack.includes('Vector Embeddings');
      return true;
    });
  });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setFilter(category: string): void {
    this.activeFilter.set(category);
    setTimeout(() => this.setupCardStaggerAnimation(), 50);
  }

  openModal(project: Project): void {
    this.selectedProject.set(project);
  }

  closeModal(): void {
    this.selectedProject.set(null);
  }

  scrollCarousel(direction: 'left' | 'right'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = document.getElementById('projects-carousel');
    if (!container) return;

    const scrollAmount = 340;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

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
            }, index * 100);
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

  openLink(url?: string, event?: Event): void {
    if (event) event.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}
