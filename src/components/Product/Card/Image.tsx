import styles from './index.module.css'

interface ImageProps {
  url: string
  alt?: string
}

export function Image({ alt, url }: ImageProps) {
  return <img src={url} alt={alt} className={styles.imgContainer} />
}
