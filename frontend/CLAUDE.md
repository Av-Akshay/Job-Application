# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript frontend for a job application platform, built with Vite and styled with Tailwind CSS 4.x. The project is part of a larger monorepo structure that includes a backend.

## Development Commands

```bash
npm run dev      # Start Vite dev server (typically runs on http://localhost:5173 or next available port)
npm run build    # TypeScript compile + Vite production build
npm run lint     # ESLint with TypeScript support and React plugins
npm run preview  # Preview production build locally
```

**Important Notes:**
- No test script is currently configured
- Build process includes TypeScript compilation (`tsc -b`) followed by Vite build
- Development server supports hot module replacement (HMR)

## Architecture & Technology Stack

**Core Technologies:**
- React 19.1.1 with modern JSX transform (no React imports needed)
- TypeScript with strict configuration
- Vite 7.1.2 for build tooling and dev server
- Tailwind CSS 4.1.12 with new Vite plugin integration
- React Router DOM 6.28.1 for client-side routing

**Build System:**
- Uses ES modules (`"type": "module"`)
- TypeScript project references structure with separate app and node configs
- Targets ES2022 with modern bundler resolution
- ESLint 9 with flat config format

## Code Organization

```
src/
├── App.tsx                 # Main app component with BrowserRouter setup
├── main.tsx               # React 18+ root rendering with StrictMode
├── components/            # Reusable UI components
│   └── index.js           # Barrel exports (note: .js in TypeScript project)
├── pages/                 # Route-level page components
└── assets/                # Static assets
```

**Component Patterns:**
- Functional components with TypeScript
- Separate directories for reusable components vs. page components
- Barrel exports via `index.js` files for clean imports

## Styling Approach

- Pure Tailwind CSS 4.x with Vite plugin integration
- No custom CSS beyond Tailwind imports in `index.css`
- Uses responsive design patterns (`w-4/5 mx-auto`, flexbox utilities)
- Font preference set to `font-serif` for typography

## Routing Structure

- Single-page application using React Router's BrowserRouter
- Routes configured at App level with Routes/Route components
- Currently uses standard `<a>` tags in navigation (not React Router Links)

## Development Considerations

**Current State:**
- Early development stage with basic structure established
- Single Home page route implemented
- Basic navigation with Navbar and Footer components

**Missing/Future Additions:**
- Testing framework and test scripts
- Environment variables handling
- API integration layer (backend exists at parent directory level)
- State management solution
- Form handling for job applications
- Migration from `<a>` tags to React Router Link components

## Version Compatibility Notes

- Requires Node.js 20.19+ or 22.12+ (Vite requirement)
- Uses React Router v6 (compatible with React 19)
- Mixed file extensions: Components are `.tsx`, but some index files are `.js`

## Troubleshooting

- If React Router shows "Invalid hook call" errors, ensure React Router DOM version is 6.x (not 7.x) for React 19 compatibility
- Development server may use alternative ports if 5173 is occupied