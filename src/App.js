import { Navbar } from './components/Navbar'
import { useContext } from 'react'
import { ThemeContext } from './context/theme'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './components/Home'
import { Bio } from './components/Bio'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export const App = () => {
  const [{ theme }] = useContext(ThemeContext)

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        paddingBottom: '150px',
      }}
    >
      <Navbar />
      <Home />
      <Bio />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  )
}
