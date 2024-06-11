import type { ReactNode } from 'react'
import styles from './index.module.css'
interface ContentPriceProps {
  children: ReactNode
}

export function ContentPrice({ children }: ContentPriceProps) {
  return <div className={styles.containerPrice}>{children}</div>
}
