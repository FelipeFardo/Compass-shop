import './App.css'

import { Header } from './components/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Container } from './components/Container'

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
    </>
  )
}

export default App
