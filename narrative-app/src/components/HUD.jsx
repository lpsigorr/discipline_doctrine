import { useGame } from '../context/GameContext'
import styles from './HUD.module.css'

export function AudioToggle() {
  const { audioEnabled, setAudioEnabled } = useGame()

  return (
    <button
      className={styles.audioToggle}
      onClick={() => setAudioEnabled((v) => !v)}
      aria-label={audioEnabled ? 'Mute audio' : 'Enable audio'}
    >
      {audioEnabled ? 'SOUND ON' : 'SOUND OFF'}
    </button>
  )
}

export function ResetButton({ onClick }) {
  return (
    <button className={styles.resetButton} onClick={onClick} aria-label="Reset game">
      RESET
    </button>
  )
}
