/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#0f0f1a',
        'bg-tertiary': '#12121f',
        'bg-card': '#1a1a2e',
        'bg-card-hover': '#1e1e35',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'text-muted': '#475569',
        'accent-cyan': '#00d4ff',
        'accent-purple': '#7c3aed',
        'accent-green': '#10b981',
        'accent-pink': '#ec4899',
        'border-subtle': '#1e2a3a',
        'border-glow': '#00d4ff33',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.15)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 212, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}

