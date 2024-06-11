import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './index.module.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'outline'
}

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${variant === 'outline' ? styles.outline : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
