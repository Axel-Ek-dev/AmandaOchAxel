import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { Gift, data } from '../lib/data'

export default function Registry() {
  const [gifts, setGifts]     = useState<Gift[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const g    = await data.listGifts()
        const demo = localStorage.getItem('demo_gifts')
        if (demo) {
          try { setGifts(JSON.parse(demo)) } catch { setGifts(g) }
        } else {
          setGifts(g)
        }
      } catch (err) {
        console.error('Failed to load gifts:', err)
        setGifts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function reserve(gift: Gift) {
    try {
      const name = window.prompt('Ditt namn för att reservera gåvan (valfritt):')
      if (name === null) return
      const updated = await data.reserveGift(gift.id, name || undefined)
      setGifts(prev => prev.map(x => x.id === updated.id ? updated : x))
    } catch {
      alert('Misslyckades att reservera')
    }
  }

  async function unreserve(gift: Gift) {
    try {
      const updated = await data.unreserveGift(gift.id)
      setGifts(prev => prev.map(x => x.id === updated.id ? updated : x))
    } catch {
      alert('Misslyckades')
    }
  }

  return (
    <Layout title="Gåvor">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Present</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Gåvor</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-taupe text-center max-w-lg mx-auto mb-12 leading-relaxed">
          Den största gåvan är att du vill fira denna dag med oss! 
          Men är det något som du verkligen vill ge oss, go ahead! 
          Om du vill bidra med en slant till vår bröllopsresa är det också mycket välkommet. Detta kan göras via swish till våra Toastmasters.

        </p>
      </div>
    </Layout>
  )
}
