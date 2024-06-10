import type { ReactNode } from 'react'
import styles from './index.module.css'

interface ContainerProps {
  children: ReactNode
}
export function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>
}
