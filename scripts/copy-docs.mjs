import { cpSync, rmSync, existsSync, writeFileSync } from 'node:fs'

rmSync('docs', { recursive: true, force: true })
cpSync('dist', 'docs', { recursive: true })

// Ensure GitHub Pages does not run Jekyll on the built site
if (!existsSync('docs/.nojekyll')) {
  writeFileSync('docs/.nojekyll', '')
}

console.log('Synced dist/ → docs/ for GitHub Pages (main /docs).')
