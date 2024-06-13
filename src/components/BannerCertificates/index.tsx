import type { ReactNode } from 'react'
import styles from './index.module.css'

interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return <h3 className={styles.title}>{title}</h3>
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
  return <div>{children}</div>
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
