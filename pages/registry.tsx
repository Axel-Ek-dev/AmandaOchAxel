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
    <Layout title="Önskelista">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Present</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Önskelista</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-taupe text-center max-w-lg mx-auto mb-12 leading-relaxed">
          Er närvaro är den finaste presenten av alla. Om ni ändå vill ge något
          har vi sammanställt en liten lista med saker vi önskar oss.
        </p>

        {loading ? (
          <div className="text-center py-12 text-taupe">Laddar önskelista…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gifts.map(g => (
              <div
                key={g.id}
                className={`rounded-2xl p-7 border shadow-sm transition-shadow duration-200 hover:shadow-md ${
                  g.reserved
                    ? 'bg-beige/40 border-beige'
                    : 'bg-ivory border-beige'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-forest mb-1">{g.name}</h3>
                    <p className="text-taupe text-sm leading-relaxed">{g.description}</p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full ${
                      g.reserved
                        ? 'bg-taupe/20 text-taupe'
                        : 'bg-olive/10 text-olive'
                    }`}
                  >
                    {g.reserved ? 'Reserverad' : 'Tillgänglig'}
                  </span>
                </div>

                <div className="mt-5">
                  {!g.reserved ? (
                    <button
                      onClick={() => reserve(g)}
                      className="rounded-full bg-forest text-white px-5 py-2 text-sm font-medium hover:bg-forest-600 transition-colors shadow-sm"
                    >
                      Reservera
                    </button>
                  ) : (
                    <button
                      onClick={() => unreserve(g)}
                      className="rounded-full border-2 border-beige text-taupe px-5 py-2 text-sm font-medium hover:border-taupe transition-colors"
                    >
                      Avboka reservation
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
