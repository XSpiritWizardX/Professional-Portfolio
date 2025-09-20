import { useState, useEffect } from "react";
import "./CatClickerGame.css";

const cats = [
  `
 /\\_/\\
( o.o )
 > ^ <
`,
  `
  |\\---/|
  | o_o |
   \\_^_/
`,
  `
   /\\_/\\
  ( -.- )
   > ^ <
  [Meow!]
`,
  `
   /\\_/\\
  ( o_o )
  > = <
  ~Purr~
`,
  `
   /\\___/\\
  ( o   o )
  (  =^=  )
  (        )
   "------"
`,
  `
  |\\     /|
  | o   o |
  |  =^=  |
   \\  -  /
    | | |
`,
  `
   /\\___/\\
  ( o   o )
  (  =^=  )
  (")___(")
   ~MEOW~
`,
  `
  /\\_/\\
 ( ^.^ )
  > ~ <
`,
  `
   |\\_/|
   |o o|
   > ^ <
`,
  `
   /\\___/\\
  ( • • )
  (  =^= )
  (")___(")
`
];


// Permanent upgrades shop
const upgrades = [
  { name: "Catnip Auto-Clicker", cost: 20, clicksPerSecond: 1 },
  { name: "Laser Pointer", cost: 100, clicksPerSecond: 5 },
  { name: "Robot Cat Butler", cost: 500, clicksPerSecond: 20 }
];

export default function CatClickerGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [ownedUpgrades, setOwnedUpgrades] = useState([]);
  const [autoClick, setAutoClick] = useState(0);

  const clickSound = new Audio("/sounds/click.mp3");
  const levelUpSound = new Audio("/sounds/levelup.mp3");

  // Autoplay-safe continuous background music
  useEffect(() => {
    const tracks = [
      "/sounds/bubble-p-1.mp3",
      "/sounds/background-music.mp3",
      "/sounds/boss-t-2.mp3"
    ];
    let currentTrackIndex = 0;
    const bgMusic = new Audio(tracks[currentTrackIndex]);
    bgMusic.volume = 0.2;

    const playNextTrack = () => {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
      bgMusic.src = tracks[currentTrackIndex];
      bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
    };

    bgMusic.addEventListener("ended", playNextTrack);

    const startMusic = () => {
      bgMusic.loop = false; // handle looping manually
      bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      bgMusic.pause();
      bgMusic.removeEventListener("ended", playNextTrack);
      window.removeEventListener("click", startMusic);
    };
  }, []);

  // Auto click effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClick > 0) setScore(prev => prev + autoClick);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClick]);

  // Floating cat paw cursor
  useEffect(() => {
    const paw = document.createElement("div");
    paw.className = "cat-paw";
    document.body.appendChild(paw);

    const movePaw = (e) => {
      paw.style.top = `${e.clientY}px`;
      paw.style.left = `${e.clientX}px`;
    };
    window.addEventListener("mousemove", movePaw);

    return () => {
      window.removeEventListener("mousemove", movePaw);
      document.body.removeChild(paw);
    };
  }, []);

  // Raining cats effect every 10 clicks
  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      const rainContainer = document.createElement("div");
      rainContainer.className = "cat-rain-container";
      document.body.appendChild(rainContainer);

      for (let i = 0; i < 10; i++) {
        const cat = document.createElement("pre");
        cat.className = "cat-rain";
        cat.innerText = cats[Math.floor(Math.random() * cats.length)];
        cat.style.left = `${Math.random() * 100}vw`;
        cat.style.animationDuration = `${2 + Math.random() * 3}s`;
        rainContainer.appendChild(cat);
      }

      setTimeout(() => {
        document.body.removeChild(rainContainer);
      }, 4000);
    }
  }, [score]);

  const handleClick = () => {
    clickSound.play();
    const newScore = score + 1;
    setScore(newScore);

    // Level up every 10 points (loop cats)
    if (newScore % 10 === 0) {
      setLevel(prev => (prev + 1) % cats.length);
      levelUpSound.play();
    }
  };

  const buyUpgrade = (upgrade) => {
    if (score >= upgrade.cost && !ownedUpgrades.includes(upgrade.name)) {
      setScore(prev => prev - upgrade.cost);
      setOwnedUpgrades(prev => [...prev, upgrade.name]);
      setAutoClick(prev => prev + upgrade.clicksPerSecond);
    }
  };

  return (
    <div className="cat-clicker-container">
      <h1>🐱 ASCII Cat Clicker 🐱</h1>

      <pre className="cat-display" onClick={handleClick}>
        {cats[level]}
      </pre>

      <p className="score">Score: {score}</p>
      <p className="hint">Click the cat! Level up every 10 clicks!</p>

      <div className="upgrades">
        <h2>Shop - Permanent Upgrades</h2>
        {upgrades.map((upg, i) => (
          <button
            key={i}
            disabled={score < upg.cost || ownedUpgrades.includes(upg.name)}
            onClick={() => buyUpgrade(upg)}
          >
            {upg.name} ({upg.cost} points) - +{upg.clicksPerSecond}/s
            {ownedUpgrades.includes(upg.name) ? " ✅ Owned" : ""}
          </button>
        ))}
      </div>

      <div className="owned-upgrades">
        <h3>Owned Upgrades:</h3>
        <ul>
          {ownedUpgrades.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
