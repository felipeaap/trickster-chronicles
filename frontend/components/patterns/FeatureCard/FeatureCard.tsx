import clsx from "clsx"
import styles from "./FeatureCard.module.css"

import Card from "@/components/ui/Card/Card"
import SectionHeroHeader from "@/components/ui/SectionHeroHeader/SectionHeroHeader"

type Props = {
  title: string
  description: string
  icon: string
  color?: "blue" | "purple" | "gold" | "red"
}

export default function FeatureCard({
  title,
  description,
  icon,
  color = "blue",
}: Props) {
  return (
    <Card glow color={color}>
      <div className={clsx(styles.wrapper, styles[color])}>
        <div className={styles.iconWrapper}>
          <img src={icon} alt={title} />
        </div>

        <SectionHeroHeader title={title} variant="card" color={color}/>

        <p className={styles.description}>{description}</p>
      </div>
    </Card>
  )
}