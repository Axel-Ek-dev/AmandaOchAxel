export default function InfoCard({ title, description, icon }: { title: string; description: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="bg-ivory border border-beige rounded-2xl shadow-sm p-7 flex items-start space-x-4 w-full hover:shadow-md transition-shadow duration-200">
      <div className="text-2xl shrink-0">{icon}</div>
      <div>
        <h3 className="font-serif text-base text-forest font-semibold">{title}</h3>
        <div className="text-sm text-taupe mt-1 leading-relaxed">{description}</div>
      </div>
    </div>
  )
}
