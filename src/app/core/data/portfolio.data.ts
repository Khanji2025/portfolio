import { NavLink, Skill, Project, Experience, SocialLink } from '../models/portfolio.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Angular', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 72, category: 'backend' },
  { name: 'Python', level: 68, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'Git', level: 88, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A dark neo-modern portfolio built with Angular 19 and Tailwind CSS.',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true,
    status: 'completed',
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and dark theme.',
    tags: ['Angular', 'TypeScript', 'Chart.js', 'REST API'],
    githubUrl: 'https://github.com',
    featured: true,
    status: 'completed',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and seamless UX.',
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 'taskmanager',
    title: 'Task Manager App',
    description: 'Drag-and-drop task manager with team collaboration features.',
    tags: ['Angular', 'TypeScript', 'WebSockets'],
    githubUrl: 'https://github.com',
    featured: false,
    status: 'completed',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'TechCorp Solutions',
    role: 'Senior Frontend Developer',
    startDate: 'Jan 2023',
    endDate: null,
    description: [
      'Led development of Angular-based enterprise applications serving 50k+ users',
      'Architected component library reducing development time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with UX team to implement pixel-perfect designs',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind'],
    type: 'full-time',
  },
  {
    id: 'exp2',
    company: 'StartupXYZ',
    role: 'Frontend Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Built responsive web applications from scratch using Angular and React',
      'Improved application performance by 60% through lazy loading and caching',
      'Implemented CI/CD pipelines with GitHub Actions',
    ],
    technologies: ['Angular', 'React', 'JavaScript', 'SCSS', 'Firebase'],
    type: 'full-time',
  },
  {
    id: 'exp3',
    company: 'Freelance',
    role: 'Freelance Web Developer',
    startDate: 'Jan 2020',
    endDate: 'May 2021',
    description: [
      'Delivered 15+ web projects for various clients across industries',
      'Specialized in responsive design and performance optimization',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Figma'],
    type: 'freelance',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];
