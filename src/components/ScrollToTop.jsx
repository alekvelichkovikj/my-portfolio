import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ThemeContext } from '../context/theme'
import { IoArrowUp } from 'react-icons/io5'

export const ScrollToTop = () => {
  const [{ isDark }] = useContext(ThemeContext)

  return (
    <>
      <Link className={isDark ? 'text-light' : 'text-dark'} smooth to='#home'>
        <IoArrowUp className='back-to-top' />
      </Link>
    </>
  )
}
