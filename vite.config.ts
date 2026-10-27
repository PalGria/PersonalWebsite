import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import type {} from 'vite-react-ssg/node';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  ssr: {
    // These packages default-import CJS modules, which fails under plain Node during prerendering; let Vite bundle them
    noExternal: ['contentful', 'contentful-resolve-response', 'contentful-sdk-core'],
  },
  ssgOptions: {
    // Emit /blog/slug.html and /404.html (see the server config in README)
    dirStyle: 'flat',
  },
})
