# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Juan Rosero's personal website built with Astro and based on the AstroPaper template. It features a blog architecture with React components for interactive elements. The site includes an "About" page with a custom KnowledgeChart component that visualizes technical skills using Recharts.

## Development Commands

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code with Biome linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Check code formatting with Biome
- `npm run format:fix` - Fix formatting issues automatically

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS 4.x with custom CSS variables for theming
- **Content**: Astro Content Collections for blog posts
- **Charts**: Recharts for data visualization (KnowledgeChart component)
- **Animations**: GSAP 3.x for scroll-triggered animations (replacing motion library)
- **Deployment**: Netlify (configured via netlify.toml)

### Project Structure
- `src/config.ts` - Site configuration and social links
- `src/content/` - Blog content using Astro Content Collections
- `src/layouts/Layout.astro` - Main layout with SEO meta tags
- `src/components/` - Reusable components including React components
- `src/pages/` - Route pages (index, about, 404)
- `src/assets/` - Images and brand icons for the knowledge chart

### Key Components
- `KnowledgeChart.tsx` - Interactive scatter chart showing technical skills with custom tooltips
- `Header/` - Navigation with hamburger menu and theme toggle
- `Footer.astro` - Site footer
- Content is managed through Astro's content collections with TypeScript schemas
- `pages/poc.astro` - Barebones POC page for testing GSAP scroll animations with keyhole clip-path effect

### Theming
- Uses CSS custom properties for theming
- Theme toggle functionality via `/public/toggle-theme.js`
- Dark/light mode support built into the layout

### Content Management
- Blog posts are markdown files in `src/content/blog/`
- Content schema enforces consistent frontmatter structure
- OpenGraph image validation (min 1200x630px)

## Code Quality

The project uses:
- Biome for linting and formatting (supports .astro files)
- Prettier with Astro and Tailwind plugins for markdown files
- Lint-staged for pre-commit formatting and linting
- Commitizen for conventional commits
- Husky for git hooks

## Deployment

- Configured for Netlify deployment
- Includes sitemap generation
- RSS feed generation for blog posts