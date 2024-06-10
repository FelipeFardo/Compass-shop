import type { ReactNode } from 'react'
import { Image } from './Image'
import { Title } from './Title'

import styles from './index.module.css'

interface BannerProps {
  children: ReactNode
}

function Root({ children }: BannerProps) {
  return <div className={styles.bannerContainer}>{children}</div>
}

export { Root, Image, Title }
