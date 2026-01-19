# TMO Campo - Transport PMR Genève

## Overview
Professional website for TMO Campo, a PMR (Personnes à Mobilité Réduite) transport service based in Geneva, Switzerland. The site provides information about transport services for people with reduced mobility, elderly, and students, with contact and quote request forms.

## Project Structure

```
├── client/                    # Frontend React application
│   ├── index.html            # SEO-optimized HTML with JSON-LD structured data
│   └── src/
│       ├── App.tsx           # Main application with routing
│       ├── index.css         # Medical premium design system (Blue/White/Gray)
│       ├── pages/
│       │   └── Home.tsx      # Single-page landing with all sections
│       └── components/
│           ├── layout/
│           │   ├── Header.tsx       # Responsive navigation header
│           │   ├── Footer.tsx       # Contact info and SEO keywords
│           │   └── WhatsAppButton.tsx # Floating WhatsApp contact button
│           └── sections/
│               ├── HeroSection.tsx       # Hero with main CTA
│               ├── ProcessSection.tsx    # 3-step process explanation
│               ├── ServicesSection.tsx   # All transport services
│               ├── AboutSection.tsx      # Company information
│               ├── VideoSection.tsx      # Video placeholders
│               ├── InstitutionsSection.tsx # Quote form for EMS/institutions
│               └── ContactSection.tsx    # Contact form
├── server/                    # Backend Express application
│   ├── routes.ts             # API endpoints for forms
│   └── storage.ts            # In-memory storage for form submissions
└── shared/
    └── schema.ts             # Shared types and Zod validation schemas
```

## Key Features

### SEO Optimization
- **JSON-LD Structured Data**: LocalBusiness and Service schemas for Google Rich Results
- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Semantic HTML**: Proper H1/H2/H3 hierarchy with target keywords
- **Target Keywords**: 
  - Transport PMR Genève
  - Véhicule adapté handicapé Suisse
  - Transport écoliers mobilité réduite

### Design System
- **Theme**: Medical premium (Blue trust, Pure White, Light Gray)
- **Primary Color**: Blue (#2563eb / hsl(210, 85%, 45%))
- **Dark Mode**: Fully supported
- **Responsive**: Mobile-first design

### Forms
- **Contact Form**: Name, email, phone, message
- **Quote Form**: For EMS/institutions with detailed fields
- **Validation**: Zod schemas with error messages

## API Endpoints

### POST /api/contact
Submit a contact form message.
```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "phone": "string (min 10 chars)",
  "message": "string (min 10 chars)"
}
```

### POST /api/quote
Submit a quote request for institutions.
```json
{
  "institutionName": "string",
  "contactName": "string",
  "email": "string",
  "phone": "string",
  "institutionType": "string",
  "numberOfPatients": "string (optional)",
  "frequency": "string (optional)",
  "pickupAddress": "string (optional)",
  "destinationAddress": "string (optional)",
  "wheelchairRequired": "boolean",
  "additionalInfo": "string (optional)"
}
```

## Business Information
- **Company**: TMO Campo
- **Phone**: 076 772 00 55
- **Email**: contact@tmocampo.com
- **Address**: Chemin des Palettes 27, 1212 Grand-Lancy, Genève
- **Pricing**: Starting from 40 CHF
- **Availability**: 7 days a week

## Development

### Running Locally
```bash
npm run dev
```

### Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, TypeScript
- **Validation**: Zod
- **State Management**: TanStack Query

## Future Improvements
- Add persistent database storage (PostgreSQL)
- Integrate email notifications for form submissions
- Add real video content for wheelchair loading demonstrations
- Implement rate limiting for production
- Add CAPTCHA for spam protection
