// app/events/page.tsx (or wherever this file lives)

import { fetchFromStrapi } from "@/src/lib/api";
import EventCalendar from "@/src/components/EventCalendar";// Typo fixed: "EventCalenfar" → "EventCalendar"

export default async function EventsPage() {
  const { data } = await fetchFromStrapi('events?populate=*');

  return (
    <div>
      <h1>Events Calendar</h1>
      <EventCalendar events={data} />
    </div>
  );
}
