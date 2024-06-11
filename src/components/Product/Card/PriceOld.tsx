import { formatMoney } from '../../../utils/formatMoney'
import styles from './index.module.css'
interface PriceOldProps {
  priceOldInCents: number
}

export function PriceOld({ priceOldInCents }: PriceOldProps) {
  const priceOldInDolar = formatMoney(priceOldInCents)

  return <span className={styles.priceOld}>Rp {priceOldInDolar}</span>
}
