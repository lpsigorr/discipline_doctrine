import { motion } from 'framer-motion'
import { STAT_COLORS } from '../data/story'
import styles from './StatBar.module.css'

export default function StatBar({ label, value, animateIn = true, small = false, delay = 0 }) {
  const color = STAT_COLORS[label] || '#888888'

  return (
    <div className={`${styles.wrapper} ${small ? styles.small : ''}`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{Math.round(value)}</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          initial={animateIn ? { width: 0 } : { width: `${value}%` }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
          style={{ background: color }}
        />
      </div>
    </div>
  )
}
