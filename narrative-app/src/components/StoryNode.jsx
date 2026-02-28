import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGame } from '../context/GameContext'
import { useAudio } from '../hooks/useAudio'
import styles from './StoryNode.module.css'

export default function StoryNode({ node }) {
  const { applyChoice, advance } = useGame()
  const { playClick, playImpact } = useAudio()
  const [selected, setSelected] = useState(null)
  const [consequence, setConsequence] = useState(null)
  const [canContinue, setCanContinue] = useState(false)

  const handleSelect = (choice) => {
    if (selected) return
    playClick()
    setSelected(choice.id)
    setConsequence(choice.consequence)
    applyChoice(node.id, choice.id, choice.deltas)
    setTimeout(() => setCanContinue(true), 600)
  }

  const handleContinue = () => {
    playImpact()
    advance()
  }

  const isFinal = node.id === 15

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Act label */}
      <motion.p
        className={styles.act}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {node.act}
      </motion.p>

      {/* Title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {node.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {node.subtitle}
      </motion.p>

      {/* Scenario */}
      <motion.p
        className={styles.scenario}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {node.scenario}
      </motion.p>

      <div className={styles.divider} />

      {/* Question */}
      <motion.p
        className={styles.question}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {node.question}
      </motion.p>

      {/* Choices */}
      <div className={styles.choices}>
        {node.choices.map((choice, i) => {
          const isSelected = selected === choice.id
          const isDimmed = selected && !isSelected

          return (
            <motion.button
              key={choice.id}
              className={`${styles.choice} ${isSelected ? styles.choiceSelected : ''} ${isDimmed ? styles.choiceDimmed : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isDimmed ? 0.2 : 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              whileHover={!selected ? { x: 6 } : {}}
              onClick={() => handleSelect(choice)}
              disabled={!!selected}
            >
              <span className={styles.choiceLetter}>{choice.id}.</span>
              <span className={styles.choiceText}>{choice.text}</span>
              {isSelected && (
                <motion.span
                  className={styles.checkmark}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Consequence */}
      <AnimatePresence>
        {consequence && (
          <motion.div
            className={styles.consequence}
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
            transition={{ duration: 0.5 }}
          >
            {consequence}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue */}
      <AnimatePresence>
        {canContinue && (
          <motion.button
            className={styles.continueBtn}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleContinue}
          >
            {isFinal ? 'Reveal My Ending →' : 'Continue →'}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
