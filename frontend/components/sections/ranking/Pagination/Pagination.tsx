'use client'

import Button from '@/components/ui/Button/Button'
import styles from './Pagination.module.css'

interface Props {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export default function Pagination({
  page,
  totalPages,
  onChange
}: Props) {

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return
    onChange(p)
  }

  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  )

  return (
    <div className={styles.wrapper}>

      {/* PREVIOUS */}
      <Button
        variant="outline"
        size="square"
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
      >
        ←
      </Button>

      {/* PAGE NUMBERS */}
      {pages.map((p) => {
        const isActive = p === page

        return (
          <Button
            key={p}
            variant={isActive ? 'accent' : 'outline'}
            size="square"
            state={isActive ? 'active' : 'default'}
            onClick={() => goTo(p)}
          >
            {p}
          </Button>
        )
      })}

      {/* ELLIPSIS */}
      {totalPages > 5 && (
        <>
          <span className={styles.dots}>…</span>

          <Button
            variant="outline"
            size="square"
            onClick={() => goTo(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}

      {/* NEXT */}
      <Button
        variant="outline"
        size="square"
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
      >
        →
      </Button>

    </div>
  )
}