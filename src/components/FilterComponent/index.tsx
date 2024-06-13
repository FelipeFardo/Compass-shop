import { useEffect, useRef, type ReactNode } from 'react'

import styles from './index.module.css'
import type { Filters } from '../../pages/Home'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}

// Filter Content

interface ContentProps {
  children: ReactNode
}

function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>
}

// Filter Details
interface FilterDetailsProps {
  totalResults: number
  initialResult: number
  finish: number
  filter: Filters
  setFilter: (filter: Filters) => void
}

function FilterDetails({
  finish,
  initialResult,
  totalResults,
  filter,
  setFilter,
}: FilterDetailsProps) {
  const selectRef = useRef<HTMLSelectElement>(null)

  const ajustarTamanho = () => {
    if (selectRef.current) {
      const texto =
        selectRef.current.options[selectRef.current.selectedIndex].text
      const tamanho = texto.length
      selectRef.current.style.width = tamanho + 'ch'
    }
  }

  useEffect(() => {
    ajustarTamanho()
  }, [filter])

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value as Filters
    setFilter(selectedFilter)
  }

  return (
    <div className={styles.FilterDetailsContainer}>
      <div className={styles.filter}>
        <label htmlFor="filter-select">
          <img
            src="icons/system-uicons:filtering.svg"
            alt=""
            className={styles.filterIcon}
          />
        </label>
        <select
          id="filter-select"
          value={filter}
          onChange={handleFilterChange}
          className={styles.selectFilter}
          ref={selectRef}
        >
          <option value="default">Filter</option>
          <option value="price-asc">Preço do menor para o Maior</option>
          <option value="price-desc">Preço do maior para o menor</option>
          <option value="name-asc">Nome - A - Z</option>
          <option value="name-desc">Nome - Z - A</option>
        </select>
      </div>
      <div>
        <span className={styles.separator}>
          Showning {initialResult}-{finish} of {totalResults} results
        </span>
      </div>
    </div>
  )
}

// items Per Page
interface ItemsPerPageProps {
  itemsPerPage: number
  setItensPerPage: (value: number) => void
}
function ItemsPerPage({ itemsPerPage, setItensPerPage }: ItemsPerPageProps) {
  return (
    <div className={styles.itemsPerPage}>
      <div className={styles.containerInput}>
        Show{' '}
        <input
          type="number"
          min={1}
          max={40}
          value={itemsPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export { Root, ItemsPerPage, FilterDetails, Content }
