import { HeroData } from '../models/hero.model';

export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: 'Abdulrahman Khanji',
  tagline: 'Software Engineer · Building scalable, secure full-stack systems',
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
