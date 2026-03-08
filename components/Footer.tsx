export default function Footer() {
  return (
    <footer className="bg-beige/40 border-t border-beige mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-2xl text-forest">Axel &amp; Amanda</p>
          <div className="text-center">
            <p className="text-taupe text-sm">5e september 2026</p>
            <p className="text-taupe text-sm">Vårdnäs Stiftsgård, Linköping</p>
          </div>
          <p className="text-xs text-taupe">© {new Date().getFullYear()} A &amp; A — med kärlek ♥</p>
        </div>
      </div>
    </footer>
  )
}
