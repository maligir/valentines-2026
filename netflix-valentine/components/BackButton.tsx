"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSongPageTransition } from "@/components/SongPageTransition"
import styles from "@/styles/BackButton.module.css"

const EXIT_DURATION_MS = 280

export default function BackButton() {
  const router = useRouter()
  const [isExiting, setIsExiting] = useState(false)
  const transition = useSongPageTransition()

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    if (transition?.triggerBack) {
      transition.triggerBack()
      return
    }

    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      router.push("/")
    }, EXIT_DURATION_MS)
  }

  return (
    <Link
      href="/"
      className={`${styles.backButton} ${isExiting ? styles.exiting : ""}`}
      onClick={handleClick}
      aria-label="Back to home"
    >
      <span className={styles.arrow}>←</span>
      <span>Back</span>
    </Link>
  )
}
