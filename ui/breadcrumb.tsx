'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment)

  // Ne pas afficher sur la page d'accueil
  if (pathname === '/') return null

  return (
    <nav className="text-gray-600 text-sm">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="no-tailwindcss text-gray-600 hover:cursor-pointer">
            Accueil
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          const isLast = index === pathSegments.length - 1

          return (
            <li key={href} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-gray-400">{decodeURIComponent(segment)}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
