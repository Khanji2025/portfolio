export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface ContactData {
  headline: string;
  subtext: string;
  email: string;
  socialLinks: SocialLink[];
}
