"use client";

import Tabs from "@/components/patterns/Tabs/Tabs";
import styles from "./RaceFilterBar.module.css";

import { Race } from "@/types/ranking";

interface Props {
  value: Race;
  onChange: (race: Race) => void;
}

export default function RaceFilterBar({ value, onChange }: Props) {
  const tabs: { key: Race; label: string }[] = [
    { key: "all", label: "ALL" },
    { key: "bunny", label: "Bunny" },
    { key: "buffalo", label: "Buffalo" },
    { key: "raccoon", label: "Raccoon" },
    { key: "cat", label: "Cat" },
    { key: "sheep", label: "Sheep" },
    { key: "lion", label: "Lion" },
    { key: "fox", label: "Fox" },
    { key: "dragon", label: "Dragon" },
  ];

  return (
    <div className={styles.wrapper}>
      <Tabs<Race>
        tabs={tabs}
        value={value}
        onChange={onChange}
        size="sm"
      />
    </div>
  );
}