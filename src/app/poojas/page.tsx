// File: app/poojas/page.tsx (or a client component with some tweaks)

import { fetchFromStrapi } from "@/src/lib/api";

export default async function PoojasPage() {
  const { data } = await fetchFromStrapi("poojas?populate=*");

  return (
    <div>
      <h1>Poojas</h1>
      <ul>
        {data.map((pooja: any) => (
          <li key={pooja.id}>
            {pooja.attributes.Text} - {pooja.attributes.Number}
          </li>
        ))}
      </ul>
    </div>
  );
}
