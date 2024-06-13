import './App.css'

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { Container } from './components/Container'
import { BannerCertificates } from './components/BannerCertificates'

import { Footer } from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <BannerCertificates />
      <Footer />
    </>
  )
}

export default App
