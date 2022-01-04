import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Home = () => {
  const [{ isDark }] = useContext(ThemeContext)

  return (
    <div id='home'>
      <div className='container'>
        <div>
          <h3 className='btn-yellow'>Hi, Im Alek</h3>
          <p>I'm a Web Developer and this is my online portfolio</p>
        </div>

        <div className='img'></div>

        <div>
          <p>
            Please have a look around & feel free to contact me or visit my
            LinkedIn & Github. You can find the source code for this project
            <span className='btn-yellow ml-1'>
              <a
                className='text-dark'
                href='https://github.com/alekvelichkovikj/my-portfolio'
              >
                <strong>here!</strong>
              </a>
            </span>
          </p>

          <div className='social-icons'>
            <a
              className={isDark ? 'text-light' : 'text-dark'}
              href='https://github.com/alekvelichkovikj'
              target='blank'
            >
              <FaGithub size={40} className='social-icon' />
            </a>

            <a
              className={isDark ? 'text-light' : 'text-dark'}
              href='https://www.linkedin.com/in/aleksandarvelichkovikj/'
              target='blank'
            >
              <FaLinkedin size={40} className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
