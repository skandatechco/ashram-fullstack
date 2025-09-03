// src/data/site/sannidhis.ts
export type Sannidhi = {
  id: string;
  name: string;
  description: string;
  highlight?: string;
  image?: string;
};

export const sannidhis: Sannidhi[] = [
  { id: "sahasralingam", name: "Sahasralingam",
    description: "A monumental Sahasralingam (with 1007 lingams carved within) with Nandi seated opposite.",
    highlight: "Approx. 9.5 ft tall stone lingam with 1007 lingams carved within.",
    image: "/images/sannidhis/sahasralingam.jpg" },
  { id: "panchamukha-heramba-ganapathy", name: "Panchamukha Heramba Ganapathy",
    description: "Five-faced form of Ganesha, traditionally depicted with a lion vahana.",
    image: "/images/sannidhis/ganapathy.jpg" },
  { id: "sarabheswara", name: "Veera Sarabheswara",
    description: "Fierce form of Shiva; the Chennai temple is noted as among the first modern temples dedicated to Sarabheswara.",
    image: "/images/sannidhis/sarabheswara.jpg" },
  { id: "prathyangira-devi", name: "Ugra Prathyangira Devi",
    description: "Powerful goddess associated with protection and warding off negative forces.",
    image: "/images/sannidhis/prathyangira.jpg" },
  { id: "bhuvaneshwari", name: "Bhuvaneshwari Amman",
    description: "Compassionate mother aspect of the Divine—one of the Dasamahavidyas.",
    image: "/images/sannidhis/bhuvaneshwari.jpg" },
  { id: "sri-chakra-maha-meru", name: "Sri Chakra Maha Meru",
    description: "Installed at the centre of the meditation hall; a focus for Lalita Tripurasundari worship.",
    image: "/images/sannidhis/maha-meru.jpg" },
  { id: "lakshmi-narasimhar", name: "Lakshmi Narasimhar",
    description: "Vishnu’s man-lion form with Goddess Lakshmi, symbolising courage and protection.",
    image: "/images/sannidhis/narasimhar.jpg" },
  { id: "dattatreya", name: "Sri Dattatreya",
    description: "Embodiment of the Trimurti—Brahma, Vishnu and Shiva.",
    image: "/images/sannidhis/dattatreya.jpg" },
  { id: "ashtadasa-bhuja-durga", name: "Ashtadasa Bhuja Durga Parameswari",
    description: "Eighteen-armed form of Durga representing multi-faceted Shakti.",
    image: "/images/sannidhis/durga.jpg" }
];
