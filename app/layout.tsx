import type { Metadata } from 'next'
import './globals.css'
import { Inter, Inter_Tight } from 'next/font/google'
import ResizableSidebar from '@/ui/resizable-sidebar'
import Sidebar from '@/ui/sidebar'
import Breadcrumb from '../ui/breadcrumb'
import Footer from '@/ui/footer'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const inter_tight = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corentin Boucard Portfolio',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter_tight.className} antialiased`}>
        <div className="absolute max-w-44 w-4/12 min-h-full">
          <Sidebar />
        </div>
        <main className="max-w-3xl ml-96 mr-11 pl-4 pt-36 pr-4 pb-44">
          <Breadcrumb />
          {children}
        </main>
        <footer className="ml-72 justify-center text-center">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
