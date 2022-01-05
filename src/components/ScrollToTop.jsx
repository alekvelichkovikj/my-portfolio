import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ThemeContext } from '../context/theme'
import { IoArrowUp } from 'react-icons/io5'

export const ScrollToTop = () => {
  const [{ isDark }] = useContext(ThemeContext)

  const scrollWithOffsetHome = (elHome) => {
    const yCoordinate = elHome.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -130
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <>
      <Link
        className={isDark ? 'text-light' : 'text-dark'}
        smooth
        to='#home'
        scroll={(home) => scrollWithOffsetHome(home)}
      >
        <IoArrowUp
          size={window.innerWidth < 374 && 35}
          className='back-to-top'
        />
      </Link>
    </>
  )
}
