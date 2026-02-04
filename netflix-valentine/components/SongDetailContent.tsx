import { getSpotifyTrackId } from "@/data/songs"
import type { Song } from "@/data/songs"
import styles from "@/styles/SongPage.module.css"

export default function SongDetailContent({ song }: { song: Song }) {
  const trackId = getSpotifyTrackId(song.spotifyUrl)
  const embedUrl = trackId
    ? `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`
    : null

  return (
    <>
      <h1 className={styles.title}>{song.title}</h1>
      <p className={styles.artists}>
        <span className={styles.artistLabel}>Artist</span>
        {song.artists}
      </p>
      <p className={styles.description}>{song.description}</p>

      {embedUrl && (
        <div className={styles.embedWrap}>
          <iframe
            src={embedUrl}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Play ${song.title} on Spotify`}
            className={styles.embed}
          />
        </div>
      )}

      <div className={styles.actions}>
        <a
          href={song.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.openInSpotify}
        >
          Open in Spotify
          <span className={styles.openInSpotifyArrow} aria-hidden>→</span>
        </a>
      </div>
    </>
  )
}
