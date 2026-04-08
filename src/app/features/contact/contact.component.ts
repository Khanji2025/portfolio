import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactData } from '../../data/contact.data';
import { ContactData } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  standalone: true
})
export class ContactComponent {
  contactData: ContactData = contactData;

  sendEmail(): void {
    window.location.href = `mailto:${this.contactData.email}`;
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
