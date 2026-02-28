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

The contact form sends submissions to **info@relytechserve.com** via [Formspree](https://formspree.io).

**Setup:**

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and set **info@relytechserve.com** as the recipient
3. Copy your form ID from the endpoint (e.g. `https://formspree.io/f/xyzabcde` → form ID is `xyzabcde`)
4. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=xyzabcde
   ```
5. Restart the dev server: `npm run dev`

For production (Vercel, etc.), add `NEXT_PUBLIC_FORMSPREE_FORM_ID` to your environment variables.

## Deployment

- **Vercel:** `npm run build` then deploy to [vercel.com](https://vercel.com)
- **Custom domain:** Connect `relytechserve.com` in your host's DNS settings

## Future Enhancements

- Client portal with login
- AI chatbot
- Consultation booking calendar
- Blog admin interface
- CMS integration
