import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGame } from '../context/GameContext'
import { useAudio } from '../hooks/useAudio'
import { STORY_NODES, STAT_KEYS } from '../data/story'
import StatBar from './StatBar'
import ResultCard from './ResultCard'
import styles from './EndingScreen.module.css'

export default function EndingScreen() {
  const { stats, selections, reset, getEnding } = useGame()
  const { playImpact } = useAudio()
  const cardRef = useRef(null)
  const ending = getEnding()

  const topChoices = [...selections]
    .sort((a, b) => b.impact - a.impact)
    .slice(0, 5)

  const handleReplay = () => {
    playImpact()
    reset()
  }

  const handleShare = async () => {
    if (!cardRef.current) return
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 })
      const link = document.createElement('a')
      link.download = `ending-${ending.title.toLowerCase().replace(/\s+/g, '-')}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.warn('html-to-image failed:', err)
      alert('Screenshot tip: use your browser or OS screenshot tool to save this page.')
    }
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7 },
  })

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Ending header */}
      <motion.div {...fadeUp(0.2)}>
        <p className={styles.endingLabel}>Final Ending</p>
        <h2 className={styles.endingTitle}>{ending.title}</h2>
        <div className={styles.divider} />
        <p className={styles.summary}>{ending.summary}</p>

        {ending.warning && (
          <div className={styles.warning}>{ending.warning}</div>
        )}

        <p className={styles.cta}>{ending.cta}</p>
      </motion.div>

      {/* Stats */}
      <motion.section className={styles.section} {...fadeUp(0.6)}>
        <h3 className={styles.sectionLabel}>World Stats</h3>
        {STAT_KEYS.map((key, i) => (
          <StatBar key={key} label={key} value={stats[key]} delay={0.1 * i} />
        ))}
      </motion.section>

      {/* Top choices */}
      <motion.section className={styles.section} {...fadeUp(0.9)}>
        <h3 className={styles.sectionLabel}>Most Impactful Choices</h3>
        <div className={styles.choiceList}>
          {topChoices.map((sel, i) => {
            const node = STORY_NODES.find((n) => n.id === sel.nodeId)
            const choice = node?.choices.find((c) => c.id === sel.choiceId)
            return (
              <div key={i} className={styles.choiceItem}>
                <p className={styles.choiceAct}>
                  {node?.act} — {node?.title}
                </p>
                <p className={styles.choiceText}>{choice?.text}</p>
                <p className={styles.choiceImpact}>
                  Impact score: {Math.round(sel.impact)}
                </p>
              </div>
            )
          })}
        </div>
      </motion.section>

      {/* Buttons */}
      <motion.div className={styles.buttons} {...fadeUp(1.1)}>
        <motion.button
          className={styles.replayBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleReplay}
        >
          Replay
        </motion.button>
        <motion.button
          className={styles.shareBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleShare}
        >
          Share Result ↓
        </motion.button>
      </motion.div>

      {/* Hidden result card for PNG export */}
      <div className={styles.hiddenCard}>
        <ResultCard ref={cardRef} ending={ending} stats={stats} />
      </div>
    </motion.div>
  )
}
