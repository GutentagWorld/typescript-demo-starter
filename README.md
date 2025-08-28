# TypeScript Demo Starter

A minimal TypeScript single-page web app designed as a foundation for demos and testing scenarios.

## Features

- Simple greeting app with text input and button
- TypeScript compilation with ES2020 target
- Cross-browser end-to-end testing with Playwright
- Development server with auto-reload

## Quick Start

```bash
npm install
npm run build
npm run dev
```

Visit http://localhost:3000 to see the app.

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server with watch mode
- `npm test` - Run Playwright tests across all browsers
- `npm run test:headed` - Run tests with visible browser
- `npm run test:ui` - Open Playwright test UI
- `npm run clean` - Remove build artifacts

## Project Structure

```
├── src/
│   └── index.ts          # Main app logic
├── tests/
│   └── greeting.spec.ts  # Playwright E2E tests
├── dist/
│   ├── index.html        # HTML entry point
│   └── index.js          # Compiled JavaScript (generated)
├── tsconfig.json         # TypeScript configuration
└── playwright.config.ts  # Playwright test configuration
```

## Use Cases

This starter is designed for:
- Demonstrating flaky test scenarios
- Testing merge queue behaviors  
- General TypeScript/testing demos
- Clean foundation for branching/forking

Branch or fork this repo to create isolated demo environments.