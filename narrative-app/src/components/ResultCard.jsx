import { forwardRef } from 'react'
import { STAT_KEYS, STAT_COLORS } from '../data/story'
import styles from './ResultCard.module.css'

const ResultCard = forwardRef(function ResultCard({ ending, stats }, ref) {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.eyebrow}>FROM ORDERED CREATION TO FRAGMENTED MODERNITY</div>

      <div className={styles.endingLabel}>ENDING</div>
      <h2 className={styles.endingTitle}>{ending.title}</h2>

      <div className={styles.divider} />

      <p className={styles.summary}>
        {ending.summary.length > 160
          ? ending.summary.substring(0, 157) + '...'
          : ending.summary}
      </p>

      <div className={styles.statsSection}>
        {STAT_KEYS.map((key) => (
          <div key={key} className={styles.statRow}>
            <span className={styles.statLabel}>{key}</span>
            <div className={styles.statTrack}>
              <div
                className={styles.statFill}
                style={{
                  width: `${stats[key]}%`,
                  background: STAT_COLORS[key],
                }}
              />
            </div>
            <span className={styles.statValue}>{Math.round(stats[key])}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span>{date}</span>
        <span>From Ordered Creation to Fragmented Modernity</span>
      </div>
    </div>
  )
})

export default ResultCard
