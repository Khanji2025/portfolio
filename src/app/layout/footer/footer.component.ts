import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS, NAV_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialLinks = SOCIAL_LINKS;
  navLinks = NAV_LINKS;
  currentYear = new Date().getFullYear();
}
