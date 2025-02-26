import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <article>
      <header>
        <h1 className="text-3xl inline-block mb-4">Profil</h1>
        <hr />
      </header>
      <h2 className="text-2xl mb-5">Introduction</h2>
      <p>
        Je m&apos;appelle{' '}
        <Link
          href="https://www.linkedin.com/in/corentin-boucard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corentin&nbsp;Boucard&nbsp;
          <ExternalLink className="relative top-[-1.5px] w-4 h-4 text-gray-500 inline-block" />
        </Link>
        , et je suis un développeur backend ainsi que nouveau venu sur le DevOps, situé sur
        Bordeaux, en France.
      </p>
    </article>
  )
}
