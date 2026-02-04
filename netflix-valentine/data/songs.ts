// Genre/label for each row. Your Songs = main list (first letters spell WILL YOU BE MY VALENTINE).
// The other four row titles spell the hint: "Read the first letters"
export type Genre = "Your Songs" | "Read" | "The" | "First" | "Letters"

export type Song = {
  title: string
  artists: string
  description: string
  image: string
  spotifyUrl: string
  slug: string
  genre: Genre
}

// Your Songs: 20 songs in order — first letters spell WILL YOU BE MY VALENTINE
export const yourSongs: Song[] = [
  {
    title: "Wind",
    artists: "Akeboshi",
    description: "A wistful acoustic ballad about longing and letting go—melancholy that hits like a quiet storm.",
    image: "/images/wind.jpg",
    spotifyUrl: "https://open.spotify.com/track/5BqKtuCFLfZyzfZOwlgW1f?si=13450a31c99c4689",
    slug: "wind",
    genre: "Your Songs",
  },
  {
    title: "Ishq Wala Love",
    artists: "Vishal-Shekhar, Shekhar Ravjiani, Salim Merchant, Neeti Mohan",
    description: "Bollywood romance at its peak—sweet, soaring, and impossible not to hum when love is in the air.",
    image: "/images/ishq-wala-love.jpg",
    spotifyUrl: "https://open.spotify.com/track/1hQia6rxgfM1ly2hE3StWp?si=201e1bb58df04966",
    slug: "ishq-wala-love",
    genre: "Your Songs",
  },
  {
    title: "Let Me Love You",
    artists: "DJ Snake, Justin Bieber",
    description: "A plea to be trusted with someone's heart—electronic drop meets raw vulnerability.",
    image: "/images/let-me-love-you.jpg",
    spotifyUrl: "https://open.spotify.com/track/0lYBSQXN6rCTvUZvg9S0lU?si=14234341205d4669",
    slug: "let-me-love-you",
    genre: "Your Songs",
  },
  {
    title: "Lahu Munh Lag Gaya",
    artists: "Sanjay Leela Bhansali, Shail Hada, Siddharth - Garima",
    description: "Passion that bleeds into every note—intense, operatic love from the world of Ram-Leela.",
    image: "/images/lahu-munh-lag-gaya.jpg",
    spotifyUrl: "https://open.spotify.com/track/1YKF4Eutw7SXJooEz0UFA9?si=8ab8cbcf07b4473a",
    slug: "lahu-munh-lag-gaya",
    genre: "Your Songs",
  },
  {
    title: "Ye Chilipi",
    artists: "Srinivas",
    description: "A Telugu classic that turns a simple moment into something tender and unforgettable.",
    image: "/images/ye-chilipi.jpg",
    spotifyUrl: "https://open.spotify.com/track/3LYt0b1ljHUYoG5YL2WwWP?si=13b521d3d1d54005",
    slug: "ye-chilipi",
    genre: "Your Songs",
  },
  {
    title: "Often",
    artists: "The Weeknd",
    description: "Late-night desire and confession—smooth, seductive, and unapologetically honest.",
    image: "/images/often.jpg",
    spotifyUrl: "https://open.spotify.com/track/4PhsKqMdgMEUSstTDAmMpg?si=2846cd9e4d294b72",
    slug: "often",
    genre: "Your Songs",
  },
  {
    title: "Uppenantha",
    artists: "Devi Sri Prasad, KK, Balaji",
    description: "That feeling when someone walks in and everything shifts—hopeful, romantic, and instantly catchy.",
    image: "/images/uppenantha.jpg",
    spotifyUrl: "https://open.spotify.com/track/57zEYntUat0ofbFpoicN26?si=87f1f7da9932409f",
    slug: "uppenantha",
    genre: "Your Songs",
  },
  {
    title: "Beauty And A Beat",
    artists: "Justin Bieber, Nicki Minaj",
    description: "Pure pop energy—when the beat drops and you just want to dance with that one person.",
    image: "/images/beauty-and-a-beat.jpg",
    spotifyUrl: "https://open.spotify.com/track/190jyVPHYjAqEaOGmMzdyk?si=50ec29241a314b0e",
    slug: "beauty-and-a-beat",
    genre: "Your Songs",
  },
  {
    title: "Enna Sona",
    artists: "A.R. Rahman, Arijit Singh",
    description: "A.R. Rahman and Arijit Singh turn “how beautiful you are” into a lush, dreamy love letter.",
    image: "/images/enna-sona.jpeg",
    spotifyUrl: "https://open.spotify.com/track/6bdpj89aYEBjhpsenXAsmO?si=773ba49613664184",
    slug: "enna-sona",
    genre: "Your Songs",
  },
  {
    title: "My War",
    artists: "Shinsei Kamattechan",
    description: "Chaos, rage, and the cost of fighting for what you believe in—dark and relentless.",
    image: "/images/my-war.jpeg",
    spotifyUrl: "https://open.spotify.com/track/3KhwEuqLNjHfsKaBDo1yVh?si=c1568a9a948148de",
    slug: "my-war",
    genre: "Your Songs",
  },
  {
    title: "Your Lie In April",
    artists: "Goose House",
    description: "Youth, loss, and the way music and love can bring someone back to life—heartbreaking and hopeful.",
    image: "/images/your-lie-in-april.jpg",
    spotifyUrl: "https://open.spotify.com/track/2BlDX1yfT0ea5wo0vjCKKa?si=4f2a052e0aa44126",
    slug: "your-lie-in-april",
    genre: "Your Songs",
  },
  {
    title: "Valentine",
    artists: "Laufey",
    description: "Jazz-inflected and bittersweet—the kind of Valentine's song that feels personal and a little sad.",
    image: "/images/valentine.jpg",
    spotifyUrl: "https://open.spotify.com/track/6cx5CvFhqN19efStehJqoW?si=893a909b082444b6",
    slug: "valentine",
    genre: "Your Songs",
  },
  {
    title: "Apudo Ipudo",
    artists: "Siddharth",
    description: "Telugu romance that asks “then and now”—nostalgic, sweet, and impossible to forget.",
    image: "/images/apudo-ipudo.jpg",
    spotifyUrl: "https://open.spotify.com/track/01uUuX3157r7G90Gb7LKQC?si=a0a4165fab8c45e8",
    slug: "apudo-ipudo",
    genre: "Your Songs",
  },
  {
    title: "Laal Ishq",
    artists: "Sanjay Leela Bhansali, Arijit Singh, Siddharth - Garima",
    description: "Love that runs as deep as blood—grand, tragic, and utterly spellbinding.",
    image: "/images/laal-ishq.jpg",
    spotifyUrl: "https://open.spotify.com/track/4hXHlAc9ZOJY5pGbdfuWsa?si=1ac639e7f5964409",
    slug: "laal-ishq",
    genre: "Your Songs",
  },
  {
    title: "Ekkada Ekkada",
    artists: "S.P. Charan, Harini",
    description: "“Where, where?”—a Telugu duet that turns searching into one of the most romantic questions.",
    image: "/images/ekkada-ekkada.jpg",
    spotifyUrl: "https://open.spotify.com/track/7CwwtSBeTSglx1kDJ6owQ2?si=4fade8649c174927",
    slug: "ekkada-ekkada",
    genre: "Your Songs",
  },
  {
    title: "Nenu Nenugalene",
    artists: "S.P. Charan",
    description: "“I'm not me without you”—simple words, huge feeling. Our song.",
    image: "/images/nenu-nenugalene.jpeg",
    spotifyUrl: "https://open.spotify.com/track/1vvlGspjndrFm9c5NxgQAs?si=d65663b784254208",
    slug: "nenu-nenugalene",
    genre: "Your Songs",
  },
  {
    title: "The Rumbling",
    artists: "SiM",
    description: "The world is ending and the beat doesn't stop—apocalyptic, furious, and impossible to ignore.",
    image: "/images/the-rumbling.jpeg",
    spotifyUrl: "https://open.spotify.com/track/6k0X05danQOXSBTVek5DU1?si=2fad096616e44be0",
    slug: "the-rumbling",
    genre: "Your Songs",
  },
  {
    title: "If",
    artists: "Daisuke",
    description: "Quiet and introspective—one word that holds every possibility and every fear.",
    image: "/images/if.jpg",
    spotifyUrl: "https://open.spotify.com/track/6Kg19UJsggomlPU7vrggU3?si=da5541ef2d9f4d4a",
    slug: "if",
    genre: "Your Songs",
  },
  {
    title: "Nothin On You",
    artists: "Bruno Mars, B.o.B",
    description: "No one else comes close—smooth, sincere, and the kind of love song you play on repeat.",
    image: "/images/nothin-on-you.jpg",
    spotifyUrl: "https://open.spotify.com/track/59dLtGBS26x7kc0rHbaPrq?si=0b7f137f28e34c59",
    slug: "nothin-on-you",
    genre: "Your Songs",
  },
  {
    title: "Ek Ladki Ko Dekha Toh Aisa Laga",
    artists: "Darshan Raval, Rochak Kohli",
    description: "That moment you see someone and everything changes—Bollywood romance in one perfect phrase.",
    image: "/images/ek-ladki-ko-dekha-toh-aisa-laga.jpg",
    spotifyUrl: "https://open.spotify.com/track/3jyqXdAjwqO3gFtjnYrbq9?si=391ddbf9f7d343a9",
    slug: "ek-ladki-ko-dekha-toh-aisa-laga",
    genre: "Your Songs",
  },
]

/** Deterministic shuffle so each row has a different order; only Your Songs has the correct order. */
function shuffleWithSeed<T>(array: readonly T[], seed: string): T[] {
  const arr = [...array]
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i)
  for (let i = arr.length - 1; i > 0; i--) {
    h = (h * 16807) % 2147483647
    const j = Math.abs(h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Same 20 songs as Your Songs, but shuffled so she has to get the order from Your Songs
export const readRowSongs: Song[] = shuffleWithSeed(yourSongs, "Read")
export const theRowSongs: Song[] = shuffleWithSeed(yourSongs, "The")
export const firstRowSongs: Song[] = shuffleWithSeed(yourSongs, "First")
export const lettersRowSongs: Song[] = shuffleWithSeed(yourSongs, "Letters")

// Flat list for lookup by slug (only unique songs)
export const allSongs: Song[] = [...yourSongs]

export function getSongBySlug(slug: string): Song | undefined {
  return allSongs.find((s) => s.slug === slug)
}

/** Extract Spotify track ID from a spotify track URL for use in embed. */
export function getSpotifyTrackId(spotifyUrl: string): string | null {
  const match = spotifyUrl.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/)
  return match ? match[1] : null
}

// Rows for home page: title + songs array (20 each)
// Your Songs = correct order (first letters spell WILL YOU BE MY VALENTINE)
// Other rows = same songs, shuffled—she has to get the order from Your Songs
export const rows: { title: string; songs: Song[] }[] = [
  { title: "Your Songs", songs: yourSongs },
  { title: "Read", songs: readRowSongs },
  { title: "The", songs: theRowSongs },
  { title: "First", songs: firstRowSongs },
  { title: "Letters", songs: lettersRowSongs },
]
