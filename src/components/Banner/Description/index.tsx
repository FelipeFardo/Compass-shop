import type { ReactNode } from 'react'
import styles from './index.module.css'
interface DescriptionProps {
  children: ReactNode
}

export function Description({ children }: DescriptionProps) {
  return <div className={styles.description}>{children}</div>
}
