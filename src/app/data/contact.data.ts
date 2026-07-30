import { ContactData } from '../models/contact.model';

export const contactData: ContactData = {
  headline: "Let's work together",
  subtext: "Have a project in mind? I'd love to hear about it.",
  email: 'a.khanji.2025@gmail.com',
  socialLinks: [
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/966553738706',
      ariaLabel: 'Message me directly on WhatsApp'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/Khanji2025',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulrahman-tamassili-khanji/',
      ariaLabel: 'Connect with me on LinkedIn'
    }
  ]
};
