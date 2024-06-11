import styles from './index.module.css'

interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return <h2 className={styles.title}>{name}</h2>
}
