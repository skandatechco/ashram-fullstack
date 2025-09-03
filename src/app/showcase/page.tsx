// src/app/showcase/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { sampleEvents } from "@/src/data/sample/events";
import { samplePoojas } from "@/src/data/sample/poojas";
import BookingWidget from "@/src/components/BookingWidget";
import EventCalendar from "@/src/components/EventCalendar";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ashram Events & Poojas
              </h1>
              <p className="mt-4 text-gray-600">
                A ready-to-showcase page powered by sample data. Highlight
                upcoming events, featured poojas, and enable quick bookings.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/events"
                  className="rounded-xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Browse All Events
                </Link>
                <Link
                  href="/poojas"
                  className="rounded-xl px-5 py-3 border border-gray-300 hover:bg-gray-50 transition"
                >
                  Explore Poojas
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero/ashram-hero.jpg"
                alt="Ashram campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
            <Link href="/events" className="text-blue-600 hover:underline">See all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleEvents.map((e) => (
              <div key={e.id} className="border rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="relative h-40">
                  <Image
                    src={e.coverImage || "/images/placeholder.jpg"}
                    alt={e.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{new Date(e.start).toLocaleString()}</p>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{e.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tags?.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Poojas + Booking */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Poojas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {samplePoojas.map((p) => (
                <div key={p.id} className="border rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="relative h-40">
                    <Image
                      src={p.image || "/images/placeholder.jpg"}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-3">{p.summary}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration: {p.durationMins} mins</span>
                      {p.suggestedDonation && (
                        <span className="text-sm font-medium">{p.suggestedDonation}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Booking</h2>
              <div className="border rounded-2xl p-4 bg-gray-50">
                {/* Pass the required eventType prop */}
                <BookingWidget eventType="pooja" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Calendar</h2>
          {/* EventCalendar expects an `events` prop */}
          <EventCalendar events={sampleEvents} />
        </div>
      </section>
    </main>
  );
}
