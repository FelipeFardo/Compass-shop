import './App.css'

import { Header } from './components/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Container } from './components/Container'
import * as BannerCertificates from './components/BannerCertificates'
import trophyIcon from './assets/icons/trophy.svg'
function App() {
  return (
    <>
      <Header />
      <Container>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </Container>
      <BannerCertificates.Root>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={trophyIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title>High Quality</BannerCertificates.Title>
            <BannerCertificates.Description>
              crafted from top materials
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={trophyIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title>High Quality</BannerCertificates.Title>
            <BannerCertificates.Description>
              crafted from top materials
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={trophyIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title>High Quality</BannerCertificates.Title>
            <BannerCertificates.Description>
              crafted from top materials
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
        <BannerCertificates.Card>
          <BannerCertificates.Icon src={trophyIcon} />
          <BannerCertificates.Content>
            <BannerCertificates.Title>High Quality</BannerCertificates.Title>
            <BannerCertificates.Description>
              crafted from top materials
            </BannerCertificates.Description>
          </BannerCertificates.Content>
        </BannerCertificates.Card>
      </BannerCertificates.Root>
    </>
  )
}

export default App
