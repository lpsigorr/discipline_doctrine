export const ENDINGS = [
  {
    id: 1,
    title: 'Return to Disciplined Reality',
    trigger: (s) => s.TRUTH >= 70 && s.DISCIPLESHIP >= 70 && s.EMOTION <= 60,
    summary:
      'You traced the long arc of history and found the thread that holds. Truth is not negotiated — it demands alignment. Discipleship is not optional — it is the shape of a faithful life. In a world that has crowned feeling and power, you choose the harder path: submission to what is real.',
    cta: 'The ordered life awaits. Begin again.',
    warning: null,
  },
  {
    id: 2,
    title: 'Institutional Fortress',
    trigger: (s) => s.POWER >= 75 && s.ORDER >= 70,
    summary:
      'You built the walls high and the hierarchy deep. The institution stands — but at what cost? Power and order, when decoupled from truth, become a machine that runs long after its soul has departed. History has seen this empire before.',
    cta: 'The fortress endures. But who lives inside?',
    warning: 'Warning: strength without accountability becomes the thing it was built to resist.',
  },
  {
    id: 3,
    title: 'Romantic Drift',
    trigger: (s) => s.EMOTION >= 75 && s.ORDER <= 50,
    summary:
      'You followed the feeling, and the feeling was beautiful. But beauty without form is a flood. The Romantics knew this — and so did the revolutionaries who came after them. The heart, crowned without check, will eventually demand more than the world can give.',
    cta: 'Feel everything. Hold nothing.',
    warning: 'Warning: the self, made sovereign, will eventually devour itself.',
  },
  {
    id: 4,
    title: 'Rational Machine',
    trigger: (s) => s.REASON >= 75 && s.DISCIPLESHIP <= 50,
    summary:
      'You optimized everything — and lost the question of why. Reason, unchained from virtue and discipleship, becomes a tool of whoever holds it. The century that trusted pure reason most produced its most systematic horrors.',
    cta: 'Calculate onward. The universe awaits your audit.',
    warning: 'Warning: the machine that can do anything will eventually do what it should not.',
  },
  {
    id: 5,
    title: 'Balanced Steward',
    trigger: (s) =>
      s.ORDER >= 55 && s.ORDER <= 70 &&
      s.TRUTH >= 55 && s.TRUTH <= 70 &&
      s.REASON >= 55 && s.REASON <= 70 &&
      s.POWER < 70 && s.EMOTION < 70,
    summary:
      'You held the tensions without letting any one force dominate. This is rarer than it sounds. The steward knows: order without mercy is cruelty, truth without love is brutality, reason without humility is arrogance. You chose the difficult middle path.',
    cta: 'Tend the garden. It does not tend itself.',
    warning: null,
  },
  {
    id: 6,
    title: 'Fragmented Believer',
    trigger: (s) => s.TRUTH >= 70 && (s.ORDER < 55 || s.DISCIPLESHIP < 55),
    summary:
      'You see the truth clearly — but the life does not yet match the vision. This is the most common condition of the modern believer: orthodoxy without orthopraxy, confession without formation. The gap between what you know and how you live is where history is made.',
    cta: 'The knowing is not enough. Now comes the doing.',
    warning: null,
  },
  {
    id: 7,
    title: 'Cynical Modern',
    trigger: (s) => s.POWER >= 70 && s.EMOTION >= 70 && s.TRUTH <= 45,
    summary:
      'Power and feeling, with no transcendent reference point. This is the shape of late modernity: loud, visceral, influential, empty. You have read the arc of history and arrived at its most predictable destination. The question is whether you know it.',
    cta: 'The game continues. The rules keep changing.',
    warning:
      'Warning: a world ruled by power and emotion, with truth absent, has no peaceable resolution.',
  },
]

export function computeEnding(stats) {
  for (const ending of ENDINGS) {
    if (ending.trigger(stats)) return ending
  }
  // Default fallback — return Balanced Steward
  return ENDINGS[4]
}
