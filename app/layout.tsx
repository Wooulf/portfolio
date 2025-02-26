import type { Metadata } from 'next'
import './globals.css'
import { Inter, Inter_Tight } from 'next/font/google'
import ResizableSidebar from '@/ui/resizable-sidebar'
import Sidebar from '@/ui/sidebar'

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
      <body className={`${inter.className} ${inter_tight.className} antialiased flex`}>
        <div className="max-w-52 w-4/12">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  )
}
