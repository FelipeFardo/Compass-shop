import * as Banner from '../../components/Banner'
import vectorIcon from '../../assets/icons/vector.svg'
import imgBanner from '../../assets/images/banner.jpeg'
import * as FilterComponent from '../../components/FilterComponent'
import { ColletionProducts } from '../../components/Product/ListProducts'
import { getProducts } from '../../http/get-products'
import * as Pagination from '../../components/Pagination'

export function Home() {
  const products = getProducts()
  return (
    <section>
      <Banner.Root>
        <Banner.Image imageUrl={imgBanner} />
        <Banner.Content>
          <Banner.Title>Shop</Banner.Title>
          <Banner.Description>
            <span>
              Home <img src={vectorIcon} alt="#" />
            </span>
            Shop
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>
      <FilterComponent.Root>
        <FilterComponent.FilterDetails
          totalResults={32}
          finish={16}
          initialResult={1}
        />
        <FilterComponent.ItemsPerPage ItemsPerPage={16} />
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
