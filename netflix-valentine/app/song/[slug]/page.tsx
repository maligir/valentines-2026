import Link from "next/link"
import { getSongBySlug } from "@/data/songs"
import Navbar from "@/components/Navbar"
import BackButton from "@/components/BackButton"
import SongPageTransition from "@/components/SongPageTransition"
import SongDetailContent from "@/components/SongDetailContent"
import styles from "@/styles/SongPage.module.css"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function SongPage({ params }: Props) {
  const { slug } = await params
  const song = getSongBySlug(slug)

  if (!song) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <BackButton />
          <h1>Song not found</h1>
          <Link href="/">← Back to home</Link>
        </div>
      </>
    )
  }

  const pageContent = (
    <div
      className={styles.page}
      style={{ backgroundImage: `url(${song.image})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.header}>
        <BackButton />
        {song.genre && (
          <span className={styles.genreLabel}>{song.genre}</span>
        )}
      </div>
      <div className={styles.content}>
        <SongDetailContent song={song} />
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <SongPageTransition slug={song.slug} image={song.image}>
        {pageContent}
      </SongPageTransition>
    </>
  )
}
