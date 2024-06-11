import type { ReactNode } from 'react'

import styles from './index.module.css'

// Banner Root
interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}
// Banner Description
interface DescriptionProps {
  children: ReactNode
}

function Description({ children }: DescriptionProps) {
  return <div className={styles.description}>{children}</div>
}
// Banner Image
interface Image {
  imageUrl: string
}

function Image({ imageUrl }: Image) {
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  )
}
// Banner Content
interface ContentProps {
  children: ReactNode
}

function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>
}

// Banner Title
interface TitleProps {
  children: ReactNode
}
function Title({ children }: TitleProps) {
  return <div className={styles.title}>{children}</div>
}

export { Root, Image, Title, Description, Content }
