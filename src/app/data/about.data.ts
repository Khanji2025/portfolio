import { AboutData } from '../models/about.model';

export const aboutData: AboutData = {
  sectionLabel: 'About',
  paragraphs: [
    "I'm a Backend & Cloud Engineer specializing in high-performance .NET (C#), Node.js, Deno, and Python systems across B2B, ERP, and multi-tenant SaaS platforms.",
    "I have architected and shipped 5+ production platforms serving 20,000+ users across the Middle East, USA, and Canada — reducing PostgreSQL query latency by 70% (850ms to 298ms), building real-time webhook architectures, and hardening payment security (saving $2,000+/mo).",
    "I also served as sole AI-backend integration engineer building Gemini Flash RAG middleware, Qdrant vector search, and function-calling API tools, while managing containerized Linux server infrastructure with 99.9% uptime."
  ],
  visualType: 'code',
  visual: {
    code: {
      language: 'csharp',
      snippet: `var engineer = new BackendEngineer
{
    Name = "Abdulrahman Khanji",
    Role = "Backend & Cloud Engineer",
    Stack = new[] {
        ".NET Core (C#)", "Node.js", "Python",
        "PostgreSQL", "Redis", "Docker"
    },
    ProvenImpact = new[] {
        "70% Query Latency Drop (850ms -> 298ms)",
        "Sole AI-Backend RAG Owner (20k+ Users)",
        "99.9% Linux VPS Uptime (Orcast.net)"
    },
    Location = "Riyadh, Saudi Arabia (Valid Iqama)"
};`
    }
  }
};
