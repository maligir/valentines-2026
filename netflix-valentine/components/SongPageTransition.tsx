"use client"

import {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react"
import { useRouter } from "next/navigation"
import styles from "@/styles/SongPageTransition.module.css"

const TRANSITION_KEY = "songTransition"
const EXPAND_DURATION_MS = 480
const COLLAPSE_DURATION_MS = 450

type Rect = { x: number; y: number; width: number; height: number }

type TransitionContextValue = {
  triggerBack: () => void
} | null

const SongPageTransitionContext = createContext<TransitionContextValue>(null)

export function useSongPageTransition() {
  return useContext(SongPageTransitionContext)
}

export default function SongPageTransition({
  slug,
  image,
  children,
}: {
  slug: string
  image: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const [phase, setPhase] = useState<"expand" | "done" | "collapsing">("expand")
  const [fromRect, setFromRect] = useState<Rect | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [collapseToRect, setCollapseToRect] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(TRANSITION_KEY)
      if (!raw) {
        setPhase("done")
        return
      }
      const data = JSON.parse(raw) as { slug: string } & Rect
      if (data.slug !== slug) {
        sessionStorage.removeItem(TRANSITION_KEY)
        setPhase("done")
        return
      }
      setFromRect({
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
      })
    } catch {
      setPhase("done")
    }
  }, [slug])

  useEffect(() => {
    if (!fromRect) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true))
    })
    return () => cancelAnimationFrame(id)
  }, [fromRect])

  useEffect(() => {
    if (phase !== "expand" || !fromRect) return
    const t = setTimeout(() => {
      sessionStorage.removeItem(TRANSITION_KEY)
      setPhase("done")
    }, EXPAND_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase, fromRect])

  const triggerBack = useCallback(() => {
    if (!fromRect) {
      router.push("/")
      return
    }
    setPhase("collapsing")
  }, [fromRect, router])

  useEffect(() => {
    if (phase !== "collapsing") return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setCollapseToRect(true))
    })
    return () => cancelAnimationFrame(id)
  }, [phase])

  useEffect(() => {
    if (phase !== "collapsing" || !collapseToRect) return
    const t = setTimeout(() => {
      sessionStorage.removeItem(TRANSITION_KEY)
      sessionStorage.setItem("scrollToSong", slug)
      router.push("/")
    }, COLLAPSE_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase, collapseToRect, router, slug])

  if (phase === "collapsing" && fromRect) {
    return (
      <>
        <div
          ref={overlayRef}
          className={`${styles.overlay} ${collapseToRect ? "" : styles.expanded}`}
          style={
            collapseToRect
              ? {
                  top: fromRect.y,
                  left: fromRect.x,
                  width: fromRect.width,
                  height: fromRect.height,
                  backgroundImage: `url(${image})`,
                  borderRadius: "4px",
                }
              : {
                  backgroundImage: `url(${image})`,
                }
          }
          aria-hidden
        />
        <div className={styles.contentPlaceholder}>{children}</div>
      </>
    )
  }

  if (phase === "done") {
    return (
      <SongPageTransitionContext.Provider value={{ triggerBack }}>
        {children}
      </SongPageTransitionContext.Provider>
    )
  }

  if (!fromRect) {
    return <>{children}</>
  }

  return (
    <>
      <div
        ref={overlayRef}
        className={`${styles.overlay} ${expanded ? styles.expanded : ""}`}
        style={{
          top: fromRect.y,
          left: fromRect.x,
          width: fromRect.width,
          height: fromRect.height,
          backgroundImage: `url(${image})`,
        }}
        aria-hidden
      />
      <div className={styles.contentPlaceholder}>{children}</div>
    </>
  )
}
