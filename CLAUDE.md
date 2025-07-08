# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website (brandons.work) built with React, TypeScript, and Vite. The project uses Tailwind CSS v4 with DaisyUI for styling.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run tests
npm run test

# Run tests with coverage
npm run coverage

# Run tests with UI
npm run test-with-ui
```

## Architecture

The codebase follows a standard React + TypeScript structure:

- **Entry Point**: `src/main.tsx` bootstraps the React app
- **Main Component**: `src/App.tsx` contains the portfolio layout with navigation and project slides
- **Project Data**: `src/Projects.ts` defines the Project type and project content
- **Components**: Located in `src/components/`, currently contains `ProjectSlide.tsx` for displaying individual projects
- **Styling**: Global styles in `src/index.css`, using Tailwind CSS v4 with DaisyUI components

## Key Configuration

- **Path Aliases**: Use `@components/*` and `@assets/*` for imports (configured in vite.config.ts and tsconfig)
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Testing**: Vitest with React Testing Library setup in `vitest.setup.ts`
- **Code Quality**: ESLint configured for TypeScript and React best practices

## Development Guidelines

1. **Before committing**: Always run `npm run lint` and `npm run build` to ensure code quality and type safety
2. **Testing**: Write tests in `src/tests/` directory. Run single tests with: `npm run test -- path/to/test.tsx`
3. **Component Structure**: Follow existing patterns in `ProjectSlide.tsx` - functional components with TypeScript interfaces
4. **Styling**: Use Tailwind utility classes and DaisyUI components. The project uses Tailwind CSS v4