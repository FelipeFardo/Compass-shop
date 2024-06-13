import type { ReactNode } from 'react'
import styles from './index.module.css'

import trophyIcon from '../../assets/icons/trophy.svg'
import guaranteeIcon from '../../assets/icons/guarantee.svg'
import shippignIcon from '../../assets/icons/shippign.svg'
import customerSupportIcon from '../../assets/icons/custumer-support.svg'

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
        <Icon src={trophyIcon} />
        <Content>
          <Title title="High Quality" />
          <Description>crafted from top materials</Description>
        </Content>
      </Card>
      <Card>
        <Icon src={guaranteeIcon} />
        <Content>
          <Title title="Warranty Protection" />
          <Description>Over 2 years</Description>
        </Content>
      </Card>
      <Card>
        <Icon src={shippignIcon} />
        <Content>
          <Title title="Free Shipping" />
          <Description>Order over 150 $</Description>
        </Content>
      </Card>
      <Card>
        <Icon src={customerSupportIcon} />
        <Content>
          <Title title="24 / 7 Support" />
          <Description>Dedicated support</Description>
        </Content>
      </Card>
    </Root>
  )
}

export { Card, Description, Icon, Root, Title, Content, BannerCertificates }
