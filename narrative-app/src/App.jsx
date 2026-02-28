import { AnimatePresence } from 'framer-motion'
import { useGame } from './context/GameContext'
import { STORY_NODES } from './data/story'
import Grain from './components/Grain'
import ProgressBar from './components/ProgressBar'
import { AudioToggle, ResetButton } from './components/HUD'
import Landing from './components/Landing'
import StoryNode from './components/StoryNode'
import EndingScreen from './components/EndingScreen'

export default function App() {
  const { currentNode, started, ended, reset } = useGame()
  const node = STORY_NODES[currentNode]

  return (
    <>
      <Grain />
      <AudioToggle />

      {started && !ended && (
        <>
          <ResetButton onClick={reset} />
          <ProgressBar index={currentNode} total={STORY_NODES.length} />
        </>
      )}

      <AnimatePresence mode="wait">
        {!started ? (
          <Landing key="landing" />
        ) : ended ? (
          <EndingScreen key="ending" />
        ) : (
          <StoryNode key={`node-${currentNode}`} node={node} />
        )}
      </AnimatePresence>
    </>
  )
}
