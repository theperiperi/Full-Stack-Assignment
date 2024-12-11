# Offer Letter Management System

A modern web application built with Next.js for managing and generating offer letters.

## Features

- 🔐 Secure authentication system
- 📝 Offer letter generation and management
- 📊 Dashboard interface for managing offer letters
- 🎨 Modern UI with Tailwind CSS
- ✨ Responsive design
- 🚀 Built with Next.js 14

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Typography:** Geist Font Family
- **Authentication:** Built-in auth system
- **Language:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/theperiperi/Full-Stack-Assignment
cd full-stack-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
frontend/
├── components/           # Reusable UI components
│   ├── LoginButton.tsx
│   ├── OfferLetterForm.tsx
│   └── OfferLetterDashboard.tsx
├── providers/           # Context providers
│   └── AuthProvider.tsx
├── public/             # Static assets
├── src/
│   └── app/           # Next.js app directory
└── ...
```

## Key Components

- **OfferLetterDashboard:** Main interface for managing offer letters
- **OfferLetterForm:** Form component for creating/editing offer letters
- **LoginButton:** Authentication component
- **AuthProvider:** Authentication context provider

## Development

The application uses Next.js's App Router and follows modern React patterns. To modify the application:

- Edit `src/app/page.tsx` for the main page
- Add components in the `components/` directory
- Manage authentication logic in `providers/AuthProvider.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
