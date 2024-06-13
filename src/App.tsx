import './App.css'

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Container } from './components/Container'
import * as BannerCertificates from './components/BannerCertificates'
import trophyIcon from './assets/icons/trophy.svg'
import guaranteeIcon from './assets/icons/guarantee.svg'
import shippignIcon from './assets/icons/shippign.svg'
import customerSupportIcon from './assets/icons/custumer-support.svg'

import { Footer } from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <BannerCertificates.Root>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={trophyIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title title="High Quality" />
            <BannerCertificates.Description>
              crafted from top materials
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={guaranteeIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title title="Warranty Protection" />
            <BannerCertificates.Description>
              Over 2 years
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={shippignIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title title="Free Shipping" />
            <BannerCertificates.Description>
              Order over 150 $
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={customerSupportIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title title="24 / 7 Support" />
            <BannerCertificates.Description>
              Dedicated support
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
      </BannerCertificates.Root>
      <Footer />
    </>
  )
}

export default App
