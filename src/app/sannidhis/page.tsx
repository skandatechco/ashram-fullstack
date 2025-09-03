import Image from "next/image";
import { sannidhis } from "@/src/data/site/sannidhis";

export default function SannidhisPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Sannidhis</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          A curated glimpse of key sannidhis at Skandasramam. Images and descriptions are representative;
          please visit the temple for darshan and official details.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sannidhis.map(s => (
            <article key={s.id} className="border rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={s.image || "/images/placeholder.jpg"} alt={s.name} fill className="object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                {s.highlight && <p className="text-sm text-gray-600 mt-1">{s.highlight}</p>}
                <p className="text-sm text-gray-700 mt-2">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
