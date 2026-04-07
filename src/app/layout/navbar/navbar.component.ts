import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NAV_LINKS } from '../../core/data/portfolio.data';
import { NavLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  navLinks: NavLink[] = NAV_LINKS;
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = '';

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
    this.updateActiveSection();
  }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    for (const section of sections.reverse()) {
      const el = document.getElementById(section);
      if (el && window.scrollY >= el.offsetTop - 100) {
        this.activeSection = section;
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(href: string): void {
    this.isMobileMenuOpen = false;
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
