export const HOTKEYS = [
  { category: "General Commands", keys: [
    { key: "Q", action: "Select all combat units on screen" },
    { key: "Q (Double Tap)", action: "Select all combat units on the entire map" },
    { key: "W", action: "Select all units of the same type on screen" },
    { key: "W (Double Tap)", action: "Select all units of the same type on the map" },
    { key: "E", action: "Select all air units on screen" },
    { key: "S", action: "Stop current action" },
    { key: "A", action: "Attack move (units move and fire at anything in range)" },
    { key: "G", action: "Guard area (units defend a specific location)" },
    { key: "X", action: "Scatter units (crucial against toxins, artillery, and MiGs)" },
    { key: "Ctrl + 0-9", action: "Create control group" },
    { key: "0-9", action: "Select control group" },
    { key: "Alt + Click", action: "Force move (crush infantry with vehicles)" },
    { key: "Spacebar", action: "Jump to last event/notification" },
    { key: "H", action: "Jump to Command Center" },
    { key: "Ctrl + S", action: "Save Game" },
    { key: "Ctrl + L", action: "Load Game" },
    { key: "F1-F12", action: "Custom camera bookmarks (Ctrl + F-key to set)" },
  ]},
  { category: "Unit Abilities", keys: [
    { key: "F", action: "Formation move (moves units at the speed of the slowest unit)" },
    { key: "D", action: "Deploy/Special ability (e.g., Flashbangs, Laser Lock, Tunnels)" },
    { key: "C", action: "Cheer (purely cosmetic, but good for morale!)" },
    { key: "Z", action: "Planning mode (set multiple waypoints)" },
  ]}
];

export const ARMIES = [
  {
    name: "USA",
    color: "blue",
    description: "High-tech, air-dominant, and expensive units. Relies on drones and precision strikes. Best for players who enjoy micro-management.",
    strategies: [
      "Humvee Kiting: Load Humvees with 3 Missile Defenders, 1 Pathfinder, and 1 Ranger. Use 'A' move or manual clicking to stay out of range while firing.",
      "Laser Lock: Use Missile Defenders' Laser Lock (D) to take down heavy tanks or buildings instantly. It bypasses some defenses.",
      "Search and Destroy: Always upgrade your Strategy Center to Search and Destroy for increased range (+20%) and damage.",
      "Supply Lines: USA relies heavily on Chinook helicopters. Protect them with Avengers or Patriots. Use Combat Chinooks for mobile infantry fire.",
      "Point Defense Lasers: Upgrade your Paladin tanks and King Raptors. They can shoot down incoming missiles, making them very durable."
    ],
    proTips: "The Avenger is your best friend against GLA missiles and China's MiG fire. It also paints targets, increasing the fire rate of nearby units."
  },
  {
    name: "China",
    color: "red",
    description: "Brute force, massive tank battalions, and powerful propaganda healing. Excels at overwhelming enemies with numbers.",
    strategies: [
      "Horde Bonus: China tanks get a fire rate bonus when in groups of 5 or more. Always attack in clusters of at least 5.",
      "Propaganda Healing: Use Speaker Towers and Overlord Propaganda Towers to keep your army healthy during combat. It stacks with the Horde bonus.",
      "ECM Tanks: Use ECM tanks to deflect incoming missiles and disable enemy vehicles. They are essential for protecting your Overlords.",
      "MiG Firestorms: Group 4 MiGs together to create a firestorm that deals massive area damage. Great for clearing infantry and light vehicles.",
      "Gattling Tech: China's Gattling tanks and towers are the best anti-infantry and anti-air in the game. Keep them spun up."
    ],
    proTips: "The 'Lotus' unit can capture buildings from a distance. Use her to steal enemy secondary economy like Black Markets or Supply Drops."
  },
  {
    name: "GLA",
    color: "green",
    description: "Stealth, tunnels, and hit-and-run tactics. No electricity required, making them immune to power outages.",
    strategies: [
      "Tunnel Network: Use tunnels to teleport units across the map instantly. A single tunnel can save your base or launch a surprise flank.",
      "Scorpion Rocket: Upgrade Scorpion tanks with rockets immediately. They provide a massive first-strike advantage and can be upgraded with toxins.",
      "Toxin Saturation: Use Anthrax upgrades to make your rebels and tanks lethal against infantry. Anthrax Beta/Gamma is devastating.",
      "Salvage: GLA units can pick up crates from destroyed vehicles to upgrade their weapons. A 2-stripe Technical or Quad Cannon is a beast.",
      "Stealth Tactics: Use Jarmen Kell and Hijackers to steal enemy vehicles. A stolen Overlord with GLA salvage is the strongest unit in the game."
    ],
    proTips: "The Jarmen Kell can snipe vehicle drivers. Use this to steal high-tech USA or China vehicles for yourself. Sniped vehicles don't count towards unit limits."
  }
];

export const PRO_TRICKS = [
  {
    title: "The Wide Line Move",
    description: "To move units in a wider line rather than a tight cluster, select your units, hold the Right Mouse Button, and drag in the direction you want them to face. This spreads them out, making them less vulnerable to area-of-effect weapons like MiGs or SCUD Launchers."
  },
  {
    title: "Waypoints (Alt + Click)",
    description: "Hold Alt while giving move or attack orders to set waypoints. This allows you to flank the enemy or scout specific paths without constant micro-management. You can also use 'Z' for planning mode."
  },
  {
    title: "Secondary Economy",
    description: "Never rely solely on supply docks. USA needs Supply Drop Zones, China needs Hackers/Internet Centers, and GLA needs Black Markets. Start building these as soon as your first supply dock is half-empty."
  },
  {
    title: "Countering Stealth",
    description: "USA has Pathfinders and Drones. China has Troop Crawlers and Listening Outposts. GLA has Radar Vans. Always have detection in your main army to avoid being wiped by hidden units like Jarmen Kell or Lotus."
  },
  {
    title: "Force Fire (Ctrl + Click)",
    description: "Use Ctrl + Click to force your units to fire at a specific ground location. This is useful for predicting enemy movement with slow projectiles or clearing trees/obstacles."
  },
  {
    title: "Unit Crushing",
    description: "Heavy vehicles can crush infantry. Hold Alt while clicking behind enemy infantry to force your tanks to drive over them, killing them instantly regardless of health."
  }
];

export const MASTERCLASS = [
  {
    category: "Early Game Build Orders",
    items: [
      {
        title: "USA: The Fast Humvee",
        content: "Power -> 2x Supply -> Barracks (1 MD) -> War Factory -> Humvee. Load the MD into the Humvee and harass enemy workers immediately. This forces the enemy to spend money on defense early."
      },
      {
        title: "China: Dual Supply Boom",
        content: "Power -> 2x Supply -> War Factory -> 2x Gattling. China needs a massive economy. Don't build a Barracks unless you see a GLA Technical rush coming. Focus on getting Overlords out by the 5-minute mark."
      },
      {
        title: "GLA: Terror Technical",
        content: "Supply -> Barracks -> War Factory -> Technical + 2 Terrorists. Drive into the enemy supply line, unload, and detonate. One successful hit can win the game in the first 3 minutes."
      }
    ]
  },
  {
    category: "Army Combinations",
    items: [
      {
        title: "USA: The 'Vee' Deathball",
        content: "3-4 Humvees (loaded with 3 Missile Defenders, 1 Pathfinder, 1 Ranger) + 1 Ambulance + 1 Avenger. The Pathfinder snipes infantry, MDs kill tanks, and the Avenger stops missiles."
      },
      {
        title: "China: The Iron Curtain",
        content: "3 Overlords (1 Propaganda, 2 Gattling) + 2 ECM Tanks + 2 Gattling Tanks. The ECMs disable incoming missiles and vehicles, while the Overlords provide the heavy firepower."
      },
      {
        title: "GLA: The Quad/Scorpion Mix",
        content: "5 Quad Cannons + 4 Scorpion Tanks (with Rocket upgrade). Quads clear air and infantry, while Scorpions handle vehicles. Use Tunnels to retreat and heal instantly."
      }
    ]
  },
  {
    category: "Special Maneuvers",
    items: [
      {
        title: "The Tunnel Pop (GLA)",
        content: "1. Build a Tunnel near enemy base. 2. Select units in any other Tunnel. 3. Click the new Tunnel. 4. Units exit instantly. TIP: Use a Technical to transport a Worker to the build site for a surprise flank."
      },
      {
        title: "Laser Lock Micro (USA)",
        content: "Select Missile Defenders, press 'D', click target. While locking, you can move the units slightly. If the target moves out of range, the lock breaks. Use this to focus fire on high-value targets like Overlords."
      },
      {
        title: "ECM Disabling (China)",
        content: "Right-click an enemy vehicle with an ECM tank to disable its weapons entirely. Use this on enemy Heroes (Jarmen Kell/Burton) or heavy artillery to render them useless while your tanks finish them off."
      }
    ]
  },
  {
    category: "Defensive Strategy",
    items: [
      {
        title: "The 'V' Formation",
        content: "Arrange your base defenses in a V-shape. Place anti-infantry at the tip and anti-tank at the wings. This forces the enemy into a crossfire where they take damage from multiple angles."
      },
      {
        title: "Garrisoning Buildings",
        content: "Always garrison neutral buildings near your base with Missile Defenders or Tank Hunters. They get a massive range and defense bonus. Use Flashbangs or Dragon Tanks to clear enemy-held buildings."
      },
      {
        title: "The 'Worker' Bait",
        content: "Leave a GLA worker visible near a Tunnel. When the enemy commits to attacking the worker, pop out your hidden Quads. It's a classic pro bait that punishes over-aggressive players."
      }
    ]
  }
];
