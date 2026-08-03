import { HeroData } from '../models/hero.model';

export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: 'Abdulrahman Tamassili Khanji',
  tagline: 'Backend & Cloud Engineer · .NET Core (C#), Node.js, Python, PostgreSQL, Redis, Docker & Applied AI',
  buttons: {
    primary: {
      text: 'View Projects',
      action: 'scrollToProjects'
    },
    secondary: {
      text: 'Get in Touch',
      action: 'scrollToContact'
    }
  }
};
