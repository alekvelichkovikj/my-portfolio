import { Navbar } from './components/Navbar'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from './context/theme'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './components/Home'

export const App = () => {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <Container>
        <Navbar />
        <Home />
        <ScrollToTop />
      </Container>
    </div>
  )
}

const Container = styled.div`
  height: 5000px;
`
