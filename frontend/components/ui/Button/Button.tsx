'use client'

import * as React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

type Variant =
  | 'mint'
  | 'green'
  | 'outline'
  | 'ghost'
  | 'gold'
  | 'accent'

type Size = 'sm' | 'md' | 'lg' | 'square'

type State = 'default' | 'active' | 'disabled'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  state?: State
  loading?: boolean

  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'

  iconOnly?: boolean
}

export default function Button({
  children,
  variant = 'mint',
  size = 'md',
  state = 'default',
  loading = false,

  icon,
  iconPosition = 'left',
  iconOnly = false,

  className,
  disabled,
  ...props
}: Props) {
  const isDisabled = disabled || state === 'disabled' || loading

  return (
    <button
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        styles[state],
        iconOnly && styles.iconOnly,
        isDisabled && styles.disabled,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* LOADING */}
      {loading && <span className={styles.loader} />}

      {/* LEFT ICON */}
      {!loading && icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}

      {/* LABEL */}
      {!iconOnly && <span className={styles.label}>{children}</span>}

      {/* RIGHT ICON */}
      {!loading && icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  )
}