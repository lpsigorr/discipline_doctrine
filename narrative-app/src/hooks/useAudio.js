import { useRef, useCallback } from 'react'
import { useGame } from '../context/GameContext'

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

export function useAudio() {
  const { audioEnabled, interacted } = useGame()

  const resumeContext = useCallback(() => {
    try {
      getAudioCtx().resume()
    } catch {
      // ignore
    }
  }, [])

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
