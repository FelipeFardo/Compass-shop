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

function BannerCertificates() {
  return (
    <Root>
      <Card>
        <Icon src="/icons/trophy.svg" />
        <Content>
          <Title title="High Quality" />
          <Description>crafted from top materials</Description>
        </Content>
      </Card>
      <Card>
        <Icon src="/icons/guarantee.svg" />
        <Content>
          <Title title="Warranty Protection" />
          <Description>Over 2 years</Description>
        </Content>
      </Card>
      <Card>
        <Icon src="/icons/shippign.svg" />
        <Content>
          <Title title="Free Shipping" />
          <Description>Order over 150 $</Description>
        </Content>
      </Card>
      <Card>
        <Icon src="/icons/custumer-support.svg" />
        <Content>
          <Title title="24 / 7 Support" />
          <Description>Dedicated support</Description>
        </Content>
      </Card>
    </Root>
  )
}

export { Card, Description, Icon, Root, Title, Content, BannerCertificates }
