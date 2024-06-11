import { formatMoney } from '../../../utils/formatMoney'
import styles from './index.module.css'
interface PriceProps {
  priceInCents: number
}

export function Price({ priceInCents }: PriceProps) {
  const priceInDolar = formatMoney(priceInCents)

  return <span className={styles.price}>Rp {priceInDolar}</span>
}
