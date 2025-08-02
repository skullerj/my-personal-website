# Juan Rosero's Personal Website

The source code for my personal website, built with [Astro](https://astro.build) and custom design. This site serves as a showcase of my development skills while providing a playground for experimenting with new technologies, designs, development processes, and AI-assisted development workflows.

## Development Philosophy

This project serves multiple purposes in my development journey:

### Shape Up Methodology
I'm using this as a real-world test of the [Shape Up](https://basecamp.com/shapeup) methodology by Basecamp, working in focused cycles with clear boundaries and outcomes.

### Intentional AI Development
I started this project to hone my skills using AI tooling, particularly [Claude](https://claude.ai/code). While I believe there's significant value in AI-assisted development, I've observed that unsupervised AI work often produces low-quality, low-resolution results. My intention with this project is to be as intentional as possible with AI assistance—using it as a sophisticated tool while maintaining creative control and quality standards.

### Technical Approach
Initially, I set out to create highly animated and interactive experiences using GSAP. Through investigation and experimentation, I discovered that Astro's current capabilities aligned perfectly with my goals, allowing me to build efficiently without overcomplicating the stack.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator and web framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** - Animation library for interactive experiences
- **React** - Included in the project but currently unused

## Development Tools

- **[Claude](https://claude.ai/code)** - AI coding assistant for development and code improvements

## Future Plans

I plan to continue developing this site using the Shape Up methodology, working in focused slates with clear boundaries and outcomes. Upcoming considerations include:

- Adding links to other projects and portfolio pieces
- Potentially creating a blog section
- Continued experimentation with animations and interactions
- Exploring new technologies as they align with the site's goals

## Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── content/        # Content collections (blog posts, etc.)
└── assets/         # Static assets
```


## Credits

Originally inspired by [AstroPaper](https://github.com/satnaing/astro-paper), though the codebase has evolved significantly from its initial foundation. The current implementation represents original work and design decisions.

### Content Creation
I used Claude to write my CV and craft most of the paragraphs throughout this website. The source material came from my previous CVs and professional experience. While the resulting text has a somewhat AI-assisted tone, I've come to accept that it's clearer and more polished than what I could produce within the time constraints I set during the shaping phase of this project.
