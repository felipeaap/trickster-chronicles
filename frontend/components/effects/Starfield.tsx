'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

type ShootingStar = {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  life: number
  opacity: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const STAR_COUNT = 120
    const SHOOTING_CHANCE = 0.002 // raridade

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random()
    }))

    const shootingStars: ShootingStar[] = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resize)

    let animationFrame: number

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.4), // topo da tela
        length: Math.random() * 80 + 80,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4, // diagonal ↘
        life: 0,
        opacity: 1
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // ⭐ STARS
      stars.forEach(star => {
        star.y += star.speed

        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }

        star.opacity += (Math.random() - 0.5) * 0.05
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`
        ctx.fill()
      })

      if (Math.random() < SHOOTING_CHANCE && shootingStars.length < 2){
        spawnShootingStar()
      }
      shootingStars.forEach((s, i) => {
        const vx = Math.cos(s.angle) * s.speed
        const vy = Math.sin(s.angle) * s.speed

        s.x += vx
        s.y += vy
        s.life += 1
        s.opacity -= 0.01

        const tailX = s.x - Math.cos(s.angle) * s.length
        const tailY = s.y - Math.sin(s.angle) * s.length

        const gradient = ctx.createLinearGradient(
          s.x,
          s.y,
          tailX,
          tailY
        )

        gradient.addColorStop(0, `rgba(0,212,232,${s.opacity})`)
        gradient.addColorStop(1, 'rgba(255,255,255,0)')

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // remove quando morrer
        if (s.opacity <= 0) {
          shootingStars.splice(i, 1)
        }
      })

      animationFrame = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}