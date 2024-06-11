import type { ReactNode } from 'react'
import { Image } from './Image'
import { Title } from './Title'

import styles from './index.module.css'
import { Description } from './Description'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.container}>{children}</div>
}

interface ContentProps {
  children: ReactNode
}

function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>
}

export { Root, Image, Title, Description, Content }
