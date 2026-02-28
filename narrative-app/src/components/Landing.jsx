import { motion } from 'framer-motion'
import { useGame } from '../context/GameContext'
import { useAudio } from '../hooks/useAudio'
import styles from './Landing.module.css'

export default function Landing() {
  const { setStarted, setInteracted } = useGame()
  const { resumeContext, playImpact } = useAudio()

  const handleBegin = () => {
    resumeContext()
    setInteracted(true)
    setStarted(true)
    playImpact()
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className={styles.eyebrow}>An Interactive History</p>

        <h1 className={styles.title}>
          From Ordered Creation
          <br />
          <span className={styles.titleDim}>to Fragmented Modernity</span>
        </h1>

        <div className={styles.divider} />

        <p className={styles.description}>
          Fifteen pivotal moments in the history of Western thought. Your choices
          reveal who you are — and where civilization is heading.
        </p>

        <motion.button
          className={styles.beginBtn}
          onClick={handleBegin}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Begin the Line
        </motion.button>

        <p className={styles.meta}>15 NODES · 6 WORLD STATS · 7 POSSIBLE ENDINGS</p>
      </motion.div>
    </motion.div>
  )
}
