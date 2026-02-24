import { defineConfig } from 'tsup';

export default defineConfig({
  entry:      { 'tailwind-preset': 'src/tailwind-preset.ts' },
  format:     ['esm', 'cjs'],
  dts:        { compilerOptions: { incremental: false } },
  external:   ['tailwindcss'],
  outDir:     'dist',
  treeshake:  true,
});
