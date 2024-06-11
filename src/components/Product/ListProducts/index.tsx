import * as ProductCard from '../Card'

import styles from './index.module.css'
import type { Product } from '../../../@types/product'
import productImage01 from '../../../assets/images/product_01.png'
import productImage02 from '../../../assets/images/product_02.png'
import productImage03 from '../../../assets/images/product_03.png'
import productImage04 from '../../../assets/images/product_04.png'

interface ColletionProductsProps {
  products: Product[]
}

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export function ColletionProducts({ products }: ColletionProductsProps) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        const elements = [
          productImage01,
          productImage02,
          productImage03,
          productImage04,
        ]
        const randomElement = getRandomElement(elements)
        return (
          <ProductCard.Root key={product.id}>
            {product.discountPrice && (
              <ProductCard.DiscountProduct percentual={product.discountPrice} />
            )}
            {product.new && !product.priceOld && <ProductCard.NewProduct />}
            <ProductCard.Image url={randomElement} alt="" />
            <ProductCard.Content>
              <ProductCard.Title name={product.name} />
              <ProductCard.Description>
                {product.description}
              </ProductCard.Description>
              <ProductCard.ContentPrice>
                <ProductCard.Price priceInCents={product.price} />
                {product.priceOld && (
                  <ProductCard.PriceOld priceOldInCents={product.priceOld} />
                )}
              </ProductCard.ContentPrice>
            </ProductCard.Content>
          </ProductCard.Root>
        )
      })}
    </div>
  )
}
