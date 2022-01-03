import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/theme'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { IoPlanetOutline } from 'react-icons/io5'
import { WiSolarEclipse, WiMoonWaxingCrescent3 } from 'react-icons/wi'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [{ isDark }, toggleTheme] = useContext(ThemeContext)

  return (
    <Nav>
      <div className='nav'>
        <Container>
          <Logo onClick={() => setIsOpen(false)}>
            <Link smooth to='#home'>
              <IoPlanetOutline className='icon' />
            </Link>
          </Logo>

          <Logo className='icon' onClick={toggleTheme}>
            {isDark ? <WiSolarEclipse /> : <WiMoonWaxingCrescent3 />}
          </Logo>

          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>

          <Menu className='menu' isOpen={isOpen}>
            <MenuLink onClick={() => setIsOpen(false)}>
              <Link className='yellow' smooth to={'#bio'}>
                Bio
              </Link>
            </MenuLink>

            <MenuLink onClick={() => setIsOpen(false)}>
              <Link smooth to='#education'>
                Education
              </Link>
            </MenuLink>

            <MenuLink onClick={() => setIsOpen(false)}>
              <Link smooth to='#projects'>
                Projects
              </Link>
            </MenuLink>

            <MenuLink onClick={() => setIsOpen(false)}>
              <Link className='yellow' smooth to='#contact'>
                Contact
              </Link>
            </MenuLink>

            <MenuLink onClick={() => setIsOpen(false)}>
              <a
                target='blank'
                href='https://drive.google.com/file/d/1Nab9RqJq3T0GpilClfVEibc-boJP7ZBQ/view?usp=sharing'
              >
                Resume
              </a>
            </MenuLink>
          </Menu>
        </Container>
      </div>
    </Nav>
  )
}

const Nav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #fcf5eb;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #2f2f2f;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 878px) {
    display: flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 878px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '350px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`

const MenuLink = styled.span`
  padding: 20px 30px;
  text-align: center;
  color: #3f3f3f;
`

const Logo = styled.span`
  padding: 20px 0;
  font-size: 28px;
  color: #3f3f3f;
`
