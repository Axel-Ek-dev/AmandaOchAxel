import Button from './ui/Button'
import { useRouter } from 'next/router'

export default function HeroSection(){
  const router = useRouter()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const bgUrl = `${basePath}/images/midsom.jpg`
  return (
    <section
      className="min-h-[45vh] md:min-h-screen flex items-center hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(232,230,223,0.82), rgba(232,230,223,0.82)), url('${bgUrl}')`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center w-full">
        <div className="max-w-2xl mx-auto py-20">
          <p className="section-label mb-5">5e september 2026</p>
          <h1 className="text-6xl md:text-8xl leading-tight font-serif text-forest">Axel &amp; Amanda</h1>
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-taupe/60" />
            <span className="text-taupe text-lg">♥</span>
            <div className="h-px w-10 bg-taupe/60" />
          </div>
          <p className="tracking-widest text-sm text-taupe uppercase">gifter sig</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="primary" onClick={() => router.push('./rsvp')}>Skicka OSA</Button>
            <Button variant="secondary" onClick={() => router.push('./info')}>Se detaljer</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
