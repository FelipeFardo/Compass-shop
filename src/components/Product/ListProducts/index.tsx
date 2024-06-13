import * as ProductCard from '../Card'

import styles from './index.module.css'
import type { Product } from '../../../@types/product'
interface ColletionProductsProps {
  products: Product[]
}

export function ColletionProducts({ products }: ColletionProductsProps) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <ProductCard.Root key={product.id}>
            <ProductCard.CardHover />
            {product.discountPrice && (
              <ProductCard.DiscountProduct percentual={product.discountPrice} />
            )}
            {product.new && !product.priceOld && <ProductCard.NewProduct />}
            <ProductCard.Image
              url={`/images/${product.imageUrl}`}
              alt="Imagem"
            />

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
