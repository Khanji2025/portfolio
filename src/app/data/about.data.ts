import { AboutData } from '../models/about.model';

export const aboutData: AboutData = {
  sectionLabel: 'About',
  paragraphs: [
    "I'm a Software Engineer with 2 years of production experience specializing in the architecture of high-scale, multi-tenant databases and secure, UX-centric full-stack systems. I build resilient backends with ASP.NET Core (C#) and responsive Angular frontends.",
    "My approach focuses on solving complex challenges through clean architecture, optimized queries, and secure implementation. I've scaled products to support 1K+ daily transactions and 30K+ users, while maintaining high performance and data integrity.",
    "I'm passionate about building systems that not only work, but scale. From implementing idempotency patterns to prevent duplicate transactions, to optimizing PostgreSQL queries for 40% faster response times — I care about the details that make software reliable and efficient."
  ],
  visualType: 'code',
  visual: {
    code: {
      language: 'csharp',
      snippet: `var engineer = new SoftwareEngineer
{
    Name = "Abdulrahman Khanji",
    Role = "Full-Stack Developer",
    Specialization = new[] {
        "ASP.NET Core",
        "Angular",
        "PostgreSQL"
    },
    Experience = "2+ years",
    Focus = new[] {
        "Multi-tenant Architecture",
        "Query Optimization",
        "Secure Systems"
    }
};`
    }
  }
};
