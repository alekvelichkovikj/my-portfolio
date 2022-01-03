import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ThemeContext } from '../context/theme'
import { IoArrowUp } from 'react-icons/io5'

export const ScrollToTop = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <>
      <Link smooth to='#home'>
        <IoArrowUp
          className={isDark ? 'back-to-top-light' : 'back-to-top-dark'}
        />
      </Link>
    </>
  )
}
