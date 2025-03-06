import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/components/pages/authenticate.tsx', 'src/pages/index.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: ['node18'],
  packages: 'external',
  outdir: 'out',
  outbase: 'src',
})