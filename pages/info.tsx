import Layout from '../components/Layout'

const timeline = [
  { time: '14:00', label: 'Ceremoni',      detail: 'Vårdnäs kyrka',                  icon: '⛪' },
  { time: '15:30', label: 'Mingel',        detail: 'Stiftsgården',          icon: '🥂' },
  { time: '17:00', label: 'Middag',        detail: 'Matsalen, Stiftsgården',       icon: '🍽️' },
  { time: '23:00', label: 'Fest',          detail: 'Vi dansar och umgås hela natten',           icon: '💃' },
  { time: 'TBA'  , label: 'Frukost',       detail: 'Stiftsgården',           icon: '🍳' },
]

export default function Info() {
  return (
    <Layout title="Axel & Amanda — Detaljer">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Information</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Bröllopsinfo</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Quick-fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: '📅',
              title: 'Datum & tid',
              body:  '5e september 2026 — Ceremoni kl. 14:00',
            },
            {
              icon: '📍',
              title: 'Plats',
              body:  'Vårdnäs Stiftsgård Hotell och Konferens, ca 30 min söder om Linköping.',
              link:  'https://maps.app.goo.gl/pRZX4wSHQJpGgmEe9',
              linkText: 'Visa på karta →',
            },
            {
              icon: '👔',
              title: 'Klädkod',
              body:  'Mörk kostym',
              link:  'https://alissa.se/kl%c3%a4dkod-m%c3%b6rk-kostym/',
              linkText: 'Läs mer om klädkoden mörk kostym →',
            },
            {
              icon: '🚗',
              title: 'Transport & parkering',
              body:  'Stiftsgården är på gångavstånd från kyrkan. Parkering finns vid Stiftsgården och kyrkan.',
            },
            {
              icon: '🏨',
              title: 'Boende',
              body:  'Boende finns på Stiftsgården. Det bokas via telefon eller mail till Vårdsnäs, boka ej via hemsidan, ange Amanda och Axels bröllop i kommentarsfältet. Boka senast 1 Juli.',
              link:  'https://vardnas.se/om-oss/kontakt.html',
              linkText: 'Boka rum här →',
            },
            {
              icon: '🎤',
              title: 'Tal',
              body:  'Vi älskar tal och spex. Vill du förgylla middagen, lägg in i anmälan eller kontakta toastmasters.',
            },
          ].map(card => (
            <div
              key={card.title}
              className="bg-ivory border border-beige rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-serif text-xl text-forest mb-2">{card.title}</h3>
              <p className="text-taupe text-sm leading-relaxed">{card.body}</p>
              {card.link && (
                <a href={card.link} className="text-olive text-sm hover:underline underline-offset-2 mt-2 inline-block">
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <p className="section-label text-center mb-3">Tidslinje</p>
          <h2 className="font-serif text-3xl text-forest text-center mb-10">Schema för dagen</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-beige/30 rounded-2xl px-8 py-6 border border-beige/50"
              >
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div className="w-16 shrink-0">
                  <span className="font-medium text-olive text-sm tracking-wide">{item.time}</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-forest">{item.label}</h3>
                  <p className="text-taupe text-sm mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  )
}
