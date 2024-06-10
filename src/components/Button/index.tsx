import type { ReactNode } from 'react'
import styles from './index.module.css'
interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className={styles.btn}>{children}</button>
}
