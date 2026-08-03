import { ProjectsData } from '../models/project.model';

export const projectsData: ProjectsData = {
  sectionLabel: 'Projects',
  sectionSubtitle: 'Selected enterprise & cloud backend systems I\'ve shipped to production.',
  projects: [
    {
      id: 'orcast-infra',
      title: 'Orcast.net Server Infrastructure',
      description: 'Hardened dedicated Hetzner Linux VPS running containerized Nginx reverse-proxy routing, Cloudflare proxy protection, UFW firewalls, and automated Let\'s Encrypt SSL/TLS certificates — maintaining 99.9% uptime across production web services.',
      thumbnail: 'https://placehold.co/600x400/0b221e/249d8f?text=Orcast.net+Cloud+Infra',
      techStack: ['Linux', 'Hetzner VPS', 'Docker', 'Nginx', 'Cloudflare', 'UFW', 'Let\'s Encrypt'],
      liveUrl: 'https://orcast.net'
    },
    {
      id: 'garage-master',
      title: 'GarageMaster ERP Platform',
      description: 'Multi-tenant B2B ERP platform (Sales, Ordering, Maintenance) using ASP.NET Core, EF Core, Dapper, and PostgreSQL. Implemented Clean Architecture, Repository Pattern, multi-schema tenant isolation, API versioning (v1/v2 rollback), and Angular 19 client.',
      thumbnail: 'https://placehold.co/600x400/0b221e/249d8f?text=GarageMaster+ERP',
      techStack: ['ASP.NET Core', 'EF Core', 'Dapper', 'PostgreSQL', 'Multi-tenancy', 'Angular 19'],
      githubUrl: 'https://github.com/akhanji/garage-master'
    },
    {
      id: 'petvivo-dine-ai',
      title: 'AI RAG & Real-Time Backend Engine',
      description: 'Gemini Flash AI RAG middleware streaming chunked responses via WebSockets (SignalR) with 10+ function-calling API tools, Qdrant vector search, and PostgreSQL query optimization (70% latency drop from 850ms to 298ms) serving 20,000+ active users.',
      thumbnail: 'https://placehold.co/600x400/0b221e/249d8f?text=AI+RAG+%26+Backend+Engine',
      techStack: ['Node.js', 'Deno', 'Python', 'Qdrant Vector DB', 'PostgreSQL', 'Redis', 'SignalR'],
      liveUrl: 'https://dine.ai'
    },
    {
      id: 'salary-solution',
      title: 'Salary Solution Payroll Platform',
      description: 'Multi-company payroll auditing platform built with Python, FastAPI, SQLAlchemy ORM (Code-First migrations), and MySQL with paginated API endpoints, deployed via Docker Compose on Cloud VPS secured via Cloudflare.',
      thumbnail: 'https://placehold.co/600x400/0b221e/249d8f?text=Salary+Solution+Payroll',
      techStack: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Docker', 'Ionic', 'Capacitor'],
      githubUrl: 'https://github.com/akhanji/salary-solution'
    }
  ]
};
