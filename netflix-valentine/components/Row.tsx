import styles from "@/styles/Row.module.css"
import Card from "./Card"
import type { Song } from "@/data/songs"

type Rect = { x: number; y: number; width: number; height: number }

export default function Row({
  title,
  songs,
  index = 0,
  onOpenSong,
}: {
  title: string
  songs: Song[]
  index?: number
  onOpenSong?: (song: Song, rect: Rect, rowTitle?: string) => void
}) {
  return (
    <section
      className={styles.row}
      style={{ animationDelay: `${0.15 + index * 0.06}s` }}
    >
      <h2 className={styles.rowTitle}>{title}</h2>
      <div className={styles.cards}>
        {songs.map((song) => (
          <Card
            key={song.slug}
            song={song}
            onOpenSong={onOpenSong}
            rowTitle={title}
          />
        ))}
      </div>
    </section>
  )
}
