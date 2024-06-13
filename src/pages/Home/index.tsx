import * as Banner from '../../components/Banner'

import * as FilterComponent from '../../components/FilterComponent'
import { ColletionProducts } from '../../components/Product/ListProducts'
import { getProducts } from '../../http/get-products'
import * as Pagination from '../../components/Pagination'
import styles from './index.module.css'
import { useEffect, useState } from 'react'
import type { Product } from '../../@types/product'

export type Filters =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'

export function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter] = useState<Filters>('default')
  const [pageIndex, setPageIndex] = useState(1)
  const [finished, setFinished] = useState(false)
  const [itensPerPage, setItensPerPage] = useState(20)
  const [maxResults, setMaxResults] = useState(0)
  const [startResults, setStartResults] = useState(0)

  const handleFilterChange = (filter: Filters) => {
    setFilter(filter)
  }

  const handleFunctionItensPerPage = (value: number) => {
    const itensPerPage = maxResults > value ? value : maxResults
    setItensPerPage(itensPerPage)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts({
        filter,
        itensPerPage,
        pageIndex,
      })
      setProducts(response.products)

      setStartResults(response.startResults)
      setMaxResults(response.maxResults)

      setFinished(response.finished)
    }
    fetchData()
  }, [filter, pageIndex, itensPerPage])

  return (
    <section>
      <Banner.Root>
        <Banner.Image imageUrl="/images/banner.jpeg" />
        <Banner.Content>
          <Banner.Title>Shop</Banner.Title>
          <Banner.Description>
            <span className={`${styles.space} ${styles.strong}`}> Home </span>
            <img
              src="icons/vector.svg"
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
            totalResults={maxResults}
            finish={startResults + products.length - 1}
            initialResult={startResults}
            filter={filter}
            setFilter={handleFilterChange}
          />
          <FilterComponent.ItemsPerPage
            setItensPerPage={handleFunctionItensPerPage}
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
          {String(pageIndex - 1 ? pageIndex - 1 : 0)}
        </Pagination.Button>
        <Pagination.Button
          active={pageIndex !== 1}
          disabled={finished}
          onClick={() =>
            setPageIndex(pageIndex === 1 ? pageIndex + 1 : pageIndex)
          }
        >
          {String(pageIndex)}
        </Pagination.Button>
        <Pagination.Button
          disabled={finished}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          {String(pageIndex + 1)}
        </Pagination.Button>
        <Pagination.Next
          disabled={finished}
          onClick={() => setPageIndex(pageIndex + 1)}
        />
      </Pagination.Root>
    </section>
  )
}
