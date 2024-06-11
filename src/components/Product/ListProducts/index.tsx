import * as ProductCard from '../Card'
import productImage from '../../../assets/images/product_01.png'

import styles from './index.module.css'
export function ColletionProducts() {
  return (
    <div className={styles.container}>
      <ProductCard.Root>
        <ProductCard.Image url={productImage}></ProductCard.Image>
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.DiscountProduct percentual={30} />
        <ProductCard.Image url={productImage} />
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />

          <ProductCard.Description>Stylish cafe chair</ProductCard.Description>
          <ProductCard.ContentPrice>
            <ProductCard.Price priceInCents={2000000} />
            <ProductCard.PriceOld priceOldInCents={2000000} />
          </ProductCard.ContentPrice>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.NewProduct />

        <ProductCard.Image url={productImage}></ProductCard.Image>
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />
          <ProductCard.Description>Stylish cafe chair</ProductCard.Description>
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image url={productImage}></ProductCard.Image>
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image url={productImage}></ProductCard.Image>
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />
        </ProductCard.Content>
      </ProductCard.Root>
      <ProductCard.Root>
        <ProductCard.Image url={productImage}></ProductCard.Image>
        <ProductCard.Content>
          <ProductCard.Title name="Syltherine" />
        </ProductCard.Content>
      </ProductCard.Root>
    </div>
  )
}
