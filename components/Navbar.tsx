import Link from 'next/link'
import Button from './ui/Button'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  function close() { setOpen(false) }

  return (
    <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-md border-b border-beige/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="./" className="font-serif text-2xl text-forest tracking-wide cursor-pointer select-none">
          A &amp; A
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="text-taupe hover:text-forest transition-colors">Hem</Link>
          <Link href="/info" className="text-taupe hover:text-forest transition-colors">Detaljer</Link>
          <Link href="/rsvp" className="text-taupe hover:text-forest transition-colors">OSA</Link>
          <Link href="/registry" className="text-taupe hover:text-forest transition-colors">Önskelista</Link>
          <Link href="/admin/login">
            <Button variant="secondary" className="py-1.5 px-4 text-xs">Admin</Button>
          </Link>
        </nav>

        <button
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          className="md:hidden text-forest p-1"
          onClick={() => setOpen(v => !v)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-beige/50">
          <div className="max-w-6xl mx-auto px-6 py-5 space-y-3 text-sm font-medium">
            <Link href="./" onClick={close} className="block py-1 text-taupe hover:text-forest transition-colors">Hem</Link>
            <Link href="./info" onClick={close} className="block py-1 text-taupe hover:text-forest transition-colors">Detaljer</Link>
            <Link href="./rsvp" onClick={close} className="block py-1 text-taupe hover:text-forest transition-colors">OSA</Link>
            <Link href="./registry" onClick={close} className="block py-1 text-taupe hover:text-forest transition-colors">Önskelista</Link>
            <Link href="./admin/login" onClick={close} className="block pt-2">
              <Button variant="secondary" className="py-1.5 px-4 text-xs">Admin</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
