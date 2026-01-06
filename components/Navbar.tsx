import Link from 'next/link'
import Button from './ui/Button'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <header className="sticky top-0 z-30 bg-cream/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="./" className="text-2xl font-serif text-forest cursor-pointer">A & A</Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 font-medium text-sm text-near-black">
          <Link href="/">Hem</Link>
          <Link href="/info">Detaljer</Link>
          <Link href="/rsvp">OSA</Link>
          <Link href="/registry">Önskelista</Link>
          <Link href="/admin/login"><Button variant="secondary" className="py-1 px-3 text-sm">Admin</Button></Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="text-near-black" onClick={()=>setOpen(v=>!v)}>Menu</button>
        </div>
      </div>

      {/* Mobile menu (simple, client-side links) */}
      {open && (
        <div className="md:hidden bg-cream border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link href="./" onClick={close} className="block">Hem</Link>
            <Link href="./info" onClick={close} className="block">Detaljer</Link>
            <Link href="./rsvp" onClick={close} className="block">OSA</Link>
            <Link href="./registry" onClick={close} className="block">Önskelista</Link>
            <Link href="./admin/login" onClick={close} className="block"><Button variant="secondary" className="py-1 px-3 text-sm">Admin</Button></Link>
          </div>
        </div>
      )}
    </header>
  )
}
