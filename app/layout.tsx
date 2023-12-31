import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Honey Badgers',
  description: 'Island 101 Hockey League; Tier 4',
}

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-white">
      <body className="flex flex-col min-h-screen bg-gray-900">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
