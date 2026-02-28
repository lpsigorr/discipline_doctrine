import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { INITIAL_STATS, STORY_NODES } from '../data/story'
import { computeEnding } from '../data/endings'

const GameContext = createContext(null)

const STORAGE_KEY = 'narrative_state_v3'

function clamp(value) {
  return Math.max(0, Math.min(100, value))
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore
  }
  return null
}

export function GameProvider({ children }) {
  const saved = loadState()

  const [currentNode, setCurrentNode] = useState(saved?.currentNode ?? 0)
  const [stats, setStats] = useState(saved?.stats ?? { ...INITIAL_STATS })
  const [selections, setSelections] = useState(saved?.selections ?? [])
  const [started, setStarted] = useState(saved?.started ?? false)
  const [ended, setEnded] = useState(saved?.ended ?? false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [interacted, setInteracted] = useState(false)

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentNode, stats, selections, started, ended })
    )
  }, [currentNode, stats, selections, started, ended])

  const applyChoice = useCallback((nodeId, choiceId, deltas) => {
    const impact = Object.values(deltas).reduce((sum, v) => sum + Math.abs(v), 0)
    setSelections((prev) => [...prev, { nodeId, choiceId, deltas, impact }])
    setStats((prev) => {
      const next = { ...prev }
      for (const [key, delta] of Object.entries(deltas)) {
        next[key] = clamp((next[key] ?? 50) + delta)
      }
      return next
    })
  }, [])

  const advance = useCallback(() => {
    if (currentNode >= STORY_NODES.length - 1) {
      setEnded(true)
    } else {
      setCurrentNode((n) => n + 1)
    }
  }, [currentNode])

  const reset = useCallback(() => {
    setCurrentNode(0)
    setStats({ ...INITIAL_STATS })
    setSelections([])
    setStarted(false)
    setEnded(false)
    setInteracted(false)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const getEnding = useCallback(() => computeEnding(stats), [stats])

  return (
    <GameContext.Provider
      value={{
        currentNode,
        stats,
        selections,
        started,
        ended,
        audioEnabled,
        interacted,
        setStarted,
        setAudioEnabled,
        setInteracted,
        applyChoice,
        advance,
        reset,
        getEnding,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used inside GameProvider')
  return ctx
}
