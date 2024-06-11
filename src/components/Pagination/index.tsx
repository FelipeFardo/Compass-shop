import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './index.module.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  active?: boolean
}

function Button({ children, active, ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${active ? `${styles.active}` : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

function Next({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.btn} ${styles.next}`} {...props}>
      Next
    </button>
  )
}

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <div className={styles.root}>{children}</div>
}

export { Root, Button, Next }
