# Portfolio Website

A modern frontend developer portfolio built with Nuxt 3, Vue 3, Tailwind CSS, and GSAP. This project showcases a sleek, responsive portfolio layout with animated hero sections, featured projects, experience, skills, qualifications, and a contact section.

## Features

- Animated landing hero with floating avatar and GSAP entry effects
- Responsive navigation with light/dark theme toggle and mobile menu
- Experience, skills, qualifications, and featured projects sections
- Interactive project cards with GitHub, live demo links, and optional demo modal support
- Contact section with email, location, availability, and social links
- Theme persistence using `localStorage`
- Clean Nuxt 3 structure with Tailwind CSS styling and custom components

## Tech Stack

- Nuxt 3
- Vue 3
- Tailwind CSS
- GSAP
- TypeScript
- Devicon icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Generate static site

```bash
npm run generate
```

## Project Structure

- `app.vue` — application root with start screen and router view
- `nuxt.config.ts` — Nuxt configuration, global CSS, metadata, and Tailwind plugin setup
- `pages/index.vue` — main portfolio page layout and sections
- `components/` — reusable UI components such as `Navbar`, `Hero`, `Projects`, `ContactEnhanced`, `WorkExperience`, `Skills`, and `Qualifications`
- `composables/useTheme.ts` — theme toggle logic with persistent theme state
- `assets/main.css` — global styling entrypoint
- `public/images/` — static image assets

## Customize

Update the following files to personalize the portfolio:

- `pages/index.vue` for section order and layout
- `components/Hero.vue` for title, description, and hero content
- `components/Projects.vue` for project cards and demo data
- `components/ContactEnhanced.vue` for contact details and social links
- `composables/useTheme.ts` for theme behavior

## Notes

- Replace placeholder contacts and external links with your real email, social profiles, and project URLs.
- The project uses Nuxt 3 compatibility date `2025-05-15`.

## License

This project is provided as-is. Update licensing information as needed.
