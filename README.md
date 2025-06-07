# TypeScript Project

A modern TypeScript project setup with Node.js runtime and development tools.

## Features

- TypeScript configuration with strict type checking
- Source files organized in `src/` directory
- Compiled output in `dist/` directory
- Development and production scripts

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

### Development

Run the project in development mode:

```bash
npm run dev
```

### Building

Build the project for production:

```bash
npm run build
```

### Running

Run the compiled application:

```bash
npm start
```

### Available Scripts

- `npm run dev` - Run TypeScript files directly with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript application
- `npm run clean` - Remove the dist directory
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Fix auto-fixable linting errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

## Project Structure

```text
├── src/
│   └── index.ts          # Main application entry point
├── dist/                 # Compiled JavaScript output
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot customization
├── package.json
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## TypeScript Configuration

The project uses strict TypeScript settings with:

- Target: ES2016
- Module: ESModule
- Source directory: `src/`
- Output directory: `dist/`
- Strict type checking enabled
