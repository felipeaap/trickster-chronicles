"use client";

import Tabs from "@/components/patterns/Tabs/Tabs";
import styles from "./CatFilterBar.module.css";
import { RankingTab } from "@/types/ranking";

interface Props {
  value: RankingTab;
  onChange: (val: RankingTab) => void;
}

export default function CatFilterBar({ value, onChange }: Props) {
  const tabs: { key: RankingTab; label: string }[] = [
    { key: "level", label: "Level" },
    { key: "guild", label: "Guild" },
    { key: "boss", label: "Boss Kill" },
    { key: "galders", label: "Galders" },
  ];

  return (
    <div className={styles.wrapper}>
      <Tabs<RankingTab> tabs={tabs} value={value} onChange={onChange} size="lg"/>
    </div>
  );
}