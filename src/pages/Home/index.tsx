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
            initialResult={1}
            filter={filter}
            setFilter={handleFilterChange}
          />
          <FilterComponent.ItemsPerPage ItemsPerPage={16} />
        </FilterComponent.Content>
      </FilterComponent.Root>
      <ColletionProducts products={products} />
      <Pagination.Root>
        <Pagination.Button active={true}>1</Pagination.Button>
        <Pagination.Button>2</Pagination.Button>
        <Pagination.Button>3</Pagination.Button>
        <Pagination.Next />
      </Pagination.Root>
    </section>
  )
}
