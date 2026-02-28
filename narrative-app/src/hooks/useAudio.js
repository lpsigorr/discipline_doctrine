import { useRef, useCallback, useEffect } from 'react'
import { useGame } from '../context/GameContext'

// ─── AMBIENT MP3 ────────────────────────────────────────────
// Put your file in /public/audio/ and set the filename here.
// If you have no file, set this to null and the app still works.
const AMBIENT_FILE = `${import.meta.env.BASE_URL}audio/inthepool.mp3`   // ← change this to your filename
const AMBIENT_VOLUME = 0.18                  // 0.0 – 1.0, keep it subtle

// ─── Shared ambient instance (lives outside React) ──────────
let ambientAudio = null

function getAmbient() {
  if (!ambientAudio && AMBIENT_FILE) {
    ambientAudio = new Audio(AMBIENT_FILE)
    ambientAudio.loop = true
    ambientAudio.volume = 0
  }
  return ambientAudio
}

function fadeAmbientTo(targetVolume, durationMs = 1200) {
  const audio = getAmbient()
  if (!audio) return
  const steps = 30
  const interval = durationMs / steps
  const start = audio.volume
  const delta = (targetVolume - start) / steps
  let step = 0
  const timer = setInterval(() => {
    step++
    audio.volume = Math.max(0, Math.min(1, start + delta * step))
    if (step >= steps) clearInterval(timer)
  }, interval)
}

// ─── Web Audio synth tones (for click/impact) ───────────────
let sharedAudioCtx = null

function getAudioCtx() {
  if (!sharedAudioCtx) {
    sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return sharedAudioCtx
}

function playTone(freq = 440, type = 'sine', duration = 0.15, gainValue = 0.08) {
  try {
    const ctx = getAudioCtx()
    if (ctx.state === 'suspended') ctx.resume()
    const osc = ctx.createOscillator()
    const gainNode = ctx.createGain()
    osc.connect(gainNode)
    gainNode.connect(ctx.destination)
    osc.type = type
    osc.frequency.setValueAtTime(freq, ctx.currentTime)
    gainNode.gain.setValueAtTime(gainValue, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + duration)
  } catch {
    // Audio not supported or blocked — silently fail
  }
}

// ─── Hook ────────────────────────────────────────────────────
export function useAudio() {
  const { audioEnabled, interacted } = useGame()

  // Start / stop ambient when interacted or audioEnabled changes
  useEffect(() => {
    const audio = getAmbient()
    if (!audio) return

    if (interacted && audioEnabled) {
      audio.play().catch(() => {}) // browser may still block; ignore
      fadeAmbientTo(AMBIENT_VOLUME)
    } else {
      fadeAmbientTo(0, 600)
      setTimeout(() => {
        if (!audioEnabled) audio.pause()
      }, 650)
    }
  }, [interacted, audioEnabled])

  const resumeContext = useCallback(() => {
    try { getAudioCtx().resume() } catch {}
    const audio = getAmbient()
    if (audio && audioEnabled) {
      audio.play().catch(() => {})
      fadeAmbientTo(AMBIENT_VOLUME)
    }
  }, [audioEnabled])

  const playClick = useCallback(() => {
    if (!audioEnabled || !interacted) return
    playTone(660, 'triangle', 0.08, 0.06)
  }, [audioEnabled, interacted])

  const playImpact = useCallback(() => {
    if (!audioEnabled || !interacted) return
    playTone(220, 'sine', 0.3, 0.1)
    setTimeout(() => playTone(330, 'triangle', 0.2, 0.05), 40)
  }, [audioEnabled, interacted])

  const playSuccess = useCallback(() => {
    if (!audioEnabled || !interacted) return
    playTone(440, 'sine', 0.15, 0.06)
    setTimeout(() => playTone(550, 'sine', 0.2, 0.05), 100)
    setTimeout(() => playTone(660, 'sine', 0.25, 0.04), 220)
  }, [audioEnabled, interacted])

  return { resumeContext, playClick, playImpact, playSuccess }
}
