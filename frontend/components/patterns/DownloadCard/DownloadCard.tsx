import Card from "@/components/ui/Card/Card"
import Button from "@/components/ui/Button/Button"
import styles from "./DownloadCard.module.css"

type Props = {
  title: string
  description: string
  size: string
  highlight?: "primary" | "secondary" | "accent"
  actionLabel: string
}

export default function DownloadCard({
  title,
  description,
  size,
  highlight = "primary",
  actionLabel,
}: Props) {
  return (
    <Card glow>
      <div className={styles.wrapper} data-variant={highlight}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <span className={styles.size}>{size}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <Button>
          {actionLabel}
        </Button>
      </div>
    </Card>
  )
}