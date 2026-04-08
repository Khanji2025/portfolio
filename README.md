/0# Portfolio Website

A modern, minimalist portfolio website built with Angular 19 and Tailwind CSS, featuring Apple-style smooth animations and a fully data-driven architecture.

![Portfolio Preview](.view.png)

## 🌟 Features

- **Modern Design**: Clean, professional interface with Apple-inspired aesthetics
- **Smooth Animations**: Buttery-smooth scroll-triggered animations and transitions
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Data-Driven**: All content separated into data files for easy customization
- **Type-Safe**: Full TypeScript implementation with strict typing
- **Accessibility**: Respects `prefers-reduced-motion` for accessibility

## 📋 Sections

1. **Hero Section**: Name, tagline, and call-to-action buttons with fade-in animations
2. **About Section**: Professional summary with visual elements (code snippet/image/stats)
3. **Projects Section**: Grid showcase of portfolio projects with hover effects
4. **Skills Section**: Categorized technology stack with icons
5. **Contact Section**: Email CTA and social media links
6. **Footer**: Copyright and credits

## 🛠️ Tech Stack

### Frontend
- **Angular 19.2.0**: Modern standalone components architecture
- **TypeScript 5.7.2**: Strict mode for type safety
- **Tailwind CSS 4.2.2**: Utility-first CSS framework
- **RxJS 7.8.0**: Reactive programming

### Development Tools
- **Angular CLI**: Project scaffolding and build tools
- **Git**: Version control

### External Resources
- **Devicons**: Technology logos via CDN
- **Google Fonts**: Typography (customizable)

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Angular CLI** (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khanji2025/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   
   Or if you have Angular CLI installed:
   ```bash
   ng serve
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:4200/`
   
   The application will automatically reload when you make changes to the source files.

## 📝 Customization Guide

### Step 1: Update Personal Information

All content is stored in the `src/app/data/` folder. Update these files with your information:

#### **1. Hero Section** (`src/app/data/hero.data.ts`)

```typescript
export const heroData: Hero = {
  greeting: 'Hi, I\'m',
  name: 'Your Name',  // ← Change this
  tagline: 'Your Professional Title or Tagline',  // ← Change this
  cta: {
    primary: { text: 'View My Work', link: '#projects' },
    secondary: { text: 'Get In Touch', link: '#contact' }
  }
};
```

#### **2. About Section** (`src/app/data/about.data.ts`)

```typescript
export const aboutData: About = {
  paragraphs: [
    'Your first paragraph about yourself...',  // ← Change these
    'Your second paragraph...',
    'Your third paragraph...'
  ],
  visual: {
    type: 'code',  // Options: 'code', 'image', 'stats'
    content: `// Your code snippet
const engineer = {
  name: "Your Name",
  role: "Your Role",
  // ... customize the code block
};`
  }
};
```

**Visual Type Options:**
- `'code'`: Shows a terminal-style code snippet
- `'image'`: Displays a profile image (requires imageUrl property)
- `'stats'`: Shows statistics grid (requires stats array)

#### **3. Projects Section** (`src/app/data/projects.data.ts`)

```typescript
export const projectsData: Project[] = [
  {
    title: 'Your Project Name',
    description: 'Brief description of your project...',
    thumbnail: '/assets/project-thumbnail.jpg',  // ← Add your image
    technologies: ['Angular', 'TypeScript', 'Tailwind'],  // ← Your tech stack
    githubUrl: 'https://github.com/yourusername/project',  // Optional
    liveUrl: 'https://yourproject.com'  // Optional
  },
  // Add more projects...
];
```

**Pro Tip**: Add project screenshots to `public/assets/` folder and reference them in the thumbnail property.

#### **4. Skills Section** (`src/app/data/skills.data.ts`)

```typescript
export const skillsData: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

**Finding Icons**: Browse [Devicon](https://devicon.dev/) for technology icons, then use the CDN URL format:
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{technology}/{technology}-{variant}.svg
```

#### **5. Contact Section** (`src/app/data/contact.data.ts`)

```typescript
export const contactData: Contact = {
  headline: 'Let\'s work together',
  subtext: 'Have a project in mind? I\'d love to hear about it.',
  email: 'your.email@example.com',  // ← Change this
  socialLinks: [
    { 
      platform: 'GitHub', 
      url: 'https://github.com/yourusername',  // ← Change this
      icon: 'github' 
    },
    { 
      platform: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourprofile',  // ← Change this
      icon: 'linkedin' 
    },
    // Add more social links...
  ]
};
```

#### **6. Footer Section** (`src/app/data/footer.data.ts`)

```typescript
export const footerData: Footer = {
  copyright: 'Your Name',  // ← Change this
  builtWith: 'Built with Angular'
};
```

### Step 2: Customize Colors (Optional)

Edit `src/styles.css` to change the color scheme:

```css
@theme {
  --color-surface: #0a0a0a;          /* Main background */
  --color-surface-raised: #141414;    /* Card backgrounds */
  --color-accent: #3b82f6;            /* Primary accent color */
  --color-accent-hover: #2563eb;      /* Hover state */
  --color-text-primary: #fafafa;      /* Main text */
  --color-text-secondary: #a3a3a3;    /* Secondary text */
  /* ... more color variables */
}
```

### Step 3: Add Your Profile Image (Optional)

1. Add your image to `public/assets/` (e.g., `profile.jpg`)
2. Update `about.data.ts`:

```typescript
visual: {
  type: 'image',
  imageUrl: '/assets/profile.jpg'
}
```

### Step 4: Customize Animations (Optional)

Edit animation timings in `src/styles.css`:

```css
.section-reveal {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);  /* ← Change duration */
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── features/              # Feature components
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   └── contact/
│   │   ├── shared/                # Shared components
│   │   │   └── components/
│   │   │       └── footer/
│   │   ├── models/                # TypeScript interfaces
│   │   │   ├── hero.model.ts
│   │   │   ├── about.model.ts
│   │   │   ├── project.model.ts
│   │   │   ├── skills.model.ts
│   │   │   ├── contact.model.ts
│   │   │   └── footer.model.ts
│   │   ├── data/                  # Content data files ← EDIT THESE
│   │   │   ├── hero.data.ts
│   │   │   ├── about.data.ts
│   │   │   ├── projects.data.ts
│   │   │   ├── skills.data.ts
│   │   │   ├── contact.data.ts
│   │   │   └── footer.data.ts
│   │   ├── app.component.ts       # Main app component
│   │   └── app.config.ts          # App configuration
│   ├── styles.css                 # Global styles & animations
│   ├── index.html                 # HTML entry point
│   └── main.ts                    # Application bootstrap
├── public/
│   └── assets/                    # Static assets (images, etc.)
├── docs/                          # Documentation
│   └── portfolio_layout_design.md # Design specifications
├── angular.json                   # Angular configuration
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Build and watch for changes
npm run watch

# Run unit tests
npm test
```

## 🏗️ Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Output location**
   
   Production files will be in `dist/portfolio/browser/`

3. **Deploy**
   
   Upload the contents of the `dist/portfolio/browser/` folder to your hosting provider.

### Deployment Options

#### **GitHub Pages**
```bash
# Install Angular CLI GitHub Pages tool
npm install -g angular-cli-ghpages

# Build and deploy
ng build --configuration production --base-href "https://yourusername.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

#### **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Netlify**
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/portfolio/browser`

## 🎨 Design Philosophy

This portfolio follows a minimalist, Apple-inspired design philosophy:

- **Less is More**: Clean layouts with ample white space
- **Smooth Interactions**: Carefully crafted animations with proper easing curves
- **Typography-First**: Clear hierarchy with well-chosen font sizes
- **Subtle Depth**: Gentle shadows and raised surfaces instead of harsh borders
- **Responsive by Default**: Mobile-first approach ensures great experience on all devices

## ♿ Accessibility

- Semantic HTML5 structure
- Respects `prefers-reduced-motion` system setting
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support
- ARIA labels where appropriate

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Run on a different port
ng serve --port 4300
```

### Icons Not Showing
- Check your internet connection (icons load from CDN)
- Verify icon URLs in `skills.data.ts`
- For dark backgrounds, black icons may need CSS filters (already handled for GitHub/Flask)

### Animations Not Working
- Check browser console for errors
- Ensure Intersection Observer is supported (all modern browsers)
- Verify CSS animations are not disabled by `prefers-reduced-motion`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Abdulrahman Khanji**
- Email: a.khanji.2025@gmail.com
- GitHub: [@Khanji2025](https://github.com/Khanji2025)
- LinkedIn: [abdulrahman-tamassili-khanji](https://linkedin.com/in/abdulrahman-tamassili-khanji-30194b35b)

---

**Built with ❤️ using Angular 19 and Tailwind CSS**

*If you found this portfolio template helpful, consider giving it a ⭐ on GitHub!*
