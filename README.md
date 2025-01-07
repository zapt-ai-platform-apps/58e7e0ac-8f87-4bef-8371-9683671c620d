# ReactJS App with Vite and Tailwind CSS

## Overview

This application is a ReactJS-based project bootstrapped with Vite and styled using Tailwind CSS. It incorporates a comprehensive design system to ensure a consistent and user-friendly experience across all devices.

## User Journeys

1. [Design System Integration](docs/journeys/design-system-integration.md) - Establish a unified design language with consistent color palettes, typography, and spacing.
2. [User Authentication](docs/journeys/user-authentication.md) - Set up secure user authentication using Supabase.
3. [PWA Support](docs/journeys/pwa-support.md) - Enhance the app with Progressive Web App capabilities.
4. [Error Logging](docs/journeys/error-logging.md) - Implement Sentry for effective error monitoring.
5. [API Integration](docs/journeys/api-integration.md) - Connect frontend components with backend APIs securely.
6. [Responsive Design](docs/journeys/responsive-design.md) - Ensure the app looks great on all screen sizes, with a mobile-first approach.
7. [Interactive Project Dashboard](docs/journeys/interactive-project-dashboard.md) - Add real-time project insights and financial metrics to enhance project management.

## External Services

- **Supabase:** Handles user authentication and manages sessions.
- **Sentry:** Provides error logging and monitoring for both frontend and backend.
- **Progressier:** Adds Progressive Web App functionalities.
- **Umami:** Tracks website analytics.
- **Resend:** Manages email sending within the app.

### Resend

- **Description:** Used for sending transactional emails such as user onboarding and notifications.
- **Version:** 4.0.1

### Progressier

- **Description:** Enables PWA features like offline support and installability.
- **Version:** Included via external script.

## Environment Variables

Ensure the following environment variables are set in the `.env` file:

- `COCKROACH_DB_URL`
- `NPM_TOKEN`
- `VITE_PUBLIC_APP_ID`
- `VITE_PUBLIC_APP_ENV`
- `VITE_PUBLIC_SENTRY_DSN`
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`

Refer to the `.env` file for more details.