import Image from "next/image";
import Link from "next/link";

export default function AshramPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Om Sri Skandasramam</h1>
              <p className="mt-4 text-gray-700">
                A unique temple complex in Selaiyur, Chennai—home to rare and powerful Sannidhis
                including Ugra Prathyangira Devi, Veera Sarabheswara, and the monumental Sahasralingam.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/sannidhis" className="rounded-xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
                  Explore Sannidhis
                </Link>
                <Link href="/poojas" className="rounded-xl px-5 py-3 border border-gray-300 hover:bg-gray-50 transition">
                  View Poojas
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/hero/ashram-hero.jpg" alt="Skandasramam campus" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Location & Hours</h2>
            <p className="mt-3 text-gray-700">
              Mahalakshmi Nagar, Selaiyur, Chennai.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Typical hours: 7:00 AM–12:00 PM & 4:00–8:00 PM (check latest notice).
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Meditation Hall</h2>
            <p className="mt-3 text-gray-700">
              A serene forecourt with Sri Chakra Maha Meru at the centre—ideal for japa and dhyana.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Annadanam & Veda Pāṭhaśālā</h2>
            <p className="mt-3 text-gray-700">
              Support Annadanam and traditional Vedic education activities run by the ashram.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
