import styles from "./SectionHeroHeader.module.css"
import clsx from "clsx"

type Props = {
  title: string
  subtitle?: string
  variant?: "default" | "card"
  color?: "blue" | "gold" | "red" | "purple"
}

export default function SectionHeroHeader({
  title,
  subtitle,
  variant = "default",
  color = "blue",
}: Props) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[variant],
        styles[color]
      )}
    >
      {variant === "default" ? (
        <div className={styles.decor}>
          <span className={styles.lineLeft} />
          <span className={styles.diamond} />

          <h2 className={styles.title}>{title}</h2>

          <span className={styles.diamond} />
          <span className={styles.lineRight} />
        </div>
      ) : (
        <> 
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.decor}>
            <span className={styles.lineLeft} />
            <span className={styles.diamond} />
            <span className={styles.lineRight} />
          </div>
        </>
      )}

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}