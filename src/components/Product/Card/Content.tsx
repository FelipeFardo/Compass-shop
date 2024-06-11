import type { ReactNode } from 'react'
import styles from './index.module.css'
interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>
}
