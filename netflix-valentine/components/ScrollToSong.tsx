"use client"

import { useEffect } from "react"

const SCROLL_TO_SONG_KEY = "scrollToSong"

export default function ScrollToSong() {
  useEffect(() => {
    try {
      const slug = sessionStorage.getItem(SCROLL_TO_SONG_KEY)
      if (!slug) return
      sessionStorage.removeItem(SCROLL_TO_SONG_KEY)
      const el = document.querySelector(`[data-song-slug="${slug}"]`)
      el?.scrollIntoView({ behavior: "smooth", block: "center" })
    } catch {
      sessionStorage.removeItem(SCROLL_TO_SONG_KEY)
    }
  }, [])
  return null
}
