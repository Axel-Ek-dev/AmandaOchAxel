import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Restore the route saved by the 404.html SPA redirect (GitHub Pages fallback).
  useEffect(() => {
    try {
      const redirect = sessionStorage.getItem('spa_redirect')
      if (redirect) {
        sessionStorage.removeItem('spa_redirect')
        // replace so the root URL is not left in the history stack
        router.replace(redirect)
      }
    } catch {
      // sessionStorage unavailable in some privacy modes — silently ignore
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Component {...pageProps} />
}
