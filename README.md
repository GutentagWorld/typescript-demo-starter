# TypeScript Demo Starter

A minimal TypeScript single-page web app designed as a foundation for demos and testing scenarios.

## Features

- Simple greeting app with text input and button
- TypeScript compilation with ES2020 target
- Cross-browser end-to-end testing with Playwright
- Development server with auto-reload
- Utility functions for math and string operations
- Comprehensive test coverage with CI/CD pipeline
- GitHub merge queue configured for safe merging

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
│   ├── index.ts          # Main app logic
│   ├── utils.ts          # Math utility functions
│   └── stringUtils.ts    # String utility functions
├── tests/
│   ├── greeting.spec.ts  # Playwright E2E tests
│   ├── utils.spec.ts     # Math utilities tests
│   └── stringUtils.spec.ts # String utilities tests
├── dist/
│   ├── index.html        # HTML entry point
│   └── index.js          # Compiled JavaScript (generated)
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI pipeline
├── tsconfig.json         # TypeScript configuration
└── playwright.config.ts  # Playwright test configuration
```

## Use Cases

This starter is designed for:
- Demonstrating flaky test scenarios
- Testing merge queue behaviors  
- General TypeScript/testing demos
- Clean foundation for branching/forking
- CI/CD pipeline demonstrations
- Branch protection and merge queue testing

Branch or fork this repo to create isolated demo environments.

## Development Workflow

This repository uses GitHub's merge queue feature for safe, automated merging:

1. Create feature branches for new changes
2. Submit pull requests with comprehensive tests
3. CI pipeline automatically runs tests on PR
4. Once approved, PRs enter the merge queue
5. Merge queue batches changes and tests them together
6. Safe merges happen automatically when all tests pass