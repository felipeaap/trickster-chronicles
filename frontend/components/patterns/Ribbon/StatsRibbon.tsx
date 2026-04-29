import styles from "./StatsRibbon.module.css";

export interface Stats {
  registered: number;
  online: number;
  guilds: number;
  maxLevel: number;
}

interface Props {
  stats: Stats;
}

export default function StatsRibbon({ stats }: Props) {
  return (
    <div className={styles.grid}>
      <Card label="Registered Players" value={stats.registered} />
      <Card label="Currently Online" value={stats.online} highlight="green" />
      <Card label="Active Guilds" value={stats.guilds} />
      <Card label="Max Level Reached" value={stats.maxLevel} highlight="gold" />
    </div>
  );
}

interface CardProps {
  label: string;
  value: number;
  highlight?: "green" | "gold";
}

function Card({ label, value, highlight }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={`${styles.value} ${highlight ? styles[highlight] : ""}`}>
        {value}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}