'use client'

import Sidebar from '@/ui/sidebar'
import React, { useCallback, useEffect } from 'react'
import { useRef, useState } from 'react'

export default function ResizableSidebar() {
  const [widthVW, setWidthVW] = useState(15) // Largeur stockée après drag
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastVelocity = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const offsetX = useRef(0)
  const currentWidthVW = useRef(widthVW)
  const lastX = useRef(0)
  const lastTime = useRef(performance.now())

  const minWidthVW = 15
  const maxWidthVW = 100
  const thresholdVW = 50 + minWidthVW
  const velocityThreshold = 50 // Ajustement du seuil pour déclencher plus naturellement

  // Démarrer le redimensionnement
  const startResizing = (e: React.MouseEvent) => {
    setIsDragging(true)
    const rect = containerRef.current!.getBoundingClientRect()
    offsetX.current = rect.right - e.clientX
    lastX.current = e.clientX
    lastTime.current = performance.now()
    e.preventDefault()
  }

  // Déplacer la div avec mise à jour CSS
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const viewportWidth = window.innerWidth
        let newWidthVW =
          ((e.clientX + offsetX.current - containerRef.current!.getBoundingClientRect().left) /
            viewportWidth) *
          100

        newWidthVW = Math.max(minWidthVW, Math.min(maxWidthVW, newWidthVW))

        if (Math.abs(newWidthVW - currentWidthVW.current) > 0.5) {
          currentWidthVW.current = newWidthVW
          containerRef.current!.style.width = `${newWidthVW}vw`
        }

        // Calcul de la vitesse sur un intervalle plus long
        const currentTime = performance.now()
        const deltaTime = currentTime - lastTime.current
        const deltaX = ((e.clientX - lastX.current) / viewportWidth) * 100

        if (deltaTime > 10) {
          lastVelocity.current = (deltaX / deltaTime) * 1000 // Conversion en vw/s
          lastTime.current = currentTime
          lastX.current = e.clientX
        }
      })
    },
    [isDragging]
  )

  // Arrêter le redimensionnement et appliquer l'inertie
  const stopResizing = () => {
    setIsDragging(false)

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    let finalWidth = currentWidthVW.current

    // Détection améliorée de l'inertie avec seuil ajusté
    if (lastVelocity.current > velocityThreshold) {
      finalWidth = maxWidthVW
    } else if (lastVelocity.current < -velocityThreshold) {
      finalWidth = minWidthVW
    } else {
      finalWidth = currentWidthVW.current >= thresholdVW ? maxWidthVW : minWidthVW
    }

    setWidthVW(finalWidth)
    containerRef.current!.style.width = `${finalWidth}vw`
    containerRef.current!.style.transition = 'width 0.3s ease-out' // Transition fluide
  }

  // Gestion des événements
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', stopResizing)
    } else {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stopResizing)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stopResizing)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isDragging, onMouseMove])

  return (
    <div
      ref={containerRef}
      className="absolute select-none cursor-grab active:cursor-grabbing"
      style={{
        width: `${widthVW}vw`,
        maxWidth: '100vw',
        transition: isDragging ? 'none' : 'width 0.3s ease-out' // Transition naturelle
      }}
      onMouseDown={startResizing}
    >
      <Sidebar />
    </div>
  )
}
