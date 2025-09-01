// src/data/sample/poojas.ts
export type Pooja = {
  id: string;
  name: string;
  summary: string;
  suggestedDonation?: string;
  durationMins: number;
  image?: string;
  slotsPerDay?: number;
};

export const samplePoojas: Pooja[] = [
  {
    id: "pj-ganesha-homam",
    name: "Ganapathi Homam",
    summary: "Invoking Lord Ganesha for removing obstacles and seeking blessings.",
    suggestedDonation: "₹1500",
    durationMins: 60,
    image: "/images/poojas/ganapathi.jpg",
    slotsPerDay: 5
  },
  {
    id: "pj-saraswati-puja",
    name: "Saraswati Pooja",
    summary: "For students and seekers—blessings for learning, arts, and clarity.",
    suggestedDonation: "₹1000",
    durationMins: 45,
    image: "/images/poojas/saraswati.jpg",
    slotsPerDay: 8
  },
  {
    id: "pj-navagraha-shanti",
    name: "Navagraha Shanti",
    summary: "Traditional puja for harmonizing planetary influences.",
    suggestedDonation: "₹2500",
    durationMins: 90,
    image: "/images/poojas/navagraha.jpg",
    slotsPerDay: 3
  }
];
