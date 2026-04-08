import { ProjectsData } from '../models/project.model';

export const projectsData: ProjectsData = {
  sectionLabel: 'Projects',
  sectionSubtitle: 'Selected work I\'ve shipped.',
  projects: [
    {
      id: 'garage-master',
      title: 'Garage Master',
      description: 'Full-stack vehicle service platform with complex RBAC, real-time dashboards, and automated customer/mechanic portals. Reduced manual entry by 30% and improved service tracking transparency by 50%.',
      thumbnail: 'https://placehold.co/600x400/1a1a2e/6366f1?text=Garage+Master',
      techStack: ['ASP.NET Core', 'PostgreSQL', 'Angular', 'EF Core', 'JWT'],
      githubUrl: 'https://github.com/yourusername/garage-master'
    },
    {
      id: 'agentic-pet',
      title: 'Agentic.pet',
      description: 'Multi-tenant platform scaled to support 1K+ daily transactions and 30K+ users. Implemented isolated database schemas with row-level security and JWT authentication.',
      thumbnail: 'https://placehold.co/600x400/1a1a2e/6366f1?text=Agentic.pet',
      techStack: ['ASP.NET Core', 'PostgreSQL', 'Angular', 'Multi-tenancy', 'RLS'],
      liveUrl: 'https://agentic.pet'
    },
    {
      id: 'petvivo',
      title: 'PetVivo',
      description: 'E-commerce platform with optimized query latency (40% improvement) through PostgreSQL indexing and CTE-based refinement. Implemented idempotency keys to prevent duplicate payments.',
      thumbnail: 'https://placehold.co/600x400/1a1a2e/6366f1?text=PetVivo',
      techStack: ['ASP.NET Core', 'PostgreSQL', 'Payment Integration', 'Angular'],
      liveUrl: 'https://petvivo.com'
    },
    {
      id: 'dine-ai',
      title: 'Dine.ai',
      description: 'AI-powered restaurant platform with semantic search engine using vector embeddings. Enhanced search reliability for misspelled or related terms.',
      thumbnail: 'https://placehold.co/600x400/1a1a2e/6366f1?text=Dine.ai',
      techStack: ['ASP.NET Core', 'AI/LLM', 'Vector Embeddings', 'Angular', 'PostgreSQL'],
      liveUrl: 'https://dine.ai'
    },
    {
      id: 'charity-system',
      title: 'Charity Management System',
      description: 'Full-stack case management system for 500+ beneficiaries with role-based authentication and REST API. Streamlined coordination for 15 staff members.',
      thumbnail: 'https://placehold.co/600x400/1a1a2e/6366f1?text=Charity+System',
      techStack: ['ASP.NET Core', 'PostgreSQL', 'Angular', 'RBAC', 'REST API'],
      githubUrl: 'https://github.com/yourusername/charity-system'
    }
  ]
};
