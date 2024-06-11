import type { ReactNode } from 'react'

import { ItemsPerPage } from './ItemPerPage'
import { FilterDetails } from './FilterDetails'
import styles from './index.module.css'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}

export { Root, ItemsPerPage, FilterDetails }
