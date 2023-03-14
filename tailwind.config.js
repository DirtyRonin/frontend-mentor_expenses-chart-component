/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'very-pale-orange': 'hsl(33, 100%, 98%)',
        'soft-red': 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        cream: 'hsl(27, 66%, 92%)'
      },
      gridTemplateColumns: {
        'expenses-desktop': '28rem',
        'chart-table-desktop': 'repeat(7,2.8rem)',
        'chart-table-mobile': 'repeat(7,1.8rem)'
      },
      height: {
        'expenses-desktop': '28.5rem'
      },
      width: {
        'expenses-desktop': '30rem',
        bar: '2rem'
      }
    }
  },
  plugins: []
}
