# Rock, Paper, Scissors Battle Arena

An engaging, immersive web arcade implementation of the classic **Rock, Paper, Scissors** game built using vanilla Web technologies (HTML5, CSS3, ES6 JavaScript). It features a dark-themed gaming aesthetic, responsive layouts, a "VS" battle arena, hand-shake animations, scoreboard indicators, and win streak tracking.

---

## 🎮 Game Interface Features

- **VS Battle Arena**: A visual representation of the showdown. Instead of simple text-based results, the game places both the Player and the CPU onto adjacent battle cards.
- **Weapon Shaking Animation**: Initiating a move triggers a synchronized keyframe vibration simulation that replicates the physical fist-shaking actions before revealing the cards.
- **Scoreboard Stats Bar**:
  - **Player & CPU Score Counters**: Real-time counter of total wins.
  - **Current Streak Counter**: Keeps track of consecutive wins. Resetting or receiving a defeat will drop the streak back to 0.
  - **Win Rate Percentage**: Tracks performance ratio (Wins / Total Rounds) dynamically.
- **Reset Scores Button**: Easily wipe the scoreboard counters clean to start fresh.
- **Interactive Outcomes**: Game result notifications styled dynamically with color-themed overlays (Green for Victory, Red for Defeat, Yellow for Draw).
- **Responsive Layout**: Designed to adapt perfectly between mobile, tablet, and desktop screens.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5 markup.
- **Styles**: Custom CSS3 variables, CSS Grid, Flexbox, transitions, keyframe animation loops (`@keyframes shakeLeft`, `@keyframes shakeRight`), box-shadow glow effects, and glassmorphic card stylings.
- **Logic**: ES6 JavaScript DOM queries, state trackers, timing queues (`setTimeout`), and event listeners.
- **Typography**: Google Fonts (Outfit).

---

## 📁 Project Contents

```
2.Rock,Paper,Scissors/
├── images/
│   ├── rock.png       # Rock weapon asset
│   ├── paper.png      # Paper weapon asset
│   └── scissors.png   # Scissors weapon asset
├── index.html         # Main dashboard markup
├── style.css          # Arcade UI stylesheet
├── app.js             # Battle & state logic script
└── README.md          # Project documentation
```

---

## 🚀 How to Play

### 1. Open in Browser
Simply open the `index.html` file directly in any modern web browser:
- Double-click `index.html` in your file explorer.
- Or host it using a local developer web server (like Live Server in VS Code).

### 2. Gameplay Rules
- Select your choice from the weapon grid at the bottom (Rock, Paper, or Scissors).
- The battle cards in the central arena will shake to simulate the fist motion.
- After the animation finishes, the CPU's choice will be revealed, scores updated, and the battle outcome banner highlighted:
  - **Rock** beats **Scissors**
  - **Paper** beats **Rock**
  - **Scissors** beats **Paper**
  - Match choices lead to a **Draw**
