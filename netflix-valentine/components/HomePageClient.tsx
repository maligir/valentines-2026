"use client"

import { useState, useCallback, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import Row from "@/components/Row"
import SongOverlay from "@/components/SongOverlay"
import { rows, getSongBySlug } from "@/data/songs"
import type { Song } from "@/data/songs"

type Rect = { x: number; y: number; width: number; height: number }

export default function HomePageClient() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null)
  const [transitionRect, setTransitionRect] = useState<Rect | null>(null)
  const [selectedRowTitle, setSelectedRowTitle] = useState<string | null>(null)

  const handleOpenSong = useCallback((song: Song, rect: Rect, rowTitle?: string) => {
    setTransitionRect(rect)
    setSelectedSong(song.slug)
    setSelectedRowTitle(rowTitle ?? null)
    if (typeof window !== "undefined") {
      window.history.pushState({ overlay: song.slug }, "", `/song/${song.slug}`)
    }
  }, [])

  const handleCloseOverlay = useCallback(() => {
    setSelectedSong(null)
    setTransitionRect(null)
    setSelectedRowTitle(null)
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/")
    }
  }, [])

  useEffect(() => {
    function handlePopState() {
      if (selectedSong) setSelectedSong(null)
      setTransitionRect(null)
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [selectedSong])

  const song = selectedSong ? getSongBySlug(selectedSong) : null

  return (
    <>
      <Navbar />
      <Banner />
      {rows.map((row, index) => (
        <Row
          key={row.title}
          title={row.title}
          songs={row.songs}
          index={index}
          onOpenSong={handleOpenSong}
        />
      ))}
      {song && transitionRect && (
        <SongOverlay
          song={song}
          fromRect={transitionRect}
          onClose={handleCloseOverlay}
          displayGenre={selectedRowTitle}
        />
      )}
    </>
  )
}
