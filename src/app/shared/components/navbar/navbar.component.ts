import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  name: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks: NavLink[] = [
    { name: 'About',    href: '#about'    },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Contact',  href: '#contact'  },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(val => !val);
  }

  scrollToSection(href: string, event: Event): void {
    event.preventDefault();
    this.mobileMenuOpen.set(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
