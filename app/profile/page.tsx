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
      <p className="mb-8">
        Je m&apos;appelle{' '}
        <Link
          href="https://www.linkedin.com/in/corentin-boucard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corentin&nbsp;Boucard&nbsp;
          <ExternalLink className="relative top-[-1.5px] w-4 h-4 text-gray-500 inline-block" />
        </Link>
        , et je suis un développeur backend ainsi que nouveau venu dans le DevOps, situé sur
        Bordeaux, en France.
      </p>
      <h2 className="text-2xl mb-5">Expérience</h2>
      <hr />
      <ul className="">
        <li className="bg-gray-300 p-5 rounded-3xl [&_*:not(a)]:mb-2 mb-12">
          <span className="px-3 py-1 bg-[#0F3553] text-white font-semibold rounded-md">
            2022 - 2024
          </span>
          <br />
          <span className="text-gray-700">
            <Link
              href="https://fr.wikipedia.org/wiki/Cr%C3%A9dit_mutuel_Ark%C3%A9a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crédit Mutuel Arkéa
            </Link>{' '}
            | 1 rue Louis Lichou, 29480 Le Relecq-Kerhuon
          </span>
          <br />
          <h3 className="italic font-semibold text-2xl text-gray-700">
            Fullstack Developper / DevOps
          </h3>
          <p>
            Travaillant en méthode agile dans une équipe s’occupant de sujets transverses, j’ai pu
            réaliser différents projets :
          </p>
          <ul className="list-[circle] pl-5">
            <li>
              Responsable de la migration d’une application en Java GWT vers un backend en Java
              Springboot, alliant gestion de projet et sa réalisation.
            </li>
            <li>
              Développement de différents outils à travers des scripts proposant un ensemble
              facilitant le travail de nos équipes. Par exemple une extraction de données vers une
              image docker afin d’isoler des tests nécessitant un jeu de données.
            </li>
            <li>Migration d’un front end Java GWT en Vue.js.</li>
            <li>
              Migration d’un ensemble de tests des applis de notre service d’un outil vers un autre
              à l’aide d’un script convertissant le langage (Stoplight vers Postman).
            </li>
            <li>
              Création d’images docker, déploiement automatisé via des pipelines Gitlab, création de
              sondes, d’interface graphique de supervision d’applications...
            </li>
          </ul>
        </li>
        <li className="bg-gray-300 p-5 rounded-3xl [&_*:not(a)]:mb-2 mb-12">
          <span className="px-3 py-1 bg-[#0F3553] text-white font-semibold rounded-md">
            2021 - 2022
          </span>
          <br />
          <span className="text-gray-700">
            <Link href="https://ergoss.net/fr/" target="_blank" rel="noopener noreferrer">
              Ergoss Logiciels
            </Link>{' '}
            | 3 Rue des Charrons, 31700 Blagnac
          </span>
          <br />
          <h3 className="italic font-semibold text-2xl text-gray-700">Développeur backend</h3>
          <p></p>
          <ul className="list-[circle] pl-5">
            <li>Développements sur une API monolithique en C#</li>
            <li>Travail en équipe avec l’aide d’outils tels que Git, Azure DevOps et Jira.</li>
          </ul>
        </li>
        <li className="bg-gray-300 p-5 rounded-3xl [&_*:not(a)]:mb-2 mb-12">
          <span className="px-3 py-1 bg-[#0F3553] text-white font-semibold rounded-md">
            2021 - 2022
          </span>
          <br />
          <span className="text-gray-700">
            <Link href="https://ergoss.net/fr/" target="_blank" rel="noopener noreferrer">
              GIE 246
            </Link>{' '}
            | 15 rue Claude Boucher, 33000 Bordeaux
          </span>
          <br />
          <h3 className="italic font-semibold text-2xl text-gray-700">
            Network, development, security
          </h3>
          <p></p>
          <ul className="list-[circle] pl-5">
            <li>Recherches pour la mise en place d’un bastion d’authentification.</li>
            <li>Veille technologique sur des gestionnaires de mots de passe.</li>
            <li>Script de rotation des mots de passe pour les switchs.</li>
            <li>Migration dans le cloud de mots de passe et d’un logiciel de ticketing.</li>
          </ul>
        </li>
      </ul>
    </article>
  )
}
