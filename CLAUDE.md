# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Juan Rosero's personal website built with Astro. Originally inspired by the AstroPaper template, it has evolved into a custom resume/portfolio site. The site is primarily built with Astro components and uses GSAP for animations. React is included but currently unused.

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
- **Content**: JSON-based profile data for resume content
- **Animations**: GSAP 3.x for scroll-triggered animations
- **Motion**: Motion library included but unused
- **Deployment**: Netlify (configured via netlify.toml)

### Project Structure
- `src/config.ts` - Site configuration and social links
- `src/content/` - Blog content using Astro Content Collections
- `src/layouts/Layout.astro` - Main layout with SEO meta tags
- `src/components/` - Reusable components including React components
- `src/pages/` - Route pages (index, about, 404)
- `src/assets/` - Images and brand icons for the knowledge chart

### Key Components
- `Button.astro` - Reusable button component with variants
- `TranslucidSection.astro` - Semi-transparent section wrapper
- `Layout.astro` - Main layout with SEO meta tags and theme support
- Content is managed through JSON profile data in `src/assets/profile.json`

### Theming
- Uses CSS custom properties for theming
- Theme toggle functionality via `/public/toggle-theme.js`
- Dark/light mode support built into the layout

### Content Management
- Resume/portfolio content stored in `src/assets/profile.json`
- Professional summary, experience, skills, and education data
- Brand icons for technical skills in `src/assets/brand-icons/`

## Code Quality

The project uses:
- Biome for linting and formatting (supports .astro files)
- Prettier with Astro and Tailwind plugins for markdown files
- Lint-staged for pre-commit formatting and linting
- Commitizen for conventional commits
- Husky for git hooks

## Deployment

- Configured for Netlify deployment via `netlify.toml`
- Includes sitemap generation
- RSS feed generation
- PDF resume generation capability