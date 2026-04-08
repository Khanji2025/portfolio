export interface Skill {
  name: string;
  icon: string; // Emoji or icon identifier
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillsData {
  sectionLabel: string;
  sectionSubtitle: string;
  categories: SkillCategory[];
}
