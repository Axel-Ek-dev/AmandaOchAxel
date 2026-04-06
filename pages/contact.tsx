import Layout from '../components/Layout'

const couple = [
  {
    icon: '🤵',
    name: 'Axel',
    phone: '076-146 49 24',
    email: 'axelilianek@gmail.com',
  },
  {
    icon: '👰',
    name: 'Amanda',
    phone: '072-239 16 23',
    email: 'amanda.ekblad@live.se',
  },
]

const toastmasters = [
  {
    icon: '🎤',
    name: 'Hugo Lindell',
    phone: '076-290 79 07',
    email: 'hugolindell@gmail.com',
  },
  {
    icon: '🎤',
    name: 'Elsa Ek',
    phone: '070-621 11 56',
    email: 'ekaren002@gmail.com',
  },
]

function ContactCard({
  icon,
  name,
  phone,
  email,
}: {
  icon: string
  name: string
  phone: string
  email: string
}) {
  return (
    <div className="bg-ivory border border-beige rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl text-forest mb-4">{name}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-taupe text-sm">📞</span>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-olive text-sm hover:underline underline-offset-2"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-taupe text-sm">✉️</span>
          <a
            href={`mailto:${email}`}
            className="text-olive text-sm hover:underline underline-offset-2"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <Layout title="Axel & Amanda — Kontakt">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Kontakt</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Kontakta oss</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* Couple */}
        <div>
          <p className="section-label text-center mb-3">Brudparet</p>
          <h2 className="font-serif text-3xl text-forest text-center mb-8">Axel &amp; Amanda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {couple.map(person => (
              <ContactCard key={person.name} {...person} />
            ))}
          </div>
        </div>

        {/* Toastmasters */}
        <div>
          <p className="section-label text-center mb-3">Toastmasters</p>
          <h2 className="font-serif text-3xl text-forest text-center mb-4">Hugo &amp; Elsa</h2>
          <p className="text-taupe text-sm text-center max-w-md mx-auto mb-8 leading-relaxed">
            Vill du hålla tal eller göra ett spex under middagen? Hör av dig till våra toastmasters
            så samordnar de programmet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {toastmasters.map(person => (
              <ContactCard key={person.name} {...person} />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  )
}
