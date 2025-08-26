export async function fetchFromStrapi(endpoint: string) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/${endpoint}`);

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
}
