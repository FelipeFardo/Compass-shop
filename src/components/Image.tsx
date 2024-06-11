import styles from './index.module.css'

interface Image {
  imageUrl: string
}

export function Image({ imageUrl }: Image) {
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  )
}
