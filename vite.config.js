import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: "/our-teamT",
  plugins: [react()],
	define: {
    'process.env': {
			PUBLIC_URL: "https://github.com/Natali-Vorobeva/our-teamT.git" 
		}
  }
})
