import { motion } from 'framer-motion'
import styles from './ProgressBar.module.css'

export default function ProgressBar({ index, total }) {
  const pct = index / total

  return (
    <div className={styles.track}>
      <motion.div
        className={styles.fill}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: pct }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}
