import Image from "next/image";

export default function GuruPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Guru</h1>
            <p className="mt-4 text-gray-700">
              Sri Santhananda Saraswathi Avadhūta Swamigal, the visionary behind Skandasramam,
              whose life was dedicated to devotion, service, and the propagation of Sanatana Dharma.
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p>
                Swamigal consecrated key temples and inspired the establishment of Veda Pāṭhaśālās,
                Annadanam, and regular worship including Guru Pādukā Pooja.
              </p>
              <p className="text-sm text-gray-600">
                For a detailed life sketch and teachings, please refer to the official sources and publications.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/guru/santhananda.jpg" alt="Sri Santhananda Swamigal" fill className="object-cover"/>
          </div>
        </div>
      </section>

      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Teachings</h2>
            <p className="mt-3 text-gray-700">
              Emphasis on steadfast devotion, discipline, and protection rites such as Prathyangira worship.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Seva</h2>
            <p className="mt-3 text-gray-700">
              Annadanam, temple upkeep, and community welfare activities as a living expression of bhakti.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Legacy</h2>
            <p className="mt-3 text-gray-700">
              Skandasramam stands today as a vibrant centre of worship featuring rare sannidhis and homams.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
