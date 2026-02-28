export const STORY_NODES = [
  {
    id: 1,
    act: 'Act I',
    title: 'Creation',
    subtitle: 'Reality has structure',
    scenario:
      'Before history begins, a question underlies everything: what kind of world is this? The answer shapes every institution, every rebellion, every collapse that follows.',
    question: 'What do you believe is most foundational to reality?',
    choices: [
      {
        id: 'A',
        text: 'Order and purpose exist — we are accountable within it.',
        deltas: { ORDER: 10, TRUTH: 10, DISCIPLESHIP: 4 },
        consequence: 'You begin with structure: actions matter, outcomes follow.',
      },
      {
        id: 'B',
        text: 'Reality is negotiated — meaning is flexible and contested.',
        deltas: { EMOTION: 8, POWER: 4, TRUTH: -6 },
        consequence: 'Meaning loosens; power and feeling start shaping the world.',
      },
      {
        id: 'C',
        text: 'Reality is mechanical — meaning is optional, imposed later.',
        deltas: { REASON: 10, DISCIPLESHIP: -8, TRUTH: -2 },
        consequence: 'You keep logic, but purpose starts fading.',
      },
    ],
  },
  {
    id: 2,
    act: 'Act II',
    title: 'The Fall',
    subtitle: 'Tension enters',
    scenario:
      'Disorder fractures what was whole. Every civilization since has wrestled with the same wound: something in the human condition resists the good it knows.',
    question: 'After disorder enters humanity, what is the core problem?',
    choices: [
      {
        id: 'A',
        text: 'A divided will — knowing good but failing to do it.',
        deltas: { REASON: 8, DISCIPLESHIP: 8, ORDER: 4 },
        consequence: 'The inner war begins. Discipline becomes the only answer.',
      },
      {
        id: 'B',
        text: 'Oppressive systems — circumstance shapes us more than will.',
        deltas: { POWER: 10, TRUTH: -4, DISCIPLESHIP: -2 },
        consequence: 'The blame shifts outward; systems become the battlefield.',
      },
      {
        id: 'C',
        text: 'Repression — self-expression is healing, restriction harms.',
        deltas: { EMOTION: 10, ORDER: -8, REASON: -2 },
        consequence: 'Liberation becomes the sacred word. Order is the enemy.',
      },
    ],
  },
  {
    id: 3,
    act: 'Act III',
    title: 'Aristotle',
    subtitle: 'Virtue is habit',
    scenario:
      'Greece gives the world a framework: the good life is not found but built, through repeated right action until it becomes character.',
    question: 'What forms a good human being?',
    choices: [
      {
        id: 'A',
        text: 'Disciplined habits aligned with reason and natural ends.',
        deltas: { REASON: 10, ORDER: 6 },
        consequence: 'Character is formed by doing, not wishing.',
      },
      {
        id: 'B',
        text: 'Authentic feelings — being true to one\'s inner self.',
        deltas: { EMOTION: 10, TRUTH: -4 },
        consequence: 'The self becomes its own compass, unchecked.',
      },
      {
        id: 'C',
        text: 'Social approval and recognition of status.',
        deltas: { POWER: 10, TRUTH: -2 },
        consequence: 'Worth is now measured by what others grant.',
      },
    ],
  },
  {
    id: 4,
    act: 'Act IV',
    title: 'The Temple',
    subtitle: 'Place and ritual',
    scenario:
      'The Temple stands as the axis of the ancient world — where heaven and earth meet. But already the prophets are asking: does God want the ritual, or the life behind it?',
    question: 'What matters most: ritual, place, or obedience?',
    choices: [
      {
        id: 'A',
        text: 'Obedience and justice transcend the ritual itself.',
        deltas: { TRUTH: 8, DISCIPLESHIP: 8 },
        consequence: 'The prophets speak: mercy over sacrifice.',
      },
      {
        id: 'B',
        text: 'Ritual is the center — it maintains holiness and order.',
        deltas: { ORDER: 8, POWER: 6, DISCIPLESHIP: 2 },
        consequence: 'The institution solidifies. Form becomes sacred.',
      },
      {
        id: 'C',
        text: 'Worship is personal and emotional — structure is unnecessary.',
        deltas: { EMOTION: 10, ORDER: -6 },
        consequence: 'Feeling replaces form. The center starts to drift.',
      },
    ],
  },
  {
    id: 5,
    act: 'Act V',
    title: 'The Christ',
    subtitle: 'Fulfillment, not abolition',
    scenario:
      'A figure emerges claiming to fulfill everything that came before — not destroy it, but complete it. The claim is total. The demand is total. The split is total.',
    question: 'When Christ centralizes mediation, what changes?',
    choices: [
      {
        id: 'A',
        text: 'Christ is the boundary — truth has a center, not a vote.',
        deltas: { TRUTH: 10, DISCIPLESHIP: 8, POWER: -4 },
        consequence: 'Authority is grounded in something beyond institutions.',
      },
      {
        id: 'B',
        text: 'Faith becomes a vibe — everyone finds their own path.',
        deltas: { EMOTION: 10, TRUTH: -10, DISCIPLESHIP: -4 },
        consequence: 'Subjective faith multiplies. Anything goes.',
      },
      {
        id: 'C',
        text: 'Religion becomes moral system, not salvation.',
        deltas: { REASON: 8, DISCIPLESHIP: -8, TRUTH: -2 },
        consequence: 'Ethics replaces the sacred. God becomes metaphor.',
      },
    ],
  },
  {
    id: 6,
    act: 'Act VI',
    title: 'The Church',
    subtitle: 'The apostolic movement',
    scenario:
      'A small movement spreads across an empire through proclamation, community, and suffering. It has no army, no tax base, no territory. Yet it survives.',
    question: 'What should the Church primarily be?',
    choices: [
      {
        id: 'A',
        text: 'A disciplined people of action and teaching.',
        deltas: { DISCIPLESHIP: 10, ORDER: 6, TRUTH: 4 },
        consequence: 'Movement over monument. The body learns to walk.',
      },
      {
        id: 'B',
        text: 'A sacred institution that preserves tradition.',
        deltas: { POWER: 10, ORDER: 6, TRUTH: 2 },
        consequence: 'The institution rises. Preservation becomes the goal.',
      },
      {
        id: 'C',
        text: 'A place of belonging and emotional community.',
        deltas: { EMOTION: 8, DISCIPLESHIP: 2 },
        consequence: 'Warmth fills the room. Doctrine begins to soften.',
      },
    ],
  },
  {
    id: 7,
    act: 'Act VII',
    title: 'Power Enters',
    subtitle: 'When influence arrives',
    scenario:
      'The empire that once killed Christians now converts. Suddenly the movement has armies, buildings, political favor. The temptation is enormous.',
    question: 'What do you do with influence?',
    choices: [
      {
        id: 'A',
        text: 'Refuse domination — remain servant-minded.',
        deltas: { DISCIPLESHIP: 8, POWER: -10, TRUTH: 4 },
        consequence: 'You walk away from the seat. Others fill it.',
      },
      {
        id: 'B',
        text: 'Use it to enforce truth and unity.',
        deltas: { POWER: 10, ORDER: 6, TRUTH: 2, EMOTION: -2 },
        consequence: 'Unity is enforced. The sword and the cross align.',
      },
      {
        id: 'C',
        text: 'Adapt to culture — stay relevant.',
        deltas: { EMOTION: 8, TRUTH: -6, ORDER: -4 },
        consequence: 'Relevance is gained. Distinctiveness begins to blur.',
      },
    ],
  },
  {
    id: 8,
    act: 'Act VIII',
    title: 'Aquinas',
    subtitle: 'The great synthesis',
    scenario:
      'A Dominican monk attempts the impossible: to reconcile Athens and Jerusalem, Aristotle and Augustine. The cathedral of ideas rises.',
    question: 'How do faith and reason relate?',
    choices: [
      {
        id: 'A',
        text: 'Grace perfects nature — they ascend together.',
        deltas: { REASON: 8, DISCIPLESHIP: 6, ORDER: 4, TRUTH: 4 },
        consequence: 'The synthesis holds. Both realms illuminate each other.',
      },
      {
        id: 'B',
        text: 'Faith replaces reason — questioning is dangerous.',
        deltas: { POWER: 8, REASON: -8, TRUTH: -2 },
        consequence: 'Certainty calcifies. The question becomes suspect.',
      },
      {
        id: 'C',
        text: 'Reason replaces faith — God is optional.',
        deltas: { REASON: 10, DISCIPLESHIP: -10, TRUTH: -4 },
        consequence: 'Philosophy ascends. The sacred starts its long decline.',
      },
    ],
  },
  {
    id: 9,
    act: 'Act IX',
    title: 'Corruption',
    subtitle: 'Contradiction',
    scenario:
      'The institution that preached poverty accumulates wealth. The body that claimed to mediate heaven sells access to it. The gap between word and deed is now public.',
    question: 'When the institution betrays its principles, what is the response?',
    choices: [
      {
        id: 'A',
        text: 'Reform back to text, truth, and discipleship.',
        deltas: { TRUTH: 10, DISCIPLESHIP: 8, POWER: -4 },
        consequence: 'The hammer falls on the door. Reform begins.',
      },
      {
        id: 'B',
        text: 'Double down on authority — unity above critique.',
        deltas: { POWER: 10, ORDER: 4, TRUTH: -4 },
        consequence: 'The walls thicken. Dissent is suppressed.',
      },
      {
        id: 'C',
        text: 'Reject the sacred entirely — burn it down.',
        deltas: { TRUTH: -8, DISCIPLESHIP: -10, EMOTION: 6, POWER: 4 },
        consequence: 'The bonfire starts. What rises from the ashes is unknown.',
      },
    ],
  },
  {
    id: 10,
    act: 'Act X',
    title: 'Reformation',
    subtitle: 'Correction vs chaos',
    scenario:
      'The reform spreads faster than it can be governed. Every man his own interpreter. Every town its own confession. The unity shatters into a thousand fragments.',
    question: 'What is the greatest danger after reform?',
    choices: [
      {
        id: 'A',
        text: 'Fragmentation without discipline.',
        deltas: { ORDER: 8, REASON: 6, TRUTH: 2 },
        consequence: 'The warning lands. Structure must follow liberation.',
      },
      {
        id: 'B',
        text: 'Unity is more important than truth.',
        deltas: { POWER: 8, TRUTH: -8 },
        consequence: 'Peace is bought at the price of honesty.',
      },
      {
        id: 'C',
        text: 'Personal interpretation is ultimate authority.',
        deltas: { EMOTION: 8, ORDER: -8, TRUTH: -4 },
        consequence: 'The individual becomes pope. Fracture accelerates.',
      },
    ],
  },
  {
    id: 11,
    act: 'Act XI',
    title: 'The Enlightenment',
    subtitle: 'Reason detached',
    scenario:
      'Reason declares independence. It will no longer serve theology. It will measure, systematize, and legislate. God is demoted to hypothesis.',
    question: 'What happens when reason detaches from virtue?',
    choices: [
      {
        id: 'A',
        text: 'It becomes a tool of control, not wisdom.',
        deltas: { TRUTH: 8, REASON: 4, POWER: -2 },
        consequence: 'The warning is clear: cold reason without conscience is tyranny.',
      },
      {
        id: 'B',
        text: 'It frees us from superstition and outdated limits.',
        deltas: { REASON: 10, TRUTH: -6, DISCIPLESHIP: -4 },
        consequence: 'Chains fall. But what was guarding the city also falls.',
      },
      {
        id: 'C',
        text: 'Feeling is what matters — reason is cold.',
        deltas: { EMOTION: 10, REASON: -6 },
        consequence: 'The Romantic backlash begins before the Enlightenment ends.',
      },
    ],
  },
  {
    id: 12,
    act: 'Act XII',
    title: 'Romanticism',
    subtitle: 'Emotion crowned king',
    scenario:
      'The poets revolt. The heart is sovereign. The wild, the natural, the felt — these become sacred. The cathedral of reason is torn down and replaced by a forest.',
    question: 'What is the most dangerous modern lie?',
    choices: [
      {
        id: 'A',
        text: 'That feeling equals truth.',
        deltas: { TRUTH: 10, ORDER: 6, EMOTION: -6 },
        consequence: 'You name the lie. Now comes the harder work of resisting it.',
      },
      {
        id: 'B',
        text: 'That rules are oppression.',
        deltas: { EMOTION: 10, ORDER: -10, TRUTH: -4 },
        consequence: 'Freedom without form. The beautiful becomes destructive.',
      },
      {
        id: 'C',
        text: 'That only outcomes matter — means are flexible.',
        deltas: { POWER: 10, TRUTH: -8, ORDER: -2 },
        consequence: 'Pragmatism reigns. Ends justify means. History accelerates toward catastrophe.',
      },
    ],
  },
  {
    id: 13,
    act: 'Act XIII',
    title: 'Individualism',
    subtitle: 'Hollow freedom',
    scenario:
      'The market promises everything. Invent yourself. Own yourself. Sell yourself. Freedom is total — and strangely empty.',
    question: 'What is freedom without purpose?',
    choices: [
      {
        id: 'A',
        text: 'Isolation and emptiness — freedom needs a telos.',
        deltas: { TRUTH: 6, EMOTION: -2 },
        consequence: 'The void is named. Meaning must be recovered.',
      },
      {
        id: 'B',
        text: 'The highest good — self-definition is sacred.',
        deltas: { EMOTION: 10, TRUTH: -6 },
        consequence: 'The self becomes the ultimate project. And the loneliness deepens.',
      },
      {
        id: 'C',
        text: 'A competitive tool — whoever plays best wins.',
        deltas: { POWER: 10, TRUTH: -4 },
        consequence: 'The game has no referee. Power accumulates at the edges.',
      },
    ],
  },
  {
    id: 14,
    act: 'Act XIV',
    title: 'France',
    subtitle: 'Cathedrals without discipleship',
    scenario:
      'The most Catholic kingdom in Europe erupts in revolution. The Church was everywhere in France — in its buildings, its laws, its art. But not in its people.',
    question: 'When the Church aligns with power, what follows?',
    choices: [
      {
        id: 'A',
        text: 'Backlash — faith is erased instead of debated.',
        deltas: { TRUTH: 8, POWER: -4 },
        consequence: 'The pendulum swings violently. Centuries of alignment cost centuries of credibility.',
      },
      {
        id: 'B',
        text: 'It is necessary — order must be enforced.',
        deltas: { POWER: 10, ORDER: 6, TRUTH: -4 },
        consequence: 'The alliance holds until it doesn\'t. Then everything falls at once.',
      },
      {
        id: 'C',
        text: 'It becomes aesthetic — cathedrals without discipleship.',
        deltas: { EMOTION: 8, DISCIPLESHIP: -8 },
        consequence: 'Beautiful ruins. The form survives the soul.',
      },
    ],
  },
  {
    id: 15,
    act: 'Final',
    title: 'The Crown',
    subtitle: 'What do you crown today?',
    scenario:
      'Every civilization must answer this. Whatever it crowns — that becomes its god. Its architecture, its laws, its art, its education all follow from this one answer.',
    question: 'What do you crown today?',
    choices: [
      {
        id: 'A',
        text: 'Truth that commands action.',
        deltas: { TRUTH: 10, DISCIPLESHIP: 10 },
        consequence: 'The Word becomes flesh again. Truth demands a life, not just a nod.',
      },
      {
        id: 'B',
        text: 'Order that demands obedience.',
        deltas: { ORDER: 10, POWER: 6 },
        consequence: 'Structure rises. But who rules the ruler?',
      },
      {
        id: 'C',
        text: 'Emotion that defines reality.',
        deltas: { EMOTION: 12, TRUTH: -8 },
        consequence: 'You feel, therefore you are. The world bends to the self.',
      },
      {
        id: 'D',
        text: 'Reason that replaces the sacred.',
        deltas: { REASON: 12, DISCIPLESHIP: -10 },
        consequence: 'The last god is unmasked. Now only equations remain.',
      },
    ],
  },
]

export const STAT_KEYS = ['ORDER', 'TRUTH', 'REASON', 'DISCIPLESHIP', 'POWER', 'EMOTION']

export const STAT_COLORS = {
  ORDER: '#7B9EA6',
  TRUTH: '#D4AF7A',
  REASON: '#8BB4A8',
  DISCIPLESHIP: '#C9A882',
  POWER: '#A87B7B',
  EMOTION: '#C4A8B8',
}

export const INITIAL_STATS = {
  ORDER: 50,
  TRUTH: 50,
  REASON: 50,
  DISCIPLESHIP: 50,
  POWER: 50,
  EMOTION: 50,
}
