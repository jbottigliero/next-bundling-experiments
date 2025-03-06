import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/pages/index.tsx', 'src/pages/_app.tsx'],
  entryNames: '[dir]/[name]',
  jsx: 'transform',
  bundle: true,
  platform: 'node',
  target: ['node18'],
  packages: 'external',
  outdir: 'out',
  outbase: 'src',
  outExtension: { '.js': '.jsx' }
})