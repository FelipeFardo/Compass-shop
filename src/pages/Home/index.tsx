import * as Banner from '../../components/Banner'
import vectorIcon from '../../assets/icons/vector.svg'
import imgBanner from '../../assets/images/banner.jpeg'

export function Home() {
  return (
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
  )
}
