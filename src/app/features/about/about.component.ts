import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { aboutData } from '../../data/about.data';
import { AboutData } from '../../models/about.model';

type TabType = 'csharp' | 'sql' | 'json';

interface CodeTab {
  id: TabType;
  filename: string;
  lang: string;
  content: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  standalone: true
})
export class AboutComponent implements OnInit {
  @ViewChild('leftColumn') leftColumn!: ElementRef;
  @ViewChild('rightColumn') rightColumn!: ElementRef;

  aboutData: AboutData = aboutData;
  leftVisible = false;
  rightVisible = false;
  activeTab = signal<TabType>('csharp');

  codeTabs: CodeTab[] = [
    {
      id: 'csharp',
      filename: 'Engineer.cs',
      lang: 'C#',
      content: `public class EngineerProfile
{
    public string Name => "Abdulrahman Khanji";
    public string Role => "Backend & Cloud Engineer";
    public string[] CoreStack => ["ASP.NET Core (C#)", "Node.js", "Python", "PostgreSQL", "Docker"];
    public string Focus => "High-Performance APIs, Query Optimization & RAG AI Systems";
}`
    },
    {
      id: 'sql',
      filename: 'Optimization.sql',
      lang: 'SQL',
      content: `-- Optimized Recursive CTE & PostgreSQL Indexing
EXPLAIN ANALYZE SELECT * FROM hierarchical_menus;

-- 70% Query Latency Drop (850ms -> 298ms) via Indexing & Redis TTL Caching`
    },
    {
      id: 'json',
      filename: 'SystemMetrics.json',
      lang: 'JSON',
      content: `{
  "uptime": "99.9%",
  "active_users": "> 20,000",
  "abuse_savings": "$2,000+/mo",
  "architecture": "Clean Architecture & SOLID"
}`
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  copiedPhone = signal(false);

  copyPhone(phone: string): void {
    navigator.clipboard.writeText(phone);
    this.copiedPhone.set(true);
    setTimeout(() => this.copiedPhone.set(false), 2000);
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener noreferrer');
  }

  selectTab(tabId: TabType): void {
    this.activeTab.set(tabId);
  }

  getActiveTabContent(): CodeTab {
    return this.codeTabs.find(t => t.id === this.activeTab()) || this.codeTabs[0];
  }

  ngOnInit(): void {
    this.setupIntersectionObserver();
    this.setupSectionReveal();
  }

  private setupSectionReveal(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = document.querySelectorAll('.section-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  private setupIntersectionObserver(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.leftVisible = true;
      this.rightVisible = true;
      return;
    }

    const options = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.leftColumn?.nativeElement) {
            this.leftVisible = true;
            setTimeout(() => {
              this.rightVisible = true;
            }, 200);
            observer.unobserve(entry.target);
          }
        }
      });
    }, options);

    setTimeout(() => {
      if (this.leftColumn?.nativeElement) {
        observer.observe(this.leftColumn.nativeElement);
      }
    });
  }
}
