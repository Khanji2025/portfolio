export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectsData {
  sectionLabel: string;
  sectionSubtitle: string;
  projects: Project[];
}
