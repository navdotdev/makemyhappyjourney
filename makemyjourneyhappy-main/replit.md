# Make My Journey Happy - Tours & Travel Website

## Overview

This is a comprehensive tours and travel website specializing in spiritual and cultural journeys across India. The application offers three main pilgrimage circuits: RAM Circuit (following Lord Rama's journey), Buddha Circuit (Buddhist pilgrimage sites), and Shiva Circuit (12 Jyotirlingas). The platform provides complete travel services including flight bookings, hotel reservations, train tickets, transportation, and custom tour packages focused on spiritual destinations across Indian states like Uttar Pradesh, Bihar, Himachal Pradesh, and Uttarakhand.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build System**: Vite for fast development builds and optimized production bundles
- **Routing**: Wouter for lightweight client-side navigation
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: React Query for server state caching and React hooks for local state
- **Form Handling**: React Hook Form with Zod schema validation
- **3D Graphics**: Three.js integration for immersive visual elements

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with structured JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Processing**: JSON body parsing and URL-encoded form support

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database interactions
- **Database**: PostgreSQL with Neon Database as the cloud provider
- **Schema Management**: Drizzle migrations for version-controlled schema changes
- **Connection**: Connection pooling with @neondatabase/serverless adapter
- **Storage Layer**: Database abstraction through IStorage interface for testability

### Component Structure
The application follows a modular, section-based architecture:
- **Single Page Application**: All content sections on the home page
- **Section Components**: Hero, Navigation, States Carousel, Tour Packages, Services, Contact, Footer
- **Reusable UI**: Comprehensive component library with consistent styling
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite HMR for rapid development cycles
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Build Process**: Separate client and server build pipelines

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migrations and schema management tools

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide Icons**: Consistent icon library for UI elements

### Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and autoprefixer plugins

### Form and Validation
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### State Management
- **TanStack React Query**: Server state management with caching and synchronization
- **React**: Built-in hooks for local component state management

### 3D Graphics
- **Three.js**: WebGL-based 3D graphics for immersive background elements
- **Custom Canvas**: Fallback 2D canvas implementation for animated backgrounds