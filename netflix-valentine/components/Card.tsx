"use client"

import { useRef } from "react"
import styles from "@/styles/Card.module.css"
import { useRouter } from "next/navigation"
import type { Song } from "@/data/songs"

const TRANSITION_KEY = "songTransition"

type Rect = { x: number; y: number; width: number; height: number }

export default function Card({
  song,
  onOpenSong,
  rowTitle,
}: {
  song: Song
  onOpenSong?: (song: Song, rect: Rect, rowTitle?: string) => void
  rowTitle?: string
}) {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    const el = cardRef.current
    if (!el) {
      if (onOpenSong) return
      router.push(`/song/${song.slug}`)
      return
    }
    const rect = {
      x: el.getBoundingClientRect().x,
      y: el.getBoundingClientRect().y,
      width: el.getBoundingClientRect().width,
      height: el.getBoundingClientRect().height,
    }
    if (onOpenSong) {
      onOpenSong(song, rect, rowTitle)
      return
    }
    sessionStorage.setItem(
      TRANSITION_KEY,
      JSON.stringify({ slug: song.slug, ...rect })
    )
    router.push(`/song/${song.slug}`)
  }

  return (
    <div
      ref={cardRef}
      className={styles.card}
      data-song-slug={song.slug}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`Open ${song.title}`}
    >
      <img src={song.image} alt={song.title} />
    </div>
  )
}
