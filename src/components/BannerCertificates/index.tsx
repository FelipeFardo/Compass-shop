import type { ReactNode } from 'react'
import styles from './index.module.css'

interface TitleProps {
  children: string
}

function Title({ children }: TitleProps) {
  return <h4 className={styles.title}>{children}</h4>
}

interface DescriptionProps {
  children: string
}

function Description({ children }: DescriptionProps) {
  return <span className={styles.description}>{children}</span>
}

interface IconProps {
  src: string
}

interface ContentProps {
  children: ReactNode
}

function Content({ children }: ContentProps) {
  return <h4>{children}</h4>
}

function Icon({ src }: IconProps) {
  return <img src={src} width={60} height={60} alt="" />
}

interface CardProps {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>
}

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.root}>{children}</div>
}

export { Card, Description, Icon, Root, Title, Content }
