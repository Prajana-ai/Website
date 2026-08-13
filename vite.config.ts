/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const staticPageRoutes: Record<string, string> = {
  '/watchhub': '/watchhub/index.html',
  '/watchhub/': '/watchhub/index.html',
  '/watchhub/privacy': '/watchhub/privacy/index.html',
  '/watchhub/privacy/': '/watchhub/privacy/index.html',
  '/watchhub/support': '/watchhub/support/index.html',
  '/watchhub/support/': '/watchhub/support/index.html',
};

const serveStaticPages = () => ({
  name: 'serve-static-pages',
  configureServer(server: { middlewares: { use: (handler: (request: { url?: string }, response: unknown, next: () => void) => void) => void } }) {
    server.middlewares.use((request, _response, next) => {
      const pathname = request.url?.split('?')[0];
      if (pathname && staticPageRoutes[pathname]) {
        request.url = request.url?.replace(pathname, staticPageRoutes[pathname]);
      }
      next();
    });
  },
  configurePreviewServer(server: { middlewares: { use: (handler: (request: { url?: string }, response: unknown, next: () => void) => void) => void } }) {
    server.middlewares.use((request, _response, next) => {
      const pathname = request.url?.split('?')[0];
      if (pathname && staticPageRoutes[pathname]) {
        request.url = request.url?.replace(pathname, staticPageRoutes[pathname]);
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [serveStaticPages(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
