"use client"

import { useEffect, useState } from "react"
import type { Song } from "@/data/songs"
import Navbar from "@/components/Navbar"
import SongDetailContent from "@/components/SongDetailContent"
import styles from "@/styles/SongPageTransition.module.css"
import songPageStyles from "@/styles/SongPage.module.css"
import backButtonStyles from "@/styles/BackButton.module.css"

const EXPAND_DURATION_MS = 480
const COLLAPSE_DURATION_MS = 450

type Rect = { x: number; y: number; width: number; height: number }

export default function SongOverlay({
  song,
  fromRect,
  onClose,
  displayGenre,
}: {
  song: Song
  fromRect: Rect
  onClose: () => void
  displayGenre?: string | null
}) {
  const [phase, setPhase] = useState<"expand" | "done" | "collapsing">("expand")
  const [expanded, setExpanded] = useState(false)
  const [collapseToRect, setCollapseToRect] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (phase !== "expand") return
    const t = setTimeout(() => setPhase("done"), EXPAND_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase])

  function handleBack() {
    setPhase("collapsing")
  }

  useEffect(() => {
    if (phase !== "collapsing") return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setCollapseToRect(true))
    })
    return () => cancelAnimationFrame(id)
  }, [phase])

  useEffect(() => {
    if (phase !== "collapsing" || !collapseToRect) return
    const t = setTimeout(() => onClose(), COLLAPSE_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase, collapseToRect, onClose])

  const headerAndContent = (
    <>
      <div className={songPageStyles.overlay} />
      <div className={songPageStyles.header}>
        <button
          type="button"
          className={backButtonStyles.backButton}
          onClick={handleBack}
          aria-label="Back to home"
        >
          <span className={backButtonStyles.arrow}>←</span>
          <span>Back</span>
        </button>
        {(displayGenre ?? song.genre) && (
          <span className={songPageStyles.genreLabel}>
            {displayGenre ?? song.genre}
          </span>
        )}
      </div>
      <div className={songPageStyles.content}>
        <SongDetailContent song={song} />
      </div>
    </>
  )

  if (phase === "collapsing") {
    return (
      <>
        <Navbar />
        <div
          className={`${styles.overlay} ${collapseToRect ? "" : styles.expanded}`}
          style={
            collapseToRect
              ? {
                  top: fromRect.y,
                  left: fromRect.x,
                  width: fromRect.width,
                  height: fromRect.height,
                  backgroundImage: `url(${song.image})`,
                  borderRadius: "4px",
                }
              : { backgroundImage: `url(${song.image})` }
          }
          aria-hidden
        />
        <div className={styles.contentPlaceholder}>
          <div className={songPageStyles.page} style={{ backgroundImage: `url(${song.image})` }}>
            {headerAndContent}
          </div>
        </div>
      </>
    )
  }

  if (phase === "done") {
    return (
      <div className={songPageStyles.overlayWrapper}>
        <div
          className={`${styles.overlay} ${styles.expanded} ${styles.overlayPersistent}`}
          style={{ backgroundImage: `url(${song.image})` }}
          aria-hidden
        />
        <Navbar />
        {headerAndContent}
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div
        className={`${styles.overlay} ${expanded ? styles.expanded : ""}`}
        style={{
          top: fromRect.y,
          left: fromRect.x,
          width: fromRect.width,
          height: fromRect.height,
          backgroundImage: `url(${song.image})`,
        }}
        aria-hidden
      />
      <div className={styles.contentPlaceholder}>
        <div className={songPageStyles.page} style={{ backgroundImage: `url(${song.image})` }}>
          {headerAndContent}
        </div>
      </div>
    </>
  )
}
