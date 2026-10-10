// TheCatAPI needs a free API key to return breed details (the attributes
// we use for the ban list). Get one in seconds at https://thecatapi.com/signup,
// then put it in a .env file at the project root as:
//   VITE_CAT_API_KEY=your_key_here
const API_KEY = import.meta.env.VITE_CAT_API_KEY

// Splits "Active, Energetic, Independent" into ["Active", "Energetic", "Independent"]
function parseTemperament(temperament) {
  if (!temperament) return []
  return temperament.split(',').map((t) => t.trim()).filter(Boolean)
}

function normalize(data) {
  const breed = data.breeds?.[0]
  return {
    id: data.id,
    image: data.url,
    breed: breed?.name ?? 'Unknown breed',
    origin: breed?.origin ?? 'Unknown origin',
    temperament: parseTemperament(breed?.temperament),
    lifeSpan: breed?.life_span ? `${breed.life_span} years` : 'Unknown',
  }
}

// Fetches a random cat (with breed info) whose breed, origin, and
// temperament traits are all clear of the ban list. Tries a handful of
// times, since each request only returns one candidate.
export async function fetchRandomCat(banned) {
  const MAX_ATTEMPTS = 20

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    let res
    try {
      res = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1', {
        headers: API_KEY ? { 'x-api-key': API_KEY } : {},
      })
    } catch {
      continue // network hiccup, just try again
    }

    if (res.status === 401) {
      throw new Error('missing_key')
    }
    if (!res.ok) continue

    const [data] = await res.json()
    if (!data || !data.breeds?.length) continue // skip results with no breed info

    const cat = normalize(data)
    const isBanned =
      banned.has(cat.breed) ||
      banned.has(cat.origin) ||
      cat.temperament.some((t) => banned.has(t))

    if (!isBanned) return cat
  }

  return null // couldn't find a match — ban list is probably too broad
}