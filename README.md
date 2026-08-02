# Prajana Personal Website

A modern, high-performance personal website and portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Technology Stack

- **Frontend**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Backend/Services**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Hosting)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🛠️ Getting Started

### Prerequisites
- Node.js (>= 18)
- npm or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment template and add the Firebase web app values:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the production-ready assets.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run test`: Runs the Vitest suite once.
- `npm run check`: Runs lint, tests, and the production build.
- `npm run preview`: Previews the production build locally.

## 📄 License
MIT
