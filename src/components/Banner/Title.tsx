import type { ReactNode } from 'react'
import styles from './index.module.css'
interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return <div className={styles.title}>{children}</div>
}
