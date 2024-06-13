import type { ReactNode } from 'react'
import styles from './index.module.css'

import { Description } from './Description'
import { Image } from './Image'
import { Price } from './Price'
import { Title } from './Title'
import { Content } from './Content'
import { PriceOld } from './PriceOld'
import { ContentPrice } from './ContentPrice'
import { DiscountProduct } from './BadgeDiscountProduct'
import { NewProduct } from './BadgeNewProduct'
import { CardHover } from './CardHover'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}

export {
  Root,
  Image,
  Price,
  Title,
  Description,
  Content,
  PriceOld,
  ContentPrice,
  DiscountProduct,
  NewProduct,
  CardHover,
}
