import * as Banner from '../../components/Banner'
import vectorIcon from '../../assets/icons/vector.svg'
import imgBanner from '../../assets/images/banner.jpeg'
import * as FilterComponent from '../../components/FilterComponent'
import { ColletionProducts } from '../../components/Product/ListProducts'
import { getProducts } from '../../http/get-products'
import * as Pagination from '../../components/Pagination'
import styles from './index.module.css'
import { useState } from 'react'

export type Filters =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'

export function Home() {
  const [filter, setFilter] = useState<Filters>('default')
  const [pageIndex, setPageIndex] = useState(1)
  const [itensPerPage, setItensPerPage] = useState(20)

  const handleFilterChange = (filter: Filters) => {
    setFilter(filter)
  }

  const products = getProducts()
  return (
    <section>
      <Banner.Root>
        <Banner.Image imageUrl={imgBanner} />
        <Banner.Content>
          <Banner.Title>Shop</Banner.Title>
          <Banner.Description>
            <span className={`${styles.space} ${styles.strong}`}> Home </span>
            <img
              src={vectorIcon}
              alt="#"
              className={`${styles.icon} ${styles.strong}`}
            />
            <span className={styles.space}> Shop </span>
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>
      <FilterComponent.Root>
        <FilterComponent.Content>
          <FilterComponent.FilterDetails
            totalResults={32}
            finish={16}
            initialResult={pageIndex}
            filter={filter}
            setFilter={handleFilterChange}
          />
          <FilterComponent.ItemsPerPage
            setItensPerPage={setItensPerPage}
            itemsPerPage={itensPerPage}
          />
        </FilterComponent.Content>
      </FilterComponent.Root>
      <ColletionProducts products={products} />
      <Pagination.Root>
        {pageIndex === 1}
        <Pagination.Button
          disabled={pageIndex === 1}
          active={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {String(pageIndex - 1 ?? 1)}
        </Pagination.Button>
        <Pagination.Button
          active={pageIndex !== 1}
          onClick={() =>
            setPageIndex(pageIndex === 1 ? pageIndex + 1 : pageIndex)
          }
        >
          {String(pageIndex)}
        </Pagination.Button>
        <Pagination.Button onClick={() => setPageIndex(pageIndex + 1)}>
          {String(pageIndex + 1)}
        </Pagination.Button>
        <Pagination.Next onClick={() => setPageIndex(pageIndex + 1)} />
      </Pagination.Root>
    </section>
  )
}
