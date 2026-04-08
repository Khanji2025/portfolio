export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  buttons: {
    primary: {
      text: string;
      action: 'scrollToProjects' | 'scrollToContact' | 'external';
      url?: string;
    };
    secondary: {
      text: string;
      action: 'scrollToProjects' | 'scrollToContact' | 'external';
      url?: string;
    };
  };
}
