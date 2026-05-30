import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'bcb-bg': '#050805',
        'bcb-bg-2': '#080B08',
        'bcb-card': '#111611',
        'bcb-card-2': '#161A16',
        'bcb-green': '#7ED321'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(126, 211, 33, 0.25), 0 0 40px rgba(126, 211, 33, 0.10)'
      }
    }
  }
}

