import styles from './index.module.css'

interface DiscountProductProps {
  percentual: number
}

export function DiscountProduct({ percentual }: DiscountProductProps) {
  return (
    <div className={`${styles.badge} ${styles.discount}`}>-{percentual}%</div>
  )
}
