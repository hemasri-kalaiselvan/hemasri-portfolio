import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// Set `base` to '/<your-repo-name>/'. If deploying to a user/organization
// page (USERNAME.github.io), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/hemasri-portfolio/',
})
