import styles from './index.module.css'
import filterIcon from '../../../assets/icons/system-uicons:filtering.svg'

interface FilterDetailsProps {
  totalResults: number
  initialResult: number
  finish: number
}

export function FilterDetails({
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
