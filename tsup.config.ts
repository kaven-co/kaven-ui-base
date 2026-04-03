import { defineConfig } from 'tsup';

export default defineConfig({
  // Single config with all React entry points to avoid clean: true race condition.
  // Previously, using an array with clean: true on the index entry could wipe
  // lite.d.ts that was generated concurrently, causing the ./lite subpath to
  // break TypeScript resolution.
  entry: {
    index: 'src/index.ts',
    lite:  'src/lite.ts',
  },
  format:   ['esm', 'cjs'],
  dts:      { compilerOptions: { incremental: false } },
  clean:    true,
  external: ['react', 'react-dom', 'tailwindcss'],
  outDir:   'dist',
  sourcemap: true,
  banner:   { js: '"use client";' },
});
