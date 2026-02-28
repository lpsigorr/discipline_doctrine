# From Ordered Creation to Fragmented Modernity

A choice-driven interactive narrative across 15 pivotal moments in Western history.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open http://localhost:5173 in your browser.

---

## Folder Structure

```
narrative-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── audio/              ← (optional) place .mp3 files here
└── src/
    ├── main.jsx            ← entry point
    ├── App.jsx             ← root component, routing logic
    ├── context/
    │   └── GameContext.jsx ← all game state, localStorage persistence
    ├── data/
    │   ├── story.js        ← all 15 nodes, stat keys, colors
    │   └── endings.js      ← 7 endings + trigger logic
    ├── hooks/
    │   └── useAudio.js     ← Web Audio API tones
    ├── styles/
    │   └── global.css      ← CSS variables, resets, scrollbar
    └── components/
        ├── Grain.jsx / .module.css
        ├── ProgressBar.jsx / .module.css
        ├── HUD.jsx / .module.css        ← AudioToggle + ResetButton
        ├── StatBar.jsx / .module.css
        ├── ResultCard.jsx / .module.css ← hidden card for PNG export
        ├── Landing.jsx / .module.css
        ├── StoryNode.jsx / .module.css
        └── EndingScreen.jsx / .module.css
```

---

## Audio

The app uses the **Web Audio API** to generate tones — no audio files are required.

If you want to add real ambient audio files, place them in `/public/audio/`:
- `ambient.mp3` — looping dark ambient pad (soft, very quiet)
- `click.mp3` — short UI tick sound
- `impact.mp3` — deeper thud/tone for Continue button

Then update `src/hooks/useAudio.js` to load them via `new Audio('/audio/ambient.mp3')`.

---

## Features

- **15 story nodes** spanning Creation → Fragmented Modernity
- **6 world stats**: ORDER, TRUTH, REASON, DISCIPLESHIP, POWER, EMOTION (all start at 50)
- **7 possible endings** with priority-based trigger logic
- **localStorage persistence** — refresh won't lose progress
- **Framer Motion** page transitions, staggered animations, animated stat bars
- **Share result** — downloads a PNG result card via `html-to-image`
- **Sound toggle** — Web Audio tones, respects browser autoplay policy
- **Fully responsive** — mobile-first, uses `100dvh` for Safari compatibility

---

## Customisation

- Edit `src/data/story.js` to change nodes, choices, or stat deltas
- Edit `src/data/endings.js` to add endings or adjust trigger thresholds
- Edit `src/styles/global.css` to change the colour palette via CSS variables
