import type { ReactNode } from 'react'
import filterIcon from '../../assets/icons/system-uicons:filtering.svg'

import styles from './index.module.css'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}
// Filter Details
interface FilterDetailsProps {
  totalResults: number
  initialResult: number
  finish: number
}

function FilterDetails({
  finish,
  initialResult,
  totalResults,
}: FilterDetailsProps) {
  return (
    <div className={styles.filter}>
      <img src={filterIcon} alt="" />
      Filter
      <span className={styles.separator}>
        Showning {initialResult}-{finish} of {totalResults} results
      </span>
    </div>
  )
}

// items Per Page
interface ItemsPerPageProps {
  ItemsPerPage: number
}
function ItemsPerPage({ ItemsPerPage }: ItemsPerPageProps) {
  return (
    <div>
      Show <span>{ItemsPerPage}</span>
    </div>
  )
}

export { Root, ItemsPerPage, FilterDetails }
