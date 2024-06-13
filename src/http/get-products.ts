import type { Product } from '../@types/product'
import { productDB } from './products'

export type Filters =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'

interface getProductsRequest {
  pageIndex: number
  filter: Filters
  itensPerPage: number
}

interface getProductsResponse {
  products: Product[]
  itensPerPage: number
  pageIndex: number
  finished: boolean
  maxResults: number
  startResults: number
  endResults: number
}

export async function getProducts({
  filter,
  itensPerPage,
  pageIndex,
}: getProductsRequest): Promise<getProductsResponse> {
  const products: Product[] = productDB
  const maxResults = products.length

  // filter
  const productsFiltered = filterProducts(products, filter)

  const paginatedProducts = pagination(
    productsFiltered,
    pageIndex,
    itensPerPage,
  )
  // indexação
  const startIndex = (pageIndex - 1) * itensPerPage
  const endIndex = startIndex + itensPerPage
  const endResults = endIndex
  const finished = !(maxResults > endIndex)

  return {
    products: paginatedProducts,
    itensPerPage,
    pageIndex,
    finished,
    maxResults,
    endResults,
    startResults: startIndex + 1,
  }
}

function filterProducts(products: Product[], filter: Filters): Product[] {
  let productsFiltered: Product[] = products
  if (filter === 'name-asc') {
    productsFiltered = sortProductsByName(products)
  } else if (filter === 'name-desc') {
    productsFiltered = sortProductsDescByName(products)
  } else if (filter === 'price-asc') {
    productsFiltered = sortByPrice(products, 'asc')
  } else if (filter === 'price-desc') {
    productsFiltered = sortByPrice(products, 'desc')
  }

  return productsFiltered
}

function sortProductsByName(products: Product[]): Product[] {
  return products.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase() // Convertendo para maiúsculas para ordenação
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
}

function sortProductsDescByName(products: Product[]): Product[] {
  return products.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase() // Convertendo para maiúsculas para ordenação
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
      return 1
    }
    if (nameA > nameB) {
      return -1
    }
    return 0
  })
}

function sortByPrice(
  products: Product[],
  order: 'asc' | 'desc' = 'asc',
): Product[] {
  if (order === 'desc')
    return products.slice().sort((a, b) => b.price - a.price)
  return products.slice().sort((a, b) => a.price - b.price)
}

function pagination(
  products: Product[],
  pageIndex: number,
  itensPerPage: number,
) {
  const startIndex = (pageIndex - 1) * itensPerPage
  const endIndex = startIndex + itensPerPage
  const paginatedProducts = products.slice(startIndex, endIndex)

  return paginatedProducts
}
