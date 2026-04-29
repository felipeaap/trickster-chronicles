import styles from "./RankingPodium.module.css";
import { Player } from "@/types/ranking";
import PodiumCard from "./PodiumCard/PodiumCard";

interface Props {
  top3: Player[];
}

export default function RankingPodium({ top3 }: Props) {
  return (
    <div className={styles.podium}>
      {top3.map((player, index) => (
        <PodiumCard key={player.name} player={player} rank={(index + 1) as 1 | 2 | 3} />
      ))}
    </div>
  );
}