import Link from 'next/link'
import { useState } from 'react'

const navLinkClass =
  'relative text-olive hover:text-forest transition-colors duration-200 ' +
  'after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 ' +
  'after:bg-forest after:transition-[width] after:duration-200 hover:after:w-full'

const mobileNavLinkClass =
  'block py-1.5 text-olive hover:text-forest transition-colors duration-200 ' +
  'border-b border-transparent hover:border-forest/20'

const adminBtnStyle: React.CSSProperties = {
  backgroundColor: 'var(--forest)',
  color: '#ffffff',
  borderRadius: '999px',
  padding: '0.375rem 1rem',
  fontSize: '0.75rem',
  fontWeight: 500,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.25s ease',
  textDecoration: 'none',
  display: 'inline-block',
  lineHeight: '1.5',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [adminHover, setAdminHover] = useState(false)
  function close() { setOpen(false) }

  return (
    <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-md border-b border-beige/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="font-serif text-2xl text-forest tracking-wide cursor-pointer select-none">
          A &amp; A
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className={navLinkClass}>Hem</Link>
          <Link href="/info" className={navLinkClass}>Detaljer</Link>
          <Link href="/rsvp" className={navLinkClass}>OSA</Link>
          <Link href="/registry" className={navLinkClass}>Gåvor</Link>
          <Link
            href="/admin/login"
            style={{ ...adminBtnStyle, backgroundColor: adminHover ? 'var(--olive)' : 'var(--forest)' }}
            onMouseEnter={() => setAdminHover(true)}
            onMouseLeave={() => setAdminHover(false)}
          >
            Admin
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
          <div className="max-w-6xl mx-auto px-6 py-5 space-y-1 text-sm font-medium">
            <Link href="/" onClick={close} className={mobileNavLinkClass}>Hem</Link>
            <Link href="/info" onClick={close} className={mobileNavLinkClass}>Detaljer</Link>
            <Link href="/rsvp" onClick={close} className={mobileNavLinkClass}>OSA</Link>
            <Link href="/registry" onClick={close} className={mobileNavLinkClass}>Gåvor</Link>
            <div className="pt-3">
              <Link
                href="/admin/login"
                onClick={close}
                style={adminBtnStyle}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
