import { Player } from '@/types/ranking'

export function getRankingData() {
  const players: Player[] = [
    {
      rank: 1,
      name: "DarkValkyrie",
      race: "lion",
      avatar: "/assets/icons/podium/lion.png",
      jobIcon: "/assets/icons/lion.png",
      guild: "Eclipse",
      level: 400,
      tmlv: 400,
      exp: "1,284,500,000",
      color: "#FFD700",
    },
    {
      rank: 2,
      name: "SilverFoxTail",
      race: "fox",
      avatar: "/assets/icons/podium/fox.png",
      jobIcon: "/assets/icons/fox.png",
      guild: "Eternal",
      level: 400,
      tmlv: 398,
      exp: "1,102,300,000",
      color: "#C0D2E6",
    },
    {
      rank: 3,
      name: "NightBunny",
      race: "bunny",
      avatar: "/assets/icons/podium/bunny.png",
      jobIcon: "/assets/icons/bunny.png",
      guild: "Eclipse",
      level: 400,
      tmlv: 395,
      exp: "980,750,000",
      color: "#D4844A",
    },

    // ── EXPANDED DATA ──
    {
      rank: 4,
      name: "ZeroKnight",
      race: "buffalo",
      avatar: "/assets/icons/podium/buffalo.png",
      jobIcon: "/assets/icons/buffalo.png",
      guild: "Solaris",
      level: 400,
      tmlv: 390,
      exp: "872,100,000",
      color: "#FFFFFF",
    },
    {
      rank: 5,
      name: "MoonWitch",
      race: "cat",
      avatar: "/assets/icons/podium/cat.png",
      jobIcon: "/assets/icons/cat.png",
      guild: "Eternal",
      level: 400,
      tmlv: 388,
      exp: "744,200,000",
      color: "#FFFFFF",
    },
    {
      rank: 6,
      name: "IceBloom",
      race: "sheep",
      avatar: "/assets/icons/podium/sheep.png",
      jobIcon: "/assets/icons/sheep.png",
      guild: "Nova",
      level: 399,
      tmlv: 385,
      exp: "618,400,000",
      color: "#FFFFFF",
    },
    {
      rank: 7,
      name: "TigerStrike",
      race: "raccoon",
      avatar: "/assets/icons/podium/raccoon.png",
      jobIcon: "/assets/icons/raccoon.png",
      guild: "Solaris",
      level: 399,
      tmlv: 382,
      exp: "502,900,000",
      color: "#FFFFFF",
    },
    {
      rank: 8,
      name: "DeepAnchor",
      race: "dragon",
      avatar: "/assets/icons/podium/dragon.png",
      jobIcon: "/assets/icons/dragon.png",
      guild: "Eclipse",
      level: 397,
      tmlv: 380,
      exp: "418,600,000",
      color: "#FFFFFF",
    },
    {
      rank: 9,
      name: "StormRaven",
      race: "fox",
      avatar: "/assets/icons/podium/fox.png",
      jobIcon: "/assets/icons/fox.png",
      guild: "Nova",
      level: 396,
      tmlv: 376,
      exp: "362,450,000",
      color: "#FFFFFF",
    },
    {
      rank: 10,
      name: "PinkCannon",
      race: "bunny",
      avatar: "/assets/icons/podium/bunny.png",
      jobIcon: "/assets/icons/bunny.png",
      guild: "Eclipse",
      level: 395,
      tmlv: 372,
      exp: "308,200,000",
      color: "#FFFFFF",
    },

    // ── EXTRA FOR PAGINATION TEST ──
    ...Array.from({ length: 20 }).map((_, i) => {
      const baseRank = 11 + i

      const races = [
        "bunny",
        "buffalo",
        "raccoon",
        "cat",
        "sheep",
        "lion",
        "fox",
        "dragon",
      ] as const

      const race = races[i % races.length]

      return {
        rank: baseRank,
        name: `Player${baseRank}`,
        race,
        avatar: `/assets/icons/podium/${race}.png`,
        jobIcon: `/assets/icons/${race}.png`,
        guild: ["Eclipse", "Nova", "Solaris", "Eternal"][i % 4],
        level: 390 - i,
        tmlv: 360 - i,
        exp: `${300 - i * 5},000,000`,
        color: "#FFFFFF",
      } satisfies Player
    }),
  ]

  return {
    players,
    stats: {
      registered: 12450,
      online: 342,
      guilds: 128,
      maxLevel: 400,
    },
  }
}