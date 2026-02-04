"use client"

import { useState, useEffect, useMemo } from "react"
import styles from "@/styles/Banner.module.css"
import { yourSongs } from "@/data/songs"
import type { Song } from "@/data/songs"

function pickRandomSong(songs: Song[], exclude?: Song): Song {
  if (songs.length === 0) return songs[0]
  if (songs.length === 1) return songs[0]
  const filtered = exclude ? songs.filter((s) => s.slug !== exclude.slug) : songs
  return filtered[Math.floor(Math.random() * filtered.length)]
}

export default function Banner() {
  const songs = useMemo(() => yourSongs, [])

  const [slides, setSlides] = useState<[Song, Song] | null>(() =>
    yourSongs.length > 0 ? [yourSongs[0], yourSongs[0]] : null
  )
  const [visibleSlide, setVisibleSlide] = useState<0 | 1>(0)
  const [contentSlide, setContentSlide] = useState<0 | 1>(0)
  const [contentFadingOut, setContentFadingOut] = useState(false)

  useEffect(() => {
    if (songs.length <= 1 || !slides) return
    const id = setInterval(() => {
      const current = slides[visibleSlide]
      const next = pickRandomSong(songs, current)
      const nextSlide = visibleSlide === 0 ? 1 : 0

      setContentFadingOut(true)

      setSlides((prev) => {
        if (!prev) return prev
        const nextSlides: [Song, Song] = [...prev]
        nextSlides[nextSlide] = next
        return nextSlides
      })
      setVisibleSlide(nextSlide)

      setTimeout(() => {
        setContentSlide(nextSlide)
        setContentFadingOut(false)
      }, 500)
    }, 5000)
    return () => clearInterval(id)
  }, [songs, slides, visibleSlide])

  if (!slides || songs.length === 0) return null

  const songForContent = slides[contentSlide]

  return (
    <header className={styles.banner}>
      <div
        className={`${styles.slide} ${visibleSlide === 0 ? styles.slideActive : ""}`}
        style={{ backgroundImage: `url(${slides[0].image})` }}
      />
      <div
        className={`${styles.slide} ${visibleSlide === 1 ? styles.slideActive : ""}`}
        style={{ backgroundImage: `url(${slides[1].image})` }}
      />
      <div className={styles.overlay} />
      <div
        className={`${styles.content} ${!contentFadingOut ? styles.contentVisible : ""}`}
      >
        <h1 className={styles.title}>{songForContent.title}</h1>
        <p className={styles.description}>{songForContent.description}</p>
      </div>
    </header>
  )
}
