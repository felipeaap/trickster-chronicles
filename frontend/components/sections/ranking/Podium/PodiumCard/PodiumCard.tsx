import styles from "./PodiumCard.module.css";
import { Player } from "@/types/ranking";

interface CardProps {
  player: Player;
  rank: 1 | 2 | 3;
}

export default function PodiumCard({ player, rank }: CardProps) {
  return (
    <div className={`${styles.card} ${styles["r" + rank]}`} data-race={player.race}>
      <span className={styles.badge}>{rank}st</span>

      <div className={styles.avatar}>
        <img src={player.avatar} alt={player.name} />
      </div>

      <div className={styles.job}>
        <img src={player.jobIcon} alt="job" />
      </div>

      <div className={styles.name}>{player.name}</div>
      <div className={styles.guild}>{player.guild}</div>

      <div className={styles.stats}>
        <div>{player.level}</div>
        <div>{player.tmlv}</div>
      </div>

      <div className={styles.exp}>{player.exp}</div>
    </div>
  );
}