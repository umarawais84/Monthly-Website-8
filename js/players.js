// js/players.js

// Each object now has a "detail" string (e.g. fun fact or a stat).
// photo_1 is the “headshot,” photo_2 is an alternate image if you ever want it.

const players = [
  {
    firstName: "Precious",
    lastName: "Achiuwa",
    position: "PF",
    age: 25,
    photo_1: "imgs/achiuwa.webp",
    photo_2: "imgs/achiuwa-l.jpg",
    detail: "Career High: 24 points vs. Lakers (2023). Known for his high‐energy rebounding."
  },
  {
    firstName: "OG",
    lastName: "Anunoby",
    position: "SF",
    age: 27,
    photo_1: "imgs/anunoby.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Anunoby+Alt",
    detail: "2022–23: Ranked top 5 in the NBA for steals per game (1.6). Elite perimeter defender."
  },
  {
    firstName: "MarJon",
    lastName: "Beauchamp",
    position: "SF",
    age: 24,
    photo_1: "imgs/MarJon.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Beauchamp+Alt",
    detail: "2023–24: Won G League Defensive Player of the Year. Outstanding shot‐blocking instincts."
  },
  {
    firstName: "Mikal",
    lastName: "Bridges",
    position: "SF",
    age: 28,
    photo_1: "imgs/Mikal.avif",
    photo_2: "https://via.placeholder.com/200x300?text=Bridges+Alt",
    detail: "2022–23: NBA All‐Defensive Second Team. Career 3-point %: 38.9."
  },
  {
    firstName: "Jalen",
    lastName: "Brunson",
    position: "PG",
    age: 28,
    photo_1: "imgs/jalen.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Brunson+Alt",
    detail: "Averaged 27.3 PPG in 2022–23. Career‐high 41 points vs. Clippers (2023 playoffs)."
  },
  {
    firstName: "Pacome",
    lastName: "Dadiet",
    position: "SF",
    age: 19,
    photo_1: "imgs/dadiet.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Dadiet+Alt",
    detail: "Rookie out of Orange Lyon. Known for his 7’1″ wingspan and elite shot-blocking."
  },
  {
    firstName: "Josh",
    lastName: "Hart",
    position: "SG",
    age: 30,
    photo_1: "imgs/josh.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Hart+Alt",
    detail: "2019–20: NBA All-Rookie Second Team. Career Rebounding: 7.9 RPG (2022–23). Tenacious hustle."
  },
  {
    firstName: "Ariel",
    lastName: "Hukporti",
    position: "C",
    age: 23,
    photo_1: "imgs/ariel.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Hukporti+Alt",
    detail: "2023 European U20 MVP. Known for a 7’1″ frame and 8’5″ standing reach."
  },
  {
    firstName: "Tyler",
    lastName: "Kolek",
    position: "PG",
    age: 24,
    photo_1: "imgs/tyler.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Kolek+Alt",
    detail: "2020 NCAA Champion with Wisconsin. Career assists/game at Wisconsin: 5.6."
  },
  {
    firstName: "Miles",
    lastName: "McBride",
    position: "PG",
    age: 24,
    photo_1: "imgs/miles.webp",
    photo_2: "https://via.placeholder.com/200x300?text=McBride+Alt",
    detail: "2022–23: Led NBA rookies in defensive real‐plus/minus. 38 points in G League finals."
  },
  {
    firstName: "Kevin",
    lastName: "McCullar",
    position: "SF",
    age: 24,
    photo_1: "imgs/kevin.webp",
    photo_2: "https://via.placeholder.com/200x300?text=McCullar+Alt",
    detail: "2023–24 G League All-Defensive Team. Known for 7’0″ wingspan and lockdown defense."
  },
  {
    firstName: "Cameron",
    lastName: "Payne",
    position: "PG",
    age: 30,
    photo_1: "imgs/payne.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Payne+Alt",
    detail: "Veteran with 6 years of NBA experience. Career 3-point %: 33.9."
  },
  {
    firstName: "Mitchell",
    lastName: "Robinson",
    position: "C",
    age: 27,
    photo_1: "imgs/mitchell.webp",
    photo_2: "https://via.placeholder.com/200x300?text=Robinson+Alt",
    detail: "2021–22: All-NBA Second Team (50 blocks). Career REB/G: 8.6."
  },
  {
    firstName: "Landry",
    lastName: "Shamet",
    position: "SG",
    age: 28,
    photo_1: "https://via.placeholder.com/200x300?text=Landry+Shamet",
    photo_2: "https://via.placeholder.com/200x300?text=Shamet+Alt",
    detail: "NBA 3-point contest participant (2021). Career 3P %: 39.1."
  },
  {
    firstName: "Karl-Anthony",
    lastName: "Towns",
    position: "C",
    age: 29,
    photo_1: "https://via.placeholder.com/200x300?text=Karl-Anthony+Towns",
    photo_2: "https://via.placeholder.com/200x300?text=Towns+Alt",
    detail: "2021 MVP. Career 30.7 PPG in Feb 2022. Classic stretch‐five skillset."
  },
  {
    firstName: "P.J.",
    lastName: "Tucker",
    position: "PF",
    age: 40,
    photo_1: "https://via.placeholder.com/200x300?text=P.J.+Tucker",
    photo_2: "https://via.placeholder.com/200x300?text=Tucker+Alt",
    detail: "Known for offensive rebounds: 2.3 ORPG career. Defensive stopper at age 39."
  },
  {
    firstName: "Anton",
    lastName: "Watson",
    position: "PF",
    age: 24,
    photo_1: "https://via.placeholder.com/200x300?text=Anton+Watson",
    photo_2: "https://via.placeholder.com/200x300?text=Watson+Alt",
    detail: "Stellar college shot blocker at Gonzaga: 2.0 BPG (junior year). Sweeping PNR defender."
  },
  {
    firstName: "Delon",
    lastName: "Wright",
    position: "PG",
    age: 33,
    photo_1: "https://via.placeholder.com/200x300?text=Delon+Wright",
    photo_2: "https://via.placeholder.com/200x300?text=Wright+Alt",
    detail: "2019 Champion with Raptors. Career assist/TO ratio: 2.5 (2022–23)."
  },
];
