import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { aboutData } from '../../data/about.data';
import { AboutData } from '../../models/about.model';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
