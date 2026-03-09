// ══════════════════════════════════════════════════════
//  similaires.js — MLG XGame
//  Injecte automatiquement les jeux similaires + boutons
//  affiliation sur chaque page de jeu
// ══════════════════════════════════════════════════════

const CATALOGUE = {
  "fifa-mobile":             { nom:"FIFA Mobile",              cat:"Sport",       img:"../images/android/fc mobile.jpg" },
  "pes-2023":                { nom:"PES 2023",                 cat:"Sport",       img:"../images/android/pes 2023.jpg" },
  "nba-live-mobile":         { nom:"NBA Live Mobile",          cat:"Sport",       img:"../images/android/nba-live.jpg" },
  "golf-clash":              { nom:"Golf Clash",               cat:"Sport",       img:"../images/android/golf-clash.jpg" },
  "8-ball-pool":             { nom:"8 Ball Pool",              cat:"Sport",       img:"../images/android/8-ball-pool.jpg" },
  "real-cricket-20":         { nom:"Real Cricket 20",          cat:"Sport",       img:"../images/android/real-cricket.jpg" },
  "dream-league-soccer":     { nom:"Dream League Soccer",      cat:"Sport",       img:"../images/android/dream-league-soccer.jpg" },
  "archery-king":            { nom:"Archery King",             cat:"Sport",       img:"../images/android/archery-king.jpg" },
  "tennis-clash":            { nom:"Tennis Clash",             cat:"Sport",       img:"../images/android/tennis-clash.jpg" },
  "motorsport-manager":      { nom:"Motorsport Manager",       cat:"Sport",       img:"../images/android/motorsport-manager.jpg" },

  "minecraft":               { nom:"Minecraft",                cat:"Aventure",    img:"../images/android/minecraft.jpg" },
  "terraria":                { nom:"Terraria",                 cat:"Aventure",    img:"../images/android/terraria.jpg" },
  "genshin-impact":          { nom:"Genshin Impact",           cat:"Aventure",    img:"../images/android/genshin.jpg" },
  "stardew-valley":          { nom:"Stardew Valley",           cat:"Aventure",    img:"../images/android/stardew.jpg" },
  "grimvalor":               { nom:"Grimvalor",                cat:"Aventure",    img:"../images/android/grimvalor.jpg" },
  "oddmar":                  { nom:"Oddmar",                   cat:"Aventure",    img:"../images/android/oddmar.jpg" },
  "oceanhorn-2":             { nom:"Oceanhorn 2",              cat:"Aventure",    img:"../images/android/oceanhorn2.jpg" },
  "portal-knights":          { nom:"Portal Knights",           cat:"Aventure",    img:"../images/android/portalknights.jpg" },
  "monster-hunter-stories":  { nom:"Monster Hunter Stories",   cat:"Aventure",    img:"../images/android/monster-hunter.jpg" },
  "oddworld-munchs-oddysee": { nom:"Oddworld",                 cat:"Aventure",    img:"../images/android/oddworld.jpg" },

  "clash-of-clans":          { nom:"Clash of Clans",           cat:"Stratégie",   img:"../images/android/clash-of-clans.jpg" },
  "clash-royale":            { nom:"Clash Royale",             cat:"Stratégie",   img:"../images/android/clash-royale.jpg" },
  "age-of-civilizations":    { nom:"Age of Civilizations",     cat:"Stratégie",   img:"../images/android/age-of-civilizations.jpg" },
  "plants-vs-zombies-2":     { nom:"Plants vs Zombies 2",      cat:"Stratégie",   img:"../images/android/plants-vs-zombies2.jpg" },
  "rise-of-kingdoms":        { nom:"Rise of Kingdoms",         cat:"Stratégie",   img:"../images/android/rise-of-kingdoms.jpg" },
  "civilization-vi":         { nom:"Civilization VI",          cat:"Stratégie",   img:"../images/android/civilization6.jpg" },
  "bloons-td-6":             { nom:"Bloons TD 6",              cat:"Stratégie",   img:"../images/android/bloons-td6.jpg" },
  "chesscom":                { nom:"Chess.com",                cat:"Stratégie",   img:"../images/android/chesscom.jpg" },
  "simcity-buildit":         { nom:"SimCity BuildIt",          cat:"Stratégie",   img:"../images/android/simcity.jpg" },
  "plague-inc":              { nom:"Plague Inc",               cat:"Stratégie",   img:"../images/android/plague-inc.jpg" },

  "brain-out":               { nom:"Brain Out",                cat:"Réflexion",   img:"../images/android/brain-out.jpg" },
  "monument-valley":         { nom:"Monument Valley",          cat:"Réflexion",   img:"../images/android/monument-valley.jpg" },
  "the-room":                { nom:"The Room",                 cat:"Réflexion",   img:"../images/android/the-room.jpg" },
  "cut-the-rope":            { nom:"Cut the Rope",             cat:"Réflexion",   img:"../images/android/cut-the-rope.jpg" },
  "flow-free":               { nom:"Flow Free",                cat:"Réflexion",   img:"../images/android/flow-free.jpg" },
  "sudokucom":               { nom:"Sudoku.com",               cat:"Réflexion",   img:"../images/android/sudoku.jpg" },
  "2048":                    { nom:"2048",                     cat:"Réflexion",   img:"../images/android/2048.jpg" },
  "candy-crush-saga":        { nom:"Candy Crush Saga",         cat:"Réflexion",   img:"../images/android/candy-crush.jpg" },
  "brain-test":              { nom:"Brain Test",               cat:"Réflexion",   img:"../images/android/brain-test.jpg" },
  "lara-croft-go":           { nom:"Lara Croft GO",            cat:"Réflexion",   img:"../images/android/lara-croft-go.jpg" },

  "hill-climb-racing-2":     { nom:"Hill Climb Racing 2",      cat:"Course",      img:"../images/android/hill-climb.jpg" },
  "mario-kart-tour":         { nom:"Mario Kart Tour",          cat:"Course",      img:"../images/android/mario-kart.jpg" },
  "beach-buggy-racing-2":    { nom:"Beach Buggy Racing 2",     cat:"Course",      img:"../images/android/beach-buggy.jpg" },
  "traffic-rider":           { nom:"Traffic Rider",            cat:"Course",      img:"../images/android/traffic-rider.jpg" },
  "f1-mobile-racing":        { nom:"F1 Mobile Racing",         cat:"Course",      img:"../images/android/f1-mobile.jpg" },
  "motogp-racing":           { nom:"MotoGP Racing",            cat:"Course",      img:"../images/android/motogp.jpg" },
  "drift-max-pro":           { nom:"Drift Max Pro",            cat:"Course",      img:"../images/android/drift-max.jpg" },
  "real-racing-3":           { nom:"Real Racing 3",            cat:"Course",      img:"../images/android/real-racing-3.jpg" },
  "rocket-league-sideswipe": { nom:"Rocket League Sideswipe",  cat:"Course",      img:"../images/android/rocket-league.jpg" },
  "asphalt-nitro":           { nom:"Asphalt Nitro",            cat:"Course",      img:"../images/android/asphalt-nitro.jpg" },

  "the-sims-mobile":         { nom:"The Sims Mobile",          cat:"Simulation",  img:"../images/android/the-sims.jpg" },
  "farming-simulator-20":    { nom:"Farming Simulator 20",     cat:"Simulation",  img:"../images/android/farming-simulator.jpg" },
  "car-simulator-2":         { nom:"Car Simulator 2",          cat:"Simulation",  img:"../images/android/car-simulator-2.jpg" },
  "bus-simulator-ultimate":  { nom:"Bus Simulator",            cat:"Simulation",  img:"../images/android/bus-simulator.jpg" },
  "goat-simulator":          { nom:"Goat Simulator",           cat:"Simulation",  img:"../images/android/goat-simulator.jpg" },
  "pocket-city":             { nom:"Pocket City",              cat:"Simulation",  img:"../images/android/pocket-city.jpg" },
  "airport-city":            { nom:"Airport City",             cat:"Simulation",  img:"../images/android/airport-city.jpg" },
  "rollercoaster-tycoon-touch":{ nom:"RollerCoaster Tycoon",   cat:"Simulation",  img:"../images/android/rollercoaster-tycoon.jpg" },

  "cooking-fever":           { nom:"Cooking Fever",            cat:"Gourmand",    img:"../images/android/cooking-fever.jpg" },
  "food-street":             { nom:"Food Street",              cat:"Gourmand",    img:"../images/android/food-street.jpg" },
  "restaurant-story-2":      { nom:"Restaurant Story 2",       cat:"Gourmand",    img:"../images/android/restaurant-story-2.jpg" },
  "toca-kitchen-2":          { nom:"Toca Kitchen 2",           cat:"Gourmand",    img:"../images/android/toca-kitchen-2.jpg" },
  "my-cafe":                 { nom:"My Cafe",                  cat:"Gourmand",    img:"../images/android/my-cafe.jpg" },
  "burger-shop-2":           { nom:"Burger Shop 2",            cat:"Gourmand",    img:"../images/android/burger-shop-2.jpg" },
  "chef-wars":               { nom:"Chef Wars",                cat:"Gourmand",    img:"../images/android/chef-wars.jpg" },
  "pizza-maker":             { nom:"Pizza Maker",              cat:"Gourmand",    img:"../images/android/pizza-maker.jpg" },
  "cooking-mama":            { nom:"Cooking Mama",             cat:"Gourmand",    img:"../images/android/cooking-mama.jpg" },
  "diner-dash-adventures":   { nom:"Diner DASH Adventures",    cat:"Gourmand",    img:"../images/android/diner-dash.jpg" },

  "among-us":                { nom:"Among Us",                 cat:"Multijoueur", img:"../images/android/among-us.jpg" },
  "pubg-mobile":             { nom:"PUBG Mobile",              cat:"Multijoueur", img:"../images/android/pubg-mobile.jpg" },
  "free-fire":               { nom:"Free Fire",                cat:"Multijoueur", img:"../images/android/free-fire.jpg" },
  "brawl-stars":             { nom:"Brawl Stars",              cat:"Multijoueur", img:"../images/android/brawl-stars.jpg" },
  "mobile-legends":          { nom:"Mobile Legends",           cat:"Multijoueur", img:"../images/android/mobile-legends.jpg" },
  "fortnite":                { nom:"Fortnite",                 cat:"Multijoueur", img:"../images/android/fortnite.jpg" },
  "roblox":                  { nom:"Roblox",                   cat:"Multijoueur", img:"../images/android/roblox.jpg" },

  "covet-fashion":           { nom:"Covet Fashion",            cat:"Mode",        img:"../images/android/covet-fashion.jpg" },
  "fashion-empire":          { nom:"Fashion Empire",           cat:"Mode",        img:"../images/android/fashion-empire.jpg" },
  "love-nikki":              { nom:"Love Nikki",               cat:"Mode",        img:"../images/android/love-nikki.jpg" },
  "stardoll":                { nom:"Stardoll",                 cat:"Mode",        img:"../images/android/stardoll.jpg" },
  "kim-kardashian-hollywood":{ nom:"Kim Kardashian",           cat:"Mode",        img:"../images/android/kim-k.jpg" },
  "dress-up-diary":          { nom:"Dress Up Diary",           cat:"Mode",        img:"../images/android/dress-up-diary.jpg" },
  "style-me-girl":           { nom:"Style Me Girl",            cat:"Mode",        img:"../images/android/style-me-girl.jpg" },
  "fashion-fantasy":         { nom:"Fashion Fantasy",          cat:"Mode",        img:"../images/android/fashion-fantasy.jpg" },
  "fashion-diva":            { nom:"Fashion Diva",             cat:"Mode",        img:"../images/android/fashion-diva.jpg" },
  "super-stylist":           { nom:"Super Stylist",            cat:"Mode",        img:"../images/android/super-stylist.jpg" },

  "subway-surfers":          { nom:"Subway Surfers",           cat:"Casual",      img:"../images/android/subway-surfers.jpg" },
  "temple-run-2":            { nom:"Temple Run 2",             cat:"Casual",      img:"../images/android/temple-run-2.jpg" },
  "angry-birds-2":           { nom:"Angry Birds 2",            cat:"Casual",      img:"../images/android/angry-birds-2.jpg" },
  "crossy-road":             { nom:"Crossy Road",              cat:"Casual",      img:"../images/android/crossy-road.jpg" },
  "pou":                     { nom:"Pou",                      cat:"Casual",      img:"../images/android/pou.jpg" },
  "my-talking-tom":          { nom:"My Talking Tom",           cat:"Casual",      img:"../images/android/my-talking-tom.jpg" },
  "hill-climb-racing":       { nom:"Hill Climb Racing",        cat:"Casual",      img:"../images/android/hill-climb.jpg" },
  "fruit-ninja":             { nom:"Fruit Ninja",              cat:"Casual",      img:"../images/android/fruit-ninja.jpg" },
  "jetpack-joyride":         { nom:"Jetpack Joyride",          cat:"Casual",      img:"../images/android/jetpack-joyride.jpg" },
};

// ── CSS ──────────────────────────────────────────────
const CSS = `
<style id="similaires-style">
.similaires-section{max-width:960px;margin:0 auto;padding:0 16px 32px;}
.sim-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:10px;}
.sim-title::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,#9900ff,transparent);}
.sim-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
.sim-card{display:flex;flex-direction:column;background:linear-gradient(145deg,#0f0820,#0a0a1a);border:1px solid #9900ff33;border-radius:14px;overflow:hidden;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;-webkit-tap-highlight-color:transparent;}
.sim-card:hover{transform:translateY(-3px);box-shadow:0 6px 20px #9900ff44;border-color:#9900ff;}
.sim-img{width:100%;aspect-ratio:1/1;overflow:hidden;background:linear-gradient(135deg,#1a0a2e,#0a0a1a);display:flex;align-items:center;justify-content:center;}
.sim-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.3s;}
.sim-card:hover .sim-img img{transform:scale(1.08);}
.sim-name{font-family:'Orbitron',sans-serif;font-size:9px;color:#cc55ff;padding:8px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.affil-section{max-width:960px;margin:0 auto;padding:0 16px 40px;}
.affil-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;}
.affil-sub{font-size:13px;color:#666;margin-bottom:14px;}
.affil-btns{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.affil-btn{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:14px;text-decoration:none;border:1px solid;transition:transform 0.2s,box-shadow 0.2s;-webkit-tap-highlight-color:transparent;}
.affil-btn:hover{transform:translateY(-3px);}
.affil-pc{background:#9900ff11;border-color:#9900ff44;}
.affil-pc:hover{box-shadow:0 8px 24px #9900ff44;border-color:#9900ff;}
.affil-acc{background:#00f0ff11;border-color:#00f0ff44;}
.affil-acc:hover{box-shadow:0 8px 24px #00f0ff44;border-color:#00f0ff;}
.affil-ico{font-size:28px;flex-shrink:0;}
.affil-btn-title{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:700;margin-bottom:3px;}
.affil-pc .affil-btn-title{color:#cc55ff;}
.affil-acc .affil-btn-title{color:#00f0ff;}
.affil-btn-sub{font-size:11px;color:#888;}
@media(max-width:480px){.sim-grid{grid-template-columns:repeat(2,1fr);}.affil-btns{grid-template-columns:1fr;}}
</style>`;

// ── LOGIQUE PRINCIPALE ───────────────────────────────
(function() {
  // 1. Trouver le slug de la page courante
  const slug = location.pathname
    .split('/').pop()
    .replace('.html', '');

  const jeu = CATALOGUE[slug];
  if (!jeu) return; // page inconnue, on ne fait rien

  // 2. Trouver 4 jeux de la même catégorie
  const similaires = Object.entries(CATALOGUE)
    .filter(([s, j]) => j.cat === jeu.cat && s !== slug)
    .slice(0, 4);

  if (similaires.length === 0) return;

  // 3. Injecter le CSS une seule fois
  if (!document.getElementById('similaires-style')) {
    document.head.insertAdjacentHTML('beforeend', CSS);
  }

  // 4. Construire les cartes
  const cards = similaires.map(([s, j]) => `
    <a class="sim-card" href="${s}.html">
      <div class="sim-img">
        <img src="${j.img}" alt="${j.nom}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <div class="sim-name">${j.nom}</div>
    </a>`).join('');

  // 5. Construire le HTML complet
  const html = `
  <section class="similaires-section">
    <div class="sim-title"><span>🎮 Jeux similaires</span></div>
    <div class="sim-grid">${cards}</div>
  </section>

  <section class="affil-section">
    <div class="affil-title">🛒 Notre sélection gaming</div>
    <p class="affil-sub">Retrouve les meilleurs setups et accessoires pour jouer dans les meilleures conditions.</p>
    <div class="affil-btns">
      <a href="../pc-consoles.html" class="affil-btn affil-pc">
        <span class="affil-ico">🖥️</span>
        <div>
          <div class="affil-btn-title">PC Gaming &amp; Consoles</div>
          <div class="affil-btn-sub">Meilleurs prix sélectionnés</div>
        </div>
      </a>
      <a href="../accessoires-gaming.html" class="affil-btn affil-acc">
        <span class="affil-ico">🎧</span>
        <div>
          <div class="affil-btn-title">Accessoires Gaming</div>
          <div class="affil-btn-sub">Manettes, casques, chaises...</div>
        </div>
      </a>
    </div>
  </section>`;

  // 6. Injecter juste avant le footer
  const footer = document.querySelector('footer');
  if (footer) {
    footer.insertAdjacentHTML('beforebegin', html);
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
})();
