import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

// next.config.js

export const metadata = {
  title: 'Score $10,000 Now! - Landing Page',
  description: 'Enter your information for a chance to win $10,000. Choose your device and take action now!',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
