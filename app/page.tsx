import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <article>
      <header>
        <h1 className="text-3xl inline-block mb-4">Corentin Boucard</h1>
        <hr />
        <h2></h2>
      </header>
      <p className="mb-4">
        Ingénieur informatique, je suis intéressé par tout ce qui touche à la réalisation d’une
        application, partant de la conception du cahier des charges, à la réalisation, ainsi qu’en
        accompagnant le produit lors de son déploiement et sa supervision.
        <br className="mb-2" />
        Je me forme également à la gestion d’une infrastructure avec toutes les étapes de son cycle
        de vie.
        <br className="mb-2" />
        Je recherche actuellement un poste dans ce secteur.
      </p>
      <hr />
      <p>Ce site propose les sections suivantes :</p>
      <ul className="list-disc pl-4">
        <li>
          <Link href="/profile">Profil&nbsp;</Link>: Aperçu de la carrière, curriculum&nbsp;vitae{' '}
          <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            (pdf&nbsp;
            <ExternalLink className="relative top-[-1.5px] w-4 h-4 text-gray-500 inline-block" />)
          </Link>
          , projets
        </li>
        <li>
          <Link href="/works">Travaux&nbsp;</Link>: Mes activités, projets et{' '}
          <Link href="/">
            demo&nbsp;live&nbsp;
            <ExternalLink className="relative top-[-1.5px] w-4 h-4 text-gray-500 inline-block" />
          </Link>
        </li>
        <li>
          <Link href="/certifications">Diplômes&nbsp;</Link>: Description de mes diplômes
        </li>
      </ul>
    </article>
  )
}
