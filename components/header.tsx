import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-opacity-80 backdrop-blur-3xl">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/finzy-logo.svg"
          alt="Finzy Logo"
          width={120}
          height={40}
          className="mr-2"
        />
        <span className="sr-only">Finzy</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/about">
          About
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="sm" className="hover:bg-white hover:text-indigo-600 transition-colors">
            Contact
          </Button>
        </Link>
      </nav>
    </header>
  )
}

