import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'
import Button from '../components/ui/Button'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Layout title="Axel & Amanda — Välkommen">

      {/* 1 ── Hero ───────────────────────────────────────────────── */}
      <HeroSection />

      {/* 2 ── Quick-info cards ──────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard
            icon={<span>📅</span>}
            title="När"
            description={<span>5e september 2026<br />Ceremoni kl. 14:00</span>}
          />
          <InfoCard
            icon={<span>📍</span>}
            title="Var"
            description={
              <span>
                Vårdnäs Stiftsgård<br />
                <a className="text-olive hover:underline underline-offset-2" href="https://maps.app.goo.gl/pRZX4wSHQJpGgmEe9">
                  Visa på karta →
                </a>
              </span>
            }
          />
          <InfoCard
            icon={<span>👗</span>}
            title="Klädkod"
            description={<span>Mörk kostym</span>}
          />
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-4">
        <hr className="flex-1 divider" />
        <span className="text-taupe text-lg">♥</span>
        <hr className="flex-1 divider" />
      </div>

      {/* 3 ── About / story ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-5">Vår historia</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-snug mb-6">
            Välkommen till vår bröllopsdag
          </h2>
          <p className="text-taupe leading-relaxed text-base">
            Vi är så glada att du är här. Den 5e september 2026 firar vi vår kärlek
            omgiven av de människor som betyder mest för oss. Utforska sidan för
            att hitta alla detaljer du behöver inför den stora dagen.
          </p>
        </div>
      </section>

      {/* 4 ── Inspiration / programme ───────────────────────────── */}
      <section className="py-20 px-6 bg-beige/30 mx-4 md:mx-8 rounded-3xl mb-16">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-3">Dagens program</p>
          <h2 className="font-serif text-3xl text-forest text-center mb-12">
            En dag att minnas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { time: '14:00', label: 'Ceremoni',       detail: 'Vårdnäs kyrka',              icon: '⛪' },
              { time: '15:00', label: 'Mingel',         detail: 'Stiftsgårdens trädgård',     icon: '🌿' },
              { time: '17:00', label: 'Middag & Fest',  detail: 'Stora salen, Stiftsgården',  icon: '🕯️' },
            ].map(item => (
              <div
                key={item.label}
                className="bg-ivory rounded-2xl p-8 text-center border border-beige shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-olive text-sm font-medium tracking-wider mb-1">{item.time}</p>
                <h3 className="font-serif text-xl text-forest mb-2">{item.label}</h3>
                <p className="text-taupe text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="section-label mb-5">OSA</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-5 leading-snug">
            Hoppas du kan komma!
          </h2>
          <p className="text-taupe leading-relaxed mb-10">
            Vi hoppas verkligen att du kan ta dig till oss den 5e september.
            OSA senast den 1 juli 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => router.push('./rsvp')}>Skicka OSA</Button>
            <Button variant="secondary" onClick={() => router.push('./info')}>Se alla detaljer</Button>
          </div>
        </div>
      </section>

    </Layout>
  )
}
