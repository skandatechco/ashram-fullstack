// src/data/site/poojas.ts
export type PoojaItem = {
  id: string;
  name: string;
  summary: string;
  scheduleHint?: string;
  suggestedDonation?: string;
};

export const poojas: PoojaItem[] = [
  { id: "guru-paduka-pooja", name: "Guru Pādukā Pooja",
    summary: "Daily worship of the Guru’s pādukās with Vedic chants and offerings.",
    scheduleHint: "Often performed in the morning; see temple notice." },
  { id: "abhishekam", name: "Abhishekam",
    summary: "Ritual bathing with water, milk and sacred substances; alankaram and deeparadanai follow.",
    scheduleHint: "Morning abhishekam on select sannidhis." },
  { id: "prathyangira-homam", name: "Prathyangira Homam",
    summary: "Fire ritual invoking Ugra Prathyangira Devi for protection and removal of obstacles." },
  { id: "sarabheswara-archana", name: "Sarabheswara Archana",
    summary: "Special archana to Lord Veera Sarabheswara." },
  { id: "skanda-sashti", name: "Skanda Sashti Pooja",
    summary: "Monthly Sashti observance in devotion to Lord Skanda (Murugan).",
    scheduleHint: "Occurs each Shukla Paksha Sashti." }
];
