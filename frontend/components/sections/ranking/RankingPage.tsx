"use client"

import { useMemo, useState } from "react";

import CatFilterBar from "./CatFilterBar/CatFilterBar";
import RaceFilterBar from "./RaceFilterBar/RaceFilterBar";
import StatsRibbon, { Stats } from "../../patterns/Ribbon/StatsRibbon";
import RankingPodium from "./Podium/RankingPodium";
import RankingTable from "./RankingTable/RankingTable";
import Pagination from "./Pagination/Pagination";
import SectionHeroHeader from "@/components/ui/SectionHeroHeader/SectionHeroHeader";
import {Player, Race, RankingTab } from "@/types/ranking";
import Starfield from "@/components/effects/Starfield";
import styles from "./RankingPage.module.css";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

interface Props {
  initialPlayers: Player[];
  initialStats: Stats;
}

export default function RankingPage({
  initialPlayers,
  initialStats,
}: Props) {
  const [tab, setTab] = useState<RankingTab>("level");
  const [race, setRace] = useState<Race>("all");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  const filtered = useMemo(() => {
    let data = [...initialPlayers];

    if (race !== "all") {
      data = data.filter((p) => p.race === race);
    }

    switch (tab) {
      case "level":
        data.sort((a, b) => b.level - a.level);
        break;

      case "guild":
        data.sort((a, b) => a.guild.localeCompare(b.guild));
        break;

      case "boss":
        break;

      case "galders":
        break;
    }

    return data;
  }, [initialPlayers, race, tab]);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const top3 = useMemo(() => filtered.slice(0, 3), [filtered]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  return (
    <div className={styles.container}>
      <Starfield/>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <SectionHeroHeader
        title="Rankings"
      />
      <CatFilterBar value={tab} onChange={setTab} />
      <RaceFilterBar value={race} onChange={setRace} />
      <StatsRibbon stats={initialStats} />
      
      <SectionHeader title="Top Players"/>
      <div className={styles.ranking}>
        <RankingPodium top3={top3} />
        <RankingTable players={paginated} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
        <div className={styles.updateNote}>
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

    </div>
  );
}