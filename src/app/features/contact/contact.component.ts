import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeaderComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  socialLinks = SOCIAL_LINKS;
  formData = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.submitted = false;
    }, 3000);
  }

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { icon: '📍', label: 'Location', value: 'San Francisco, CA', href: null },
    { icon: '⏰', label: 'Availability', value: 'Open to opportunities', href: null },
  ];
}
