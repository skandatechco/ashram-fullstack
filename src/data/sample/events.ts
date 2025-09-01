// src/data/sample/events.ts
export type Event = {
  id: string;
  title: string;
  description: string;
  start: string; // ISO
  end: string;   // ISO
  location: string;
  coverImage?: string;
  tags?: string[];
};

export const sampleEvents: Event[] = [
  {
    id: "evt-ganesha-chaturthi-2025",
    title: "Ganesh Chaturthi Maha Pooja",
    description:
      "Auspicious celebration with special abhishekam, homam, and prasadam distribution. Open to all devotees.",
    start: "2025-09-07T08:00:00+05:30",
    end: "2025-09-07T11:30:00+05:30",
    location: "Main Sanctum, Ashram Campus",
    coverImage: "/images/events/ganesha.jpg",
    tags: ["festival", "special", "community"]
  },
  {
    id: "evt-full-moon-satsang-sept",
    title: "Purnima Satsang & Meditation",
    description:
      "Guided meditation session, bhajans, and discourse on Nirvana Shatakam. Suitable for beginners.",
    start: "2025-09-17T18:00:00+05:30",
    end: "2025-09-17T20:00:00+05:30",
    location: "Meditation Hall",
    coverImage: "/images/events/purnima.jpg",
    tags: ["meditation", "satsang"]
  },
  {
    id: "evt-yoga-workshop-oct",
    title: "Weekend Yoga & Breathwork Workshop",
    description:
      "Two-day immersive workshop focusing on pranayama techniques and foundational asanas.",
    start: "2025-10-11T07:00:00+05:30",
    end: "2025-10-12T10:30:00+05:30",
    location: "Yoga Shala",
    coverImage: "/images/events/yoga.jpg",
    tags: ["workshop", "yoga", "health"]
  }
];
