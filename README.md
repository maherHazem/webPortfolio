# Personal Web Portfolio

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, multilingual personal portfolio website built with Astro. This portfolio showcases my projects, skills, and professional experience with a focus on performance, accessibility, and seamless user experience across languages.

## ✨ Key Features

- **🌐 Multilingual Support**: Built-in language selector with full i18n capabilities
- **⚡ Blazing Fast**: Astro's island architecture for optimal performance
- **📱 Fully Responsive**: Perfectly optimized for all devices
- **🎨 Custom Components**: Extensive library of reusable UI components
- **🧩 Hybrid Rendering**: Strategic use of static and interactive components
- **♿ Accessibility First**: WCAG compliant design patterns
- **📊 Content Collections**: Structured content management with TypeScript

## 🗺️ Language Support

The portfolio includes full internationalization support:

- **English** (Default)
- **Spanish**

The language selector provides:
- Persistent language preference across sessions
- SEO-friendly language-specific URLs
- Automatic content switching without page reload
- Respects browser language preferences

## 🧩 Component Architecture

### Custom Components
- **Layout Components**: Header, Footer, Navigation
- **UI Components**: Buttons, Cards, Modals, Tooltips
- **Section Components**: Hero, About, Projects, Contact
- **Interactive Elements**: Language switcher, Theme toggler

### Library Components
- **Animation**: Framer Motion / AOS for scroll animations
- **Icons**: Lucide React / React Icons
- **Forms**: React Hook Form for contact
- **Carousels**: Swiper.js for project showcases

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v4+
- **UI Library**: [React](https://reactjs.org) for interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom configuration
- **Type Safety**: [TypeScript](https://www.typescriptlang.org)
- **Internationalization**: [Astro i18n](https://docs.astro.build/en/guides/internationalization/) / Custom implementation
- **Content**: Astro Content Collections with MDX
- **Deployment**: Netlify / Vercel / Cloudflare Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/          # Buttons, icons, navigation
│   ├── layout/          # Header, footer, wrappers
│   ├── sections/        # Hero, about, projects
│   └── interactive/     # Language selector, theme toggle
├── content/             # Content collections
│   ├── projects/        # Project data and MDX files
│   ├── blog/            # Blog posts
│   └── config/          # Site configuration
├── layouts/             # Page layouts
│   ├── BaseLayout.astro # Main layout wrapper
│   └── PageLayout.astro # Page-specific layout
├── pages/               # Route pages
│   ├── en/              # English routes
│   ├── es/              # Spanish routes
│   └── index.astro      # Language detection/redirect
├── styles/              # Global styles
├── utils/               # Helper functions
│   ├── i18n/            # Translation utilities
│   └── animations/      # Animation helpers
└── types/               # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/maherHazem/webPortfolio
cd web-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 🌍 Internationalization

### Adding a New Language

1. Create language folder in `src/pages/`
2. Add translations in `src/utils/i18n/ui.ts/`
3. Update language configuration in `src/utils/i18n/utils.ts`
4. Add language option to the selector component

### Translation Files Structure
```typescript
// src/utils/i18n/translations/en.ts
export default {
  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    title: "Hi, I'm [Your Name]",
    subtitle: "Full Stack Developer"
  },
  // ... more translations
}
```

## 🎨 Custom Components

### Interactive Components
- **LanguageSelector**: Dropdown/flag-based language switcher
- **ThemeToggle**: Dark/light mode switcher
- **ProjectCard**: Animated project showcase card
- **SkillBars**: Animated skill progression bars
- **ContactForm**: Validated contact form with email integration

### Layout Components
- **Navigation**: Responsive navbar with mobile menu
- **Footer**: Social links and sitemap
- **SEO**: Dynamic meta tags per route/language
- **Breadcrumbs**: Navigation context

## 📱 Responsive Design

The portfolio is meticulously crafted for all screen sizes:

| Breakpoint | Device | Layout Adjustments |
|------------|--------|-------------------|
| < 640px | Mobile | Stacked layout, hamburger menu |
| 640px - 1024px | Tablet | Two-column sections, visible navigation |
| > 1024px | Desktop | Full layout with enhanced animations |

## ⚡ Performance Optimizations

- **Astro Islands**: Interactive components load independently
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Font Loading**: Optimized font strategy with fallbacks
- **CSS Purge**: Unused styles removed in production
- **Prefetching**: Intelligent route prefetching
- **Partial Hydration**: Only interactive components hydrate

## 🔧 Configuration

### Site Configuration
```typescript
// src/content/config/site.ts
export const siteConfig = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website",
  author: "Your Name",
  languages: ["en", "es"],
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
}
```

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://yourportfolio.com',
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
```

## 📦 Deployment

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Vercel
```bash
vercel --prod
```

### Cloudflare Pages
```bash
npm run build
# Deploy dist/ folder to Cloudflare Pages
```

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Your Name**
- [Portfolio](https://glittering-biscuit-f63091.netlify.app/en/)
- GitHub: [@maherHazem](https://github.com/maherHazem)
- LinkedIn: [Maher Hazem](https://linkedin.com/in/yourusername)
- Email: maherhazem@hotmail.com

---

⭐ Star this repo if you find it helpful!

[![GitHub stars](https://img.shields.io/github/stars/maherHazem/webPortfolio?style=social)](https://github.com/maherHazem/webPortfolio)
