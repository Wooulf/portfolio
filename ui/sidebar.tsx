import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col min-h-screen justify-center items-center bg-[url(/background.png)] bg-center bg-cover text-center [&_a]:sidebar-links">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="[&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*:not(:first-child)]:relative text-[#F5F5F5] font-bold font-interTight -translate-y-16">
        <div className="mb-4">
          <Image
            src={'/profile.png'}
            alt={'Profile picture'}
            width={170}
            height={170}
            className="rounded-full mb-5 brightness-[0.82]"
          ></Image>
          <Link href="/" className="pb-1 mb-1.5 text-2xl">
            <h1 className="text-[#F5F5F5]">Corentin Boucard</h1>
          </Link>
          <p className="opacity-75 font-normal text-[#c3c3c3]">
            Backend Developer –<wbr /> DevOps Newcomer
          </p>
        </div>
        <ul className="[&>*]:mb-2 mb-1">
          <li>
            <Link href="profile">Profile</Link>
          </li>
          <li>
            <Link href="works">Works</Link>
          </li>
          <li>
            <Link href="certifications">Certifications</Link>
          </li>
        </ul>
        <div>
          <ul className="flex flex-row [&>*]:w-10 [&>*]:h-8 [&_a]:py-3 [&_a]:px-2 m-3 [&>*]:flex [&>*]:items-center [&>*]:justify-center">
            <li>
              <Link
                href="https://www.linkedin.com/in/corentin-boucard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Wooulf/" target="_blank" rel="noopener noreferrer">
                <Github />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:corentin33boucard@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
