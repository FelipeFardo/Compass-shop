import './App.css'
import * as Banner from './components/Banner'
import { Header } from './components/Header'
import imgBanner from './assets/images/banner.jpeg'
import { Container } from './components/Container'
function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner.Root>
          <Banner.Image imageUrl={imgBanner} />
          <Banner.Title>Shop</Banner.Title>
        </Banner.Root>
      </Container>
    </>
  )
}

export default App
