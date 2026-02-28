# Rely Tech Serve Website

Modern, professional website for Rely Tech Serve — a technology consulting company specializing in automation, AI solutions, and digital transformation.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Heroicons**

## Getting Started

1. **Install Node.js** (v18 or later) if you haven't already: [nodejs.org](https://nodejs.org)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` — Pages and layouts (Next.js App Router)
- `src/components/` — Reusable components (Navigation, Footer)
- `tailwind.config.ts` — Tailwind theme (colors, fonts)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, about summary, services, why choose us, testimonials |
| About | `/about` | Mission, vision, experience |
| Services | `/services` | Expandable service cards |
| Solutions | `/solutions` | Solutions for SMEs, enterprise, eCommerce, startups |
| Contact | `/contact` | Contact form + info |
| Blog | `/blog` | Blog listing + article template |

## Contact Form

The contact form currently logs submissions to the console. To store leads in a database:

- Add a backend API route (e.g. `src/app/api/contact/route.ts`)
- Connect to your database (Supabase, PlanetScale, etc.) or use a form service (Formspree, Netlify Forms)
- Update `ContactPage` to POST to your API

## Deployment

- **Vercel:** `npm run build` then deploy to [vercel.com](https://vercel.com)
- **Custom domain:** Connect `relytechserve.com` in your host's DNS settings

## Future Enhancements

- Client portal with login
- AI chatbot
- Consultation booking calendar
- Blog admin interface
- CMS integration
