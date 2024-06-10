import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './index.module.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  )
}
