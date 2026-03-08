import Layout from '../components/Layout'

export default function Accommodation() {
  return (
    <Layout title="Boende — Axel & Amanda">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Övernattning</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Boende</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <p className="text-taupe leading-relaxed text-center max-w-lg mx-auto">
          Vi har reserverat ett antal rum på Hotel Staden till ett rabatterat pris.
          Ange <strong className="text-forest font-medium">"Axel &amp; Amanda"</strong> vid bokning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          <div className="bg-ivory border border-beige rounded-2xl p-8 shadow-sm">
            <div className="text-3xl mb-4">🏨</div>
            <h3 className="font-serif text-xl text-forest mb-2">Hotel Staden</h3>
            <p className="text-taupe text-sm leading-relaxed">
              Centralt beläget, bekvämt avstånd till Stiftsgården.
            </p>
          </div>

          <div className="bg-ivory border border-beige rounded-2xl p-8 shadow-sm">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-serif text-xl text-forest mb-2">Bokning</h3>
            <p className="text-taupe text-sm leading-relaxed">
              E-post:{' '}
              <a href="mailto:bookings@example.com" className="text-olive hover:underline">
                bookings@example.com
              </a>
            </p>
            <p className="text-taupe text-sm mt-1">Telefon: +46 70 123 4567</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
